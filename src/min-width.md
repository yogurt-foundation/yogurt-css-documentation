---
id: min-width
title: Min Width
description: Utilities for sets the minimum width of an element.
layout: default
---

> Sizing

## Min Width

Utilities for sets the minimum width of an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| min-w-0 | min-width: 0 |
| min-w-full | min-width: 100% |

### Customizing <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'min-w',
  //$variant: 'responsive',
  $property: 'min-width',
  $modifier: (
    '...': '...',
    '...': '...'
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