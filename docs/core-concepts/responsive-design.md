> Core Concepts

## Responsive Design

Craft an adaptive user interface with responsive utility variants.

Every utility class in Yogurt can be configured instantly with different breakpoints without leaving your HTML and without even using the `@media` in your CSS.

### Common Breakpoints

These are the default breakpoints covering for almost all common device resolutions.

```css
/* Extra Small (xs) (primitive) */
@media (min-width: 320px) { ... }

/* Small (sm) */
@media (min-width: 640px) { ... }

/* Medium (md) */
@media (min-width: 768px) { ... }

/* Large (lg) */
@media (min-width: 1024px) { ... }

/* Extra Large (xl) */
@media (min-width: 1280px) { ... }
```

### Modern Breakpoints

These are the breakpoints for new modern ultra-widescreen size and not enabled by default. It will come in handy when designing a user interface specifically for ultra-wide screens.

```css

/* 3k */
@media (min-width: 2560px) { ... }

/* 4k */
@media (min-width: 3840px) { ... }

/* 5k */
@media (min-width: 5120px) { ... }

/* 6k */
@media (min-width: 5760px) { ... }

/* 7k */
@media (min-width: 7000px) { ... }

/* 8k */
@media (min-width: 7680px) { ... }
```

To add breakpoint to an utility is by follow the **tag design** introduced early in the [Introduction](../introduction.md) page.

```html
{prefix}:{class}-{modifier}
```

To prefix the breakpoint name (e.g. `sm`, `md`, `lg`) before the `{class}` followed by the `:` symbol.

```html
<!-- Examples -->

<!-- font size is xl on small screen, md on large screen-->
<y class="sm:text-xl lg:text-md">
  ...
</y>

<!-- background color is charcoal on small screen, red on large screen -->
<y class="sm:bg-charcoal-100 lg:bg-red-400">
  ...
</y>
```
