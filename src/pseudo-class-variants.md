---
id: pseudo-class-variant
title: Pseudo-Class Variants
description: Using utilities to style and add effects to elements when on hover, group-hover, focus, active, disabled, visited or theme.
layout: default
---

> Core Concepts

## Pseudo-Class Variants

Using utilities to style and add effects to elements when on `hover`, `group-hover`, `focus`, `active`, `disabled`, `visited`, or `theme`.

### Hover

Add the `hover:` prefix to an utility to enable on-hover.

```html
<!-- Example -->
<y class="text-charcoal-100 hover:text-white bg-white hover:bg-charcoal-100">
  ...
</y>
```

### Group-Hover

Add `group` class to the parent element and add the `group-hover:` prefix to an utility on the child element to enable group-hover.

```html
<!-- Example -->
<y class="group bg-charcoal-100 hover:bg-orange-400">
  <y class="group-hover:text-white">
    ...
  </y>
</y>
```

### Focus

Add the `focus:` prefix to an utility to enable on-focus.

```html
<!-- Example -->
<input class="bg-gray-100 focus:bg-charcoal-100 border-transparent focus:border-gray-200"
       placeholder="Focus me!">

```

### Active

Add the `active:` prefix to an utility to enable on-active.

```html
<!-- Example -->
<button class="bg-charcoal-100 active:bg-red-400 text-white">
  ...
</button>
```

### Disabled

Add the `disabled:` prefix to an utility to enable on-disabled.

```html
<!-- Example -->
<button class="disabled:text-gray-600 disabled:bg-gray-400">
  ...
</button>
```

### Visited

Add the `visited:` prefix to an utility to enable on-visited.

```html
<!-- Example -->
<a class="text-gray-500 visited:text-purple-500 visited:underline"
   href="...">
  ...
</a>
```

### Dark Theme <span class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600">v1.1.0</span>

Add the `dark:` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 dark:text-gray-100">
  ...
</y>
```
<y class="m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 dark:text-orange-500 bg-orange-200 dark:bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Default enabled utilities (
  <a href="/background-color/">
    Background Color
  </a>,
  <a href="/border-color/">
    Border Color
  </a>,
  <a href="/gradient/">
    Gradient
  </a>,
  <a href="/filter-invert/">
    Filter Invert
  </a>,
  <a href="/placeholder-color/">
    Placeholder Color
  </a>
  <a href="/box-shadow-color/">
    Shadow Color
  </a>,
  <a href="/text-color/">
    Text Color
  </a>).
</y>

### Create Custom Variants

Same like [responsive](/responsive/), the different is the file location. To create custom variants to a utility, look into directory `src/variants/{ non-responsive or responsive }/`, and then add a new `@include()` directive with defined utility name (e.g. `fontSize`), last the arguments into the variant file (e.g. `_hover.scss`).

```scss
// @file `variants/non-responsive/pseudo/_hover.scss`
// @file `variants/responsive/pseudo/_hover.scss`
@include fontSize($prefix-hover, $pseudo-hover, $class-false);

// @file `variants/non-responsive/pseudo/_focus.scss`
// @file `variants/responsive/pseudo/_focus.scss`
@include fontSize($prefix-focus, $pseudo-focus, $class-false);

// @file `variants/non-responsive/pseudo/_active.scss`
// @file `variants/responsive/pseudo/_active.scss`
@include fontSize($prefix-active, $pseudo-active, $class-false);

// @file `variants/non-responsive/pseudo/_visited.scss`
// @file `variants/responsive/pseudo/_visited.scss`
@include fontSize($prefix-visited, $pseudo-visited, $class-false);

// @file `variants/non-responsive/pseudo/_disabled.scss`
// @file `variants/responsive/pseudo/_disabled.scss`
@include fontSize($prefix-disabled, $pseudo-disabled, $class-false);
```

Some utility has `negative` value and require to add `negative[true|false]` argument into `@include()` directive.
