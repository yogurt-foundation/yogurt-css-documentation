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

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
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

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for order in variants.order %}{% for item in order.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

