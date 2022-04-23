# CSS Custom Properties Watch

This library is monkey patching [`CSSStyleDeclaration.setProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) so that changes could be watched for a given [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), by providing an [RxJS `Subject`](https://rxjs.dev/guide/subject).

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library is not taking care of changes which are made by toggling classnames on the watched elements or by changes which are made by media queries. It is also not taking care of inheritance. Technically speaking this would be possible, by using [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver) and other techniques, but it would make holding a complete data set of custom properties necessary together with a diffing algorithm. This is way out of scope of this library. If you have any idea how to solve these limitations in a convenient way, which performs well, feel free to make suggestions.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library could also just offer a new event (like `onCSSCustomPropertyChange` or similar) on the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration), [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). This is not done on purpose, because it would add non-standard and undocumented behavior (which could possibly collide with other things in the future.) The idea was, to add a mechanism which is totally invisible.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** Even it is technically possible, try to not use the `CSSCustomPropertiesWatch` class several times and therefore monkey patch the same elements several times. It could cause performance issues and does not make sense. The library can actually be wrapped in a singleton service. It is more meant as a starting point for more complex algorithms. (Like f.ex. reacting on the change of specific CSS custom properties.)

# Usage

## In Vanilla JS

Copy the file `/dist/css-custom-properties-watch.iife.min.js` and add the following to your HTML:

```html
<script src="css-custom-properties-watch.iife.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var watcher = new CSSCustomPropertiesWatch();

        var root$ = watcher.watch$(document.documentElement);
        
        root$.subscribe(console.log);

        document.documentElement.style.setProperty('--foo', '12px'); // logs ['--foo', '12px']

        root$.next(['--foo', '13px']); // logs ['--foo', '13px']

        watcher.unwatch(document.documentElement);

        document.documentElement.style.setProperty('--foo', '14px'); // logs nothing

        root$.next(['--foo', '15px']); // should throw an error
    });
</script>
```

## In TypeScript (and ES6)

Actually this library is more meant for being used in TypeScript- or ES6-projects. One advantage is, that if the project uses [RxJS](https://github.com/reactivex/rxjs) anyway, the usage in this library does not add up to the bundle size.

## License

This software is brought to you with :heart: **love** :heart: from Dortmund and offered and distributed under the ISC license. See `LICENSE.txt` and [Wikipedia](https://en.wikipedia.org/wiki/ISC_license) for more information.
