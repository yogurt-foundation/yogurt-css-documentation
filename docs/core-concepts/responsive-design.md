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

To prefix the breakpoint name (e.g. `sm`, `md`, `lg`) before the `{class}` or `class name` followed by the `:` symbol.

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

### Customizing Breakpoints

To completely customize breakpoints is in the `_constant.scss` file,

```scss
// @file `_constants.scss`

$screens:
  (xs, 320px), // (primitive)
  (sm, 640px),
  (md, 768px),
  (lg, 1024px),
  (xl, 1280px),
  (\32k, 1920px), // 2k
  (\33k, 2560px), // 3k
  (\34k, 3840px), // 4k
  (\35k, 5120px), // 5k
  (\36k, 5760px), // 6k
  (\37k, 7000px), // 7k
  (\38k, 7680px); // 8k
```

Learn more in the [customizing breakpoints](../customization/breakpoints.md) page.

### Create Custom Responsive

Not all responsive utilities are having all sorts of pseudo-class variants enabled by default, this is to control the default package file size from getting larger. But, you can create your own responsive variants for pseudo-classes.

For example, each utility module file has a variant section that consists of `hover`, `focus`, `active` and so on. You need to add `@include()` function to a specific placeholder following by the `UTILITY_NAME` (e.g. fontSize), last add the arguments `"", "", ""` to look like below to enable the variant you need.

```scss
// @file `_responsive.scss`

// hover
@include textColorBlack(".#{$screen}\\:hover\\:", ":hover", "");

// focus
@include textColorBlack(".#{$screen}\\:focus\\:", ":focus", "");

// active
@include textColorBlack(".#{$screen}\\:active\\:", ":active", "");

// visited
@include textColorBlack(".#{$screen}\\:visited\\:", ":visited", "");

// disabled
@include textColorBlack(".#{$screen}\\:disabled\\:", ":disabled", "");

```

Learn more in the [customizing variants](../customization/variants.md) page.
