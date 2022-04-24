# :eyes: [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) Watch

This library is :see_no_evil: monkey patching [`CSSStyleDeclaration.setProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) so that changes could be watched for a given [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), by providing an [RxJS `Subject`](https://rxjs.dev/guide/subject).

[![css-custom-properties-watch on npmjs.com](https://img.shields.io/npm/v/css-custom-properties-watch?logo=npm&logoColor=white)](https://www.npmjs.com/package/css-custom-properties-watch)
[![css-custom-properties-watch on GitHub](https://img.shields.io/github/package-json/v/StefanJelner/css-custom-properties-watch?logo=github&logoColor=white)](https://github.com/StefanJelner/css-custom-properties-watch)
[![css-custom-properties-watch on jsDelivr](https://data.jsdelivr.com/v1/package/npm/css-custom-properties-watch/badge?style=rounded)](https://www.jsdelivr.com/package/npm/css-custom-properties-watch)

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library is not taking care of changes which are made by toggling classnames on the watched elements or by changes which are made by media queries. It is also not taking care of inheritance. Technically speaking this would be possible, by using [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver) and other techniques, but it would make holding a complete data set of custom properties necessary together with a diffing algorithm. This is way out of scope of this library. If you have any idea how to solve these limitations in a convenient way, which performs well, feel free to make suggestions.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library could also just offer a new event (like `onCSSCustomPropertyChange` or similar) on the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration), [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). This is not done on purpose, because it would add non-standard and undocumented behavior (which could possibly collide with other things in the future.) The idea was, to add a mechanism which is totally invisible.

---

## Table of contents

- [Usage in Vanilla JS](#vanilla-js)
- [Usage in TypeScript (and ES6)](#typescript)
- [Methods](#methods)
- [RxJS Subject](#subject)
- [License](#license)

---

## <a name="vanilla-js"></a> Usage in Vanilla JS

Copy the file `/dist/css-custom-properties-watch.iife.min.js` and add the following to your HTML:

```html
<script src="css-custom-properties-watch.iife.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // every new instance is actually the same instance, because it is a singleton.
        var watcher = new CSSCustomPropertiesWatch();

        var root$ = watcher.watch$(document.documentElement);

        // document.documentElement aks :root is the default, so alternatively it can be called like this:
        var root$ = watcher.watch$();

        // alternatively
        var root$ = watcher.watch$(document.getElementById('foo'));
        
        root$.subscribe(console.log);

        document.documentElement.style.setProperty('--foo', '12px'); // logs ['--foo', '12px']

        root$.next(['--foo', '13px']); // logs ['--foo', '13px']

        watcher.unwatch(document.documentElement);

        // document.documentElement aka :root is the default, so alternatively it can be called like this:
        watcher.unwatch();

        // alternatively
        watcher.unwatch(document.getElementById('foo'));

        document.documentElement.style.setProperty('--foo', '14px'); // logs nothing

        root$.next(['--foo', '15px']); // should throw an error
    });
</script>
```

Alternatively you can use a CDN like [UNPKG](https://unpkg.com) or [jsDelivr](https://www.jsdelivr.com/):

```html
<script src="https://unpkg.com/css-custom-properties-watch/dist/css-custom-properties-watch.iife.min.js"></script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/css-custom-properties-watch/dist/css-custom-properties-watch.iife.min.js"></script>
```

---

## <a name="typescript"></a> Usage in TypeScript (and ES6)

Actually this library is more meant for being used in TypeScript- or ES6-projects. One advantage is, that if the project uses [RxJS](https://github.com/reactivex/rxjs) anyway, the usage in this library does not add up to the bundle size.

```ts
import CSSCustomPropertiesWatch from 'node_modules/css-custom-properties-watch';

