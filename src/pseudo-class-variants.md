---
id: pseudo-class-variant
title: Pseudo-Class Variants
description: Using utilities to style and add effects to elements when on hover, group-hover, focus, active, disabled or visited.
layout: default
---

> Core Concepts

## Pseudo-Class Variants

Using utilities to style and add effects to elements when on hover, group-hover, focus, active, disabled or visited.

### Hover

Add the `hover:` prefix to an utility to enable on-hover.

```html
<!-- Example -->
<y class="text-charcoal-100 hover:text-white bg-white hover:bg-charcoal-100">
  Hover me!
</y>
```
### Group-Hover

Add `group` class to the parent element and add the `group-hover:` prefix to an utility on the child element to enable group-hover.

```html
<!-- Example -->
<y class="group bg-charcoal-100 hover:bg-orange-400">
  <y class="group-hover:text-white">
    This is a text!
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
  Click me!
</button>
```

### Create Custom Variants

Same like [responsive](/responsive), the different is the file location. To create custom variants to a utility, look into directory `/utilities/variants/`, and then add a new `@include()` function with defined utility name (e.g. `fontSize`), last the arguments into the variant file (e.g. `_hover.scss`).

```scss
// @file `utilities/variants/_hover.scss`

@include fontSize($prefix-hover, $pseudo-hover, $class-false);

// @file `utilities/variants/_focus.scss`

@include fontSize($prefix-focus, $pseudo-focus, $class-false);

// @file `utilities/variants/_active.scss`

@include fontSize($prefix-active, $pseudo-active, $class-false);

// @file `utilities/variants/_visited.scss`

@include fontSize($prefix-visited, $pseudo-visited, $class-false);

// @file `utilities/variants/_disabled.scss`

@include fontSize($prefix-disabled, $pseudo-disabled, $class-false);
```

**Note:** Some utility has `negative` value and require to add `negative[true|false]` argument into `@include()` function.
