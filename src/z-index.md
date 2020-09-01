---
id: z-index
title: Z-Index
description: Utilities for sets the z order (stack order) of a positioned element.
layout: default
---

> Layouts

# Z-Index

Utilities for sets the z order (stack order) of a positioned element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
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

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'z-60',
    //variant: 'responsive',
    property: 'z-index',
    modifier: (
      '60': '...',
      '70': '...'
      ...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |