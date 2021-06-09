---
id: order
title: Order
description: Utilities for controls how flex items are ordered.
topic: Flexbox
variant: responsive
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

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
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

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'order',
  $property: order,
  $modifier: (
    1: 1,
    2: 2
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'order',
  $property: order,
  $modifier: (
    1: 1,
    2: 2
    //...
  ),
  $variant: (
    'responsive'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for order in variants.order %}{% for item in order.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

