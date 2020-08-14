---
id: filter-contrast
title: Filter Contrast
description: Utilities for sets contrast filter to an element.
layout: default
---

> Filters

## Contrast <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets contrast filter to an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| filter | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

### Value

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| contrast-0 | --contrast: 0 |
| contrast-1 | --contrast: 1 |
| contrast-2 | --contrast: 1.10 |
| contrast-3 | --contrast: 1.20 |
| contrast-4 | --contrast: 1.30 |
| contrast-5 | --contrast: 1.40 |
| contrast-6 | --contrast: 1.50 |
| contrast-7 | --contrast: 1.60 |
| contrast-8 | --contrast: 1.70 |
| contrast-9 | --contrast: 1.80 |
| contrast-10 | --contrast: 1.90 |

### Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'constrast',
  //$variant: 'responsive',
  $property: '--contrast',
  $modifier: (
    '11': '2.0',
    '12': '2.5'
    //...
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