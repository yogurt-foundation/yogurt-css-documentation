---
id: order
title: Order
description: Utilities for controls how flex items are ordered.
layout: default
---

> Flexbox

# Order

Utilities for controls how flex items are ordered.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| order-first | order: -9999 |
| order-last | order: 9999 |
| order-none | order: 0 |
| order-1 | order: 1 |
| order-2 | order: 2 |
| order-3 | order: 3 |
| order-4 | order: 4 |
| order-5 | order: 5 |
| order-6 | order: 6 |
| order-7 | order: 7 |
| order-8 | order: 8 |
| order-9 | order: 9 |
| order-10 | order: 10 |
| order-11 | order: 11 |
| order-12 | order: 12 |

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'order',
    //variant: 'responsive',
    property: 'order',
    modifier: (
      '13': '...',
      '14': '...'
      //...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |