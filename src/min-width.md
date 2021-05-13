---
id: min-width
title: Min Width
description: Utilities for sets the minimum width of an element.
topic: Sizing
relate: width, max-width, height, min-height, max-height
variant: responsive
layout: default
---

> Sizing

# Min Width

Utilities for sets the minimum width of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| min-w-0 | min-width: 0 |
| min-w-full | min-width: 100% |

---

## Usage

```html
<!-- Example -->
<y class="min-w-full">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'min-w',
  $property: min-width,
  $modifier: (
    sm: 30%,
    md: 50%
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'min-w',
  $property: min-width,
  $modifier: (
    sm: 30%,
    md: 50%
    //...
  ),
  $variant: (
    'responsive'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minwidth in variants.minwidth %}{% for item in minwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

