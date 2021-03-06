---
id: overflow
title: Overflow
description: Utilities for sets how to handle content that's too big for it's container.
topic: Layouts
relate: box-sizing, clear, container, render, display, float, object-fit, object-position, position, top/bottom/left/right, visibility, z-index
variant: responsive, hover
layout: default
---

> Layouts

# Overflow

Utilities for sets how to handle content that's too big for it's container.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| overflow-auto | overflow: auto |
| overflow-hidden | overflow: hidden |
| overflow-visible | overflow: visible |
| overflow-scroll | overflow: scroll |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| overflow-x-auto | overflow-x: auto |
| overflow-y-auto | overflow-y: auto |
| overflow-x-hidden | overflow-x: hidden |
| overflow-y-hidden | overflow-y: hidden |
| overflow-x-visible | overflow-x: visible |
| overflow-y-visible | overflow-y: visible |
| overflow-x-scroll | overflow-x: scroll |
| overflow-y-scroll | overflow-y: scroll |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scrolling-touch | -webkit-overflow-scrolling: touch |
| scrolling-auto | -webkit-overflow-scrolling: auto |

## Usage

```html
<y class="overflow-hidden">
  ...
</y>
```

Use `(expand)` variant to apply overflow to all child elements.

```html
<!-- Example -->
<!-- Parent -->
<y class="(expand)overflow-hidden">
  <!-- Child -->
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for overflow in variants.overflow %}{% for item in overflow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).