document.addEventListener('DOMContentLoaded', () => {
    // every new instance is actually the same instance, because it is a singleton.
    const watcher = new CSSCustomPropertiesWatch();

    const root$ = watcher.watch$(document.documentElement);

    // document.documentElement aks :root is the default, so alternatively it can be called like this:
    const root$ = watcher.watch$();

    // alternatively
    const root$ = watcher.watch$(document.getElementById('foo'));
    
    root$.subscribe(console.log);

    document.documentElement.style.setProperty('--foo', '12px'); // logs ['--foo', '12px']

    root$.next(['--foo', '13px']); // logs ['--foo', '13px']

    watcher.unwatch(document.documentElement);

    // document.documentElement aka :root is the default, so alternatively it can be called like this:
    watcher.unwatch();

    // alternatively
    watcher.unwatch(document.getElementById('foo'));

    document.documentElement.style.setProperty('--foo', '14px'); // logs nothing

    root$.next(['--foo', '15px']); // should throw an error
});
```

It can be used, to selectively react on changes:

```ts
import CSSCustomPropertiesWatch from 'node_modules/css-custom-properties-watch';

document.addEventListener('DOMContentLoaded', () => {
    const watcher = new CSSCustomPropertiesWatch();

    const root$ = watcher.watch$();
    
    root$.subscribe(([property]: [string]) => {
        if (property === '--foo') {
            // do something useful here.
        }
    });
});
```

Or very short:

```ts
import CSSCustomPropertiesWatch from 'node_modules/css-custom-properties-watch';

document.addEventListener('DOMContentLoaded', () => {
    new CSSCustomPropertiesWatch().watch$().subscribe(([property]: [string]) => {
        if (property === '--foo') {
            // do something useful here.
        }
    });
});
```

> <img src="assets/info.png" alt="Advice" width="50" height="60" align="left" /> **ADVICE!** It is recommended, that if this library is used in the context of reactive libraries, like [Angular](https://github.com/angular/angular), [React](https://github.com/facebook/react) or [Vue](https://github.com/vuejs), in the lifecycle when components become destroyed, the relating elements should be unwatched to prevent memory leaks. (Even the browsers have a good garbage collection.)

---

## <a name="methods"></a> Methods

### `new CSSCustomPropertiesWatch()`

A new instance can be created without any argument. It is a singleton class, therefore every new instance is just the same instance and the monkey patch is not accidently done several times.

### `watch$`

```ts
public watch$(
    $el: HTMLElement | SVGElement = document.documentElement
): Subject<Parameters<CSSStyleDeclaration['setProperty']>>;
```

Adds a watcher to the given element `$el` or `document.documentElement` aka `:root` by default and returns an [RxJS `Subject`](https://rxjs.dev/guide/subject), which can be used like any other [RxJS `Observable`](https://rxjs.dev/guide/observable). Throws an error, if the element is neither an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) nor a [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement).

### `unwatch`

```ts
public unwatch($el: HTMLElement | SVGElement = document.documentElement): boolean;
```

Removes an already existing watcher from a given element `$el` or `document.documentElement` aka `:root` by default. Additionally it unsubscribes all subscribers automatically. Returns `true` if the element existed and a watcher had been previously added. Returns `false` if the element had no previously added watcher. Throws an error, if the element is neither an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) nor a [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement).

---

## <a name="subject"></a> [RxJS `Subject`](https://rxjs.dev/guide/subject)

The `watch$`-method returns an [RxJS `Subject`](https://rxjs.dev/guide/subject), which can then be used with the known methods, like [`next()`](https://rxjs.dev/guide/observable#executing-observables), [`subscribe()`](https://rxjs.dev/guide/observable#subscribing-to-observables) and the mighty operators through [`pipe()`](https://rxjs.dev/guide/operators)

### `next`

```ts
next: ([property, value, priority?]: [string, string, 'important' | '' | undefined]) => void;
```

Sets the new value of a [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) and informs all subscribers about the new value.

### `subscribe`

```ts
subscribe: (
    next: ([property, value, priority?]: [string, string, 'important' | '' | undefined]) => void
) => Subscription;
```

Returns a subscription, which can be used to become informed, whenever a [CSS Custom Property](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) becomes changed.

---

## <a name="license"></a> License

This software is brought to you with :heart: **love** :heart: from Dortmund and offered and distributed under the ISC license. See `LICENSE.txt` and [Wikipedia](https://en.wikipedia.org/wiki/ISC_license) for more information.
