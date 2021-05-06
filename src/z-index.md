---
id: z-index
title: Z-Index
description: Utilities for sets the z order (stack order) of a positioned element.
category: Layouts
tags: box-sizing, clear, container, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility
variant: hover, focus-visible, focus-within
layout: default
---

> Layouts

# Z-Index

Utilities for sets the z order (stack order) of a positioned element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| z-0 | z-index: 0 |
| z-10 | z-index: 10 |
| z-20 | z-index: 20 |
| z-30 | z-index: 30 |
| z-40 | z-index: 40 |
| z-50 | z-index: 50 |
| z-auto | z-index: auto |

---

## Usage

<y class="my-2 mx-auto max-w-sm">
  <y class="z-10 h-32 bg-gray-300 px-2 py-1">
    z-10
  </y>
  <y class="-mt-24 ml-8 z-20 h-32 bg-gray-400 px-2 py-1">
    z-20
  </y>
  <y class="-mt-24 ml-16 z-30 h-32 text-white bg-gray-500 px-2 py-1">
    z-30
  </y>
  <y class="-mt-24 ml-24 z-40 h-32 text-white bg-gray-600 px-2 py-1">
    z-40
  </y>
  <y class="-mt-24 ml-32 z-50 h-32 text-white bg-gray-700 px-2 py-1">
    z-50
  </y>
</y>

```html
<!-- Example -->
<y class="z-10">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'z',
  $property: z-index,
  $modifier: (
    10: 10,
    20: 20
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'z',
  $property: z-index,
  $modifier: (
    10: 10,
    20: 20
    //...
  ),
  $variant: (
    'responsive',
    'hover',
    'focus-within', 'focus-visible'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for zindex in variants.zindex %}{% for item in zindex.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).