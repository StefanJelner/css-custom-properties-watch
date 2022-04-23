import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default class CSSCustomPropertiesWatch {
    private _originalSetProperty: CSSStyleDeclaration['setProperty'] = CSSStyleDeclaration.prototype.setProperty;
    private _watchers: Array<ICSSCustomPropertiesWatcher> = [];

    constructor() {
        CSSStyleDeclaration.prototype.setProperty = this._setProperty(this);
    }

    public watch$($el: HTMLElement | SVGElement): Subject<Parameters<CSSStyleDeclaration['setProperty']>> {
        const watcherMatch = this._getWatcherMatch($el.style);

        if (watcherMatch === null) {
            const unsubscriber = new Subject<void>();
            const subject = new Subject<Parameters<CSSStyleDeclaration['setProperty']>>().pipe(
                takeUntil(unsubscriber)
            ) as Subject<Parameters<CSSStyleDeclaration['setProperty']>>; 

            this._watchers = this._watchers.concat({
                cssStyleDeclaration: $el.style
                , subject
                , unsubscriber
            });

            return subject;
        }

        return watcherMatch.watcher.subject;
    }

    public unwatch($el: HTMLElement | SVGElement): boolean {
        const watcherMatch = this._getWatcherMatch($el.style);

        if (watcherMatch !== null) {
            // quit all subscriptions
            watcherMatch.watcher.unsubscriber.next();
            watcherMatch.watcher.unsubscriber.complete();

            // remove watcher from list
            this._watchers = this._watchers.slice(0, watcherMatch.i).concat(this._watchers.slice(watcherMatch.i + 1)); 

            return true;
        }

        return false;
    }

    private _setProperty(context: CSSCustomPropertiesWatch): CSSStyleDeclaration['setProperty'] {
        return function(...args: Parameters<CSSStyleDeclaration['setProperty']>) {
            if (this && args[0].slice(0, 2) === '--') {
                const watcher = context._getWatcherMatch(this);

                if (watcher !== null) {
                    const oldValue = watcher.watcher.cssStyleDeclaration.getPropertyValue(args[0]);

                    if (args[1] !== oldValue) {
                        context._originalSetProperty.apply(this, args);

                        const newValue = watcher.watcher.cssStyleDeclaration.getPropertyValue(args[0]);

                        // sometimes changing a property to an invalid value can lead to the initial value being
                        // set, which can be the old value. then nothing should be done.
                        if (newValue !== oldValue) {
                            watcher.watcher.subject.next(
                                args.slice(0, 1).concat(
                                    newValue
                                    , args.slice(2)
                                ) as Parameters<CSSStyleDeclaration['setProperty']>
                            );
                        }
                    }

                    return;
                }
            }

            context._originalSetProperty.apply(this, args);
        };
    }

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

interface ICSSCustomPropertiesWatcherMatch {
    i: number;
    watcher: ICSSCustomPropertiesWatcher;
}

interface ICSSCustomPropertiesWatcher {
    cssStyleDeclaration: CSSStyleDeclaration;
    subject: Subject<Parameters<CSSStyleDeclaration['setProperty']>>;
    unsubscriber: Subject<void>;
}
