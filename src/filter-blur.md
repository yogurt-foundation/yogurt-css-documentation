---
id: filter-blur
title: Filter Blur
description: Utilities for sets filter blur effect to an element.
layout: default
---

> Filters

## Blur

Utilities for sets filter blur effect to an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| blur-0 | filter: blur(0px) |
| blur-1 | filter: blur(2px) |
| blur-2 | filter: blur(4px) |
| blur-3 | filter: blur(6px) |
| blur-4 | filter: blur(8px) |
| blur-5 | filter: blur(10px) |
| blur-6 | filter: blur(12px) |
| blur-7 | filter: blur(14px) |
| blur-8 | filter: blur(16px) |
| blur-9 | filter: blur(18px) |
| blur-10 | filter: blur(20px) |

### Customizing <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'blur',
  //$variant: 'responsive',
  $property: 'filter',
  $modifier: (
    '11': '...px',
    '12': '...px'
    ...
  )
)
```

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |