import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, withLatestFrom } from 'rxjs/operators';

export default class CSSCustomPropertiesWatch {
    // Holds the original setProperty()-method.
    private _originalSetProperty: CSSStyleDeclaration['setProperty'] = CSSStyleDeclaration.prototype.setProperty;

    // Array of all watchers.
    private _watchers: Array<ICSSCustomPropertiesWatcher> = [];

    /**
     * Constructor. Only does the monkey patching.
     */
    constructor() {
        CSSStyleDeclaration.prototype.setProperty = this._setProperty(this);
    }

    /**
     * Adds a watcher RxJS Subject to an element, to watch for changes on CSS custom properties.
     * 
     * @param $el The element to watch for changes on CSS custom properties. Default is :root.
     * @returns The watcher RxJS Subject
     */
    public watch$(
        $el: HTMLElement | SVGElement = document.documentElement
    ): Subject<Parameters<CSSStyleDeclaration['setProperty']>> {
        if ($el instanceof HTMLElement || $el instanceof SVGElement) {
            const watcherMatch = this._getWatcherMatch($el.style);

            if (watcherMatch === null) {
                const unsubscriber$ = new Subject<void>();
                const subject$ = new Subject<Parameters<CSSStyleDeclaration['setProperty']>>().pipe(
                    takeUntil(unsubscriber$)
                ) as Subject<Parameters<CSSStyleDeclaration['setProperty']>>;
                const ignoreNext$ = new BehaviorSubject<boolean>(false);
                const newWatcher = {
                    cssStyleDeclaration: $el.style
                    , ignoreNext$
                    , subject$
                    , unsubscriber$
                };

                this._watchers = this._watchers.concat(newWatcher);

                subject$.pipe(withLatestFrom(ignoreNext$)).subscribe(([
                    args
                    , ignoreNext
                ]: [
                    Parameters<CSSStyleDeclaration['setProperty']>
                    , boolean
                ]) => {
                    if (ignoreNext === false) {
                        this._setPropertyCheck(newWatcher, args, false);
                    } else {
                        ignoreNext$.next(false);
                    }
                });

                return subject$;
            }

            return watcherMatch.watcher.subject$;
        } else {
            throw('Error: The provided element is neither an HTMLElement, nor a SVGElement');
        }
    }

    /**
     * Unwatches a former watched element. Also removes all subscribers.
     * 
     * @param $el The element to unwatch. Default is :root.
     * @returns Whether the element was watched before and the watcher has been removed or not
     */
    public unwatch($el: HTMLElement | SVGElement = document.documentElement): boolean {
        if ($el instanceof HTMLElement || $el instanceof SVGElement) {
            const watcherMatch = this._getWatcherMatch($el.style);

            if (watcherMatch !== null) {
                // quit all subscriptions
                watcherMatch.watcher.unsubscriber$.next();
                watcherMatch.watcher.unsubscriber$.complete();

                // remove watcher from list
                this._watchers = this._watchers
                    .slice(0, watcherMatch.i)
                    .concat(this._watchers.slice(watcherMatch.i + 1))
                ; 

                return true;
            }

            return false;
        } else {
            throw('Error: The provided element is neither an HTMLElement, nor a SVGElement');
        }
    }

    /**
     * Returns a monkey patched setProperty()-method with both scopes, the context of this class and the context
     * of the CSSStyleDeclaration.
     * 
     * @param context The context of this class
     * @returns A monkey patched setProperty()-method
     */
    private _setProperty(context: CSSCustomPropertiesWatch): CSSStyleDeclaration['setProperty'] {
        return function(...args: Parameters<CSSStyleDeclaration['setProperty']>) {
            if (this && args[0].slice(0, 2) === '--') {
                const watcherMatch = context._getWatcherMatch(this);

                if (watcherMatch !== null) {
                    context._setPropertyCheck.apply(context, [watcherMatch.watcher, args, true]);

                    return;
                }
            }

            context._originalSetProperty.apply(this, args);
        };
    }

    /**
     * Finally sets the CSS custom property with the original setProperty()-method and additionally checks
     * whether it is necessary to do so and whether it has any effect. (Because the user might provide an
     * invalid data, which causes the browser to ignore it or - with the new registerProperty()-method - provide
     * a fallback value.)
     * 
     * @param watcher The watcher related to the CSSStyleDeclaration
     * @param args The original arguments
     * @param next Whether to call next() on the RxJS Subject after everything has been done
     */
    private _setPropertyCheck(
        watcher: ICSSCustomPropertiesWatcher
        , args: Parameters<CSSStyleDeclaration['setProperty']>
        , next: boolean
    ): void {
        const oldValue = watcher.cssStyleDeclaration.getPropertyValue(args[0]);

        // only do something if the values are not the same.
        if (args[1] !== oldValue) {
            this._originalSetProperty.apply(watcher.cssStyleDeclaration, args);

            const newValue = watcher.cssStyleDeclaration.getPropertyValue(args[0]);

            // sometimes changing a property to an invalid value can lead to the initial value being
            // set, which can be the old value. then nothing should be done.
            if (newValue !== oldValue && next === true) {
                // make sure _setPropertyCheck() is not called twice because of the subscription
                watcher.ignoreNext$.next(true);
                watcher.subject$.next(
                    args.slice(0, 1).concat(
                        newValue
                        , args.slice(2)
                    ) as Parameters<CSSStyleDeclaration['setProperty']>
                );
            }

            // if the new value is not the one which should have been set, then something went wrong, so we
            // throw an exception here.
            if (newValue !== args[1]) {
                throw new Error(`Error: "${
                    args[0]
                }" could not be set to "${
                    args[1]
                }", because its syntax might be invalid, inspite it was set to "${
                    newValue
                }".`);
            }
        }
    }

    /**
     * Finds the related watcher for a given CSSStyleDeclaration.
     * 
     * @param cssStyleDeclaration A given CSSStyleDeclaration to find the related watcher for.
     * @returns The related watcher for a given CSSStyleDeclaration
     */
    private _getWatcherMatch(cssStyleDeclaration: CSSStyleDeclaration): ICSSCustomPropertiesWatcherMatch | null {
        return this._watchers.reduce((
            watcherMatch: ICSSCustomPropertiesWatcherMatch
            , watcher: ICSSCustomPropertiesWatcher
            , i: number
        ) => {
            if (watcher.cssStyleDeclaration === cssStyleDeclaration) { return { i, watcher }; }

            return watcherMatch;
        }, null);
    }
}

// The match for a watcher together with the index in the watchers array.
interface ICSSCustomPropertiesWatcherMatch {
    i: number;
    watcher: ICSSCustomPropertiesWatcher;
}

interface ICSSCustomPropertiesWatcher {
    cssStyleDeclaration: CSSStyleDeclaration;
    ignoreNext$: BehaviorSubject<boolean>;
    subject$: Subject<Parameters<CSSStyleDeclaration['setProperty']>>;
    unsubscriber$: Subject<void>;
}
