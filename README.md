# CSS Custom Properties Watch

This library is monkey patching [`CSSStyleDeclaration.setProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) so that changes could be watched for a given [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), by providing an [RxJS `Subject`](https://rxjs.dev/guide/subject).

[![css-custom-properties-watch on npmjs.com](https://img.shields.io/npm/v/css-custom-properties-watch?logo=npm&logoColor=white)](https://www.npmjs.com/package/css-custom-properties-watch)
[![css-custom-properties-watch on GitHub](https://img.shields.io/github/package-json/v/StefanJelner/css-custom-properties-watch?logo=github&logoColor=white)](https://github.com/StefanJelner/css-custom-properties-watch)
[![css-custom-properties-watch on jsDelivr](https://data.jsdelivr.com/v1/package/npm/css-custom-properties-watch/badge?style=rounded)](https://www.jsdelivr.com/package/npm/css-custom-properties-watch)

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library is not taking care of changes which are made by toggling classnames on the watched elements or by changes which are made by media queries. It is also not taking care of inheritance. Technically speaking this would be possible, by using [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver) and other techniques, but it would make holding a complete data set of custom properties necessary together with a diffing algorithm. This is way out of scope of this library. If you have any idea how to solve these limitations in a convenient way, which performs well, feel free to make suggestions.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library could also just offer a new event (like `onCSSCustomPropertyChange` or similar) on the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration), [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). This is not done on purpose, because it would add non-standard and undocumented behavior (which could possibly collide with other things in the future.) The idea was, to add a mechanism which is totally invisible.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** Even it is technically possible, try to not use the `CSSCustomPropertiesWatch` class several times and therefore monkey patch the same elements several times. It could cause performance issues and does not make sense. The library can actually be wrapped in a singleton service. It is more meant as a starting point for more complex algorithms. (Like f.ex. reacting on the change of specific CSS custom properties.)

---

## Table of contents

- [Usage in Vanilla JS](#vanilla-js)
- [Usage in TypeScript (and ES6)](#typescript)
- [Methods](#methods)
- [License](#license)

---

## <a name="vanilla-js"></a> Usage in Vanilla JS

Copy the file `/dist/css-custom-properties-watch.iife.min.js` and add the following to your HTML:

```html
<script src="css-custom-properties-watch.iife.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var watcher = new CSSCustomPropertiesWatch();

        var root$ = watcher.watch$(document.documentElement);

        // document.documentElement is the default, so alternatively it can be called like this:
        var root$ = watcher.watch$();
        
        root$.subscribe(console.log);

        document.documentElement.style.setProperty('--foo', '12px'); // logs ['--foo', '12px']

        root$.next(['--foo', '13px']); // logs ['--foo', '13px']

        watcher.unwatch(document.documentElement);

        // document.documentElement is the default, so alternatively it can be called like this:
        watcher.unwatch();

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

---

## <a name="methods"></a> Methods

### `watch$`

```ts
public watch$(
    $el: HTMLElement | SVGElement = document.documentElement
): Subject<Parameters<CSSStyleDeclaration['setProperty']>>;
```

### `unwatch`

```ts
public unwatch($el: HTMLElement | SVGElement = document.documentElement): boolean;
```

---

## <a name="license"></a> License

This software is brought to you with :heart: **love** :heart: from Dortmund and offered and distributed under the ISC license. See `LICENSE.txt` and [Wikipedia](https://en.wikipedia.org/wiki/ISC_license) for more information.
