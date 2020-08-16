---
id: stroke-width
title: Stroke Width
description: Utilities for sets the outline width of an SVG.
layout: default
---

> SVG

# Stroke Width

Utilities for sets the outline width of an SVG.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| stroke-0 | stroke-width: 0 |
| stroke-1 | stroke-width: 1 |
| stroke-2 | stroke-width: 2 |

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'stroke',
  //$variant: 'responsive',
  $property: 'stroke-width',
  $modifier: (
    '3': '3',
    '4': '4'
    ...
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |