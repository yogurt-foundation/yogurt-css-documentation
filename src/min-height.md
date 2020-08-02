---
id: min-height
title: Min Height
description: Utilities for sets the miminum height of an element.
layout: default
---

> Sizing

## Min Height

Utilities for sets the miminum height of an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| min-h-0 | min-height: 0 |
| min-h-full | min-height: 100% |
| min-h-screen | min-height: 100vh |

### Customizing <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'min-h',
  //$variant: 'responsive',
  $property: 'min-height',
  $modifier: (
    '...': '...',
    '...': '...'
    ...
  )
)
```

### Variant <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |