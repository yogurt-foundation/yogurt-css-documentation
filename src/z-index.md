---
id: z-index
title: Z-Index
description: Utilities for sets the z order (stack order) of a positioned element.
layout: default
---

> Layouts

## Z-Index

Utilities for sets the z order (stack order) of a positioned element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| z-0 | z-index: 0 |
| z-10 | z-index: 10 |
| z-20 | z-index: 20 |
| z-30 | z-index: 30 |
| z-40 | z-index: 40 |
| z-50 | z-index: 50 |
| z-auto | z-index: auto |

### Customizing

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'z-60',
  //$variant: 'responsive',
  $property: 'z-index',
  $modifier: (
    '60': '...',
    '70': '...'
    ...
  )
)
```

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |