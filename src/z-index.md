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

### Customizing <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

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

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">variant</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">enabled</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">responsive</span> |
|:--|:--|:--|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |