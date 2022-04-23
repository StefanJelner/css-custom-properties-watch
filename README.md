# CSS Custom Properties Watch

This library is monkey patching [`CSSStyleDeclaration.setProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) so that changes could be watched for a given [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), by providing an [RxJS `Subject`](https://rxjs.dev/guide/subject).

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library is not taking care of changes which are made by toggling classnames on the watched elements or by changes which are made by media queries. Technically speaking this would be possible, by using [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver) and other techniques, but it would make holding a complete data set of custom properties necessary together with a diffing algorithm. This is way out of scope of this library. If you have any idea how to solve these limitations in a convenient way, which performs well, feel free to make suggestions.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** This library could also just offer a new event (like `onCSSCustomPropertyChange` or similar) on the [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration), [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). This is not done on purpose, because it would add non-standard and undocumented behavior (which could possibly collide with other things in the future.) The idea was, to add a mechanism which is totally invisible.

> <img src="assets/warning.png" alt="Important" width="50" height="60" align="left" /> **IMPORTANT!** Even it is technically possible, try to not use the class several times and therefore monkey patch the same elements several times. It could cause performance issues and does not make sense. The library can actually be wrapped in a singleton service.

# Usage

## In Vanilla JS

Copy the file `/dist/css-custom-properties-watch.iife.min.js` and add the following to your HTML:

```html
<script src="css-custom-properties-watch.iife.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var watcher = new CSSCustomPropertiesWatch();

        watcher.watch$(document.documentElement).subscribe(console.log);

        document.documentElement.style.setProperty('--foo', '12px');

        watcher.unwatch(document.documentElement);

        document.documentElement.style.setProperty('--foo', '13px');
    });
</script>
```

## In TypeScript (and ES6)
