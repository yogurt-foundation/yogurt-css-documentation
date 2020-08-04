---
id: responsive
title: Core Concepts
description: Craft an adaptive user interface with responsive utility variants.
layout: default
---

> Core Concepts

## Responsive

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

To add breakpoint to an utility is by follow the **utility class design** introduced early in the [Introduction](/) page.

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

To completely customize breakpoints is in the `_config.scss` file,

```scss
// @file `_config.scss`
$screens:
  (xs, 320px), // (primitive)
  (sm, 640px),
  (md, 768px),
  (lg, 1024px),
  (xl, 1280px),
  (\32k, 1920px), // 2k
  (\33k, 2560px), // 3k (optional)
  (\34k, 3840px), // 4k
  (\35k, 5120px), // 5k (optional)
  (\36k, 5760px), // 6k (optional)
  (\37k, 7000px), // 7k (optional)
  (\38k, 7680px); // 8k (optional)
```

### Create Custom Responsive

#### Responsive Without Variants

To create responsive to a utility is to adding the `@include()` directive following by the utility name (e.g. `padding`) and then the arguments into `responsive/default/_default.scss` module file.

This is a `@include()` directive look like in Yogurt:

```scss
@include utilityName(prefix[variants|false], pseudo[variants|false], class[true|false], negative[true|false]);
```

For example, to enable responsive for `padding` utility without adding the pseudo-class variants:

```scss
// @file: `src/_plugins.scss`
// @file `responsive/default/_default.scss`
@include padding($prefix-responsive, $pseudo-false, $class-false);
```

**Note:** Some utility has `negative` value and require to add `negative[true|false]` argument into `@include()` directive.

#### Responsive With Variants

Not all responsive utilities are having all sorts of pseudo-class variants enabled by default, this is to control the default package file size from getting larger. But, you can create your own responsive variants for pseudo-classes.

To create responsive with variants, there are separate files for each pseudo-classes.

```scss
// @file `responsive/variants/_hover.scss`
@include opacity($prefix-responsive-hover, $pseudo-hover, $class-false);

// @file `responsive/variants/_focus.scss`
@include opacity($prefix-responsive-focus, $pseudo-focus, $class-false);

// @file `responsive/variants/_active.scss`
@include opacity($prefix-responsive-active, $pseudo-active, $class-false);

// @file `responsive/variants/_visited.scss`
@include opacity($prefix-responsive-visited, $pseudo-visited, $class-false);

// @file `responsive/variants/_disabled.scss`
@include opacity($prefix-responsive-disabled, $pseudo-disabled, $class-false);
```
