---
id: object-fit
title: Object Fit
description: Utilities for sets how the content of a replaced element (img or video tag) should be resized.
topic: Layouts
relate: box-sizing, clear, container, render, display, float, object-position, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Object Fit

Utilities for sets how the content of a replaced element (img or video tag) should be resized.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| object-contain | object-fit: contain |
| object-cover | object-fit: cover |
| object-fill | object-fit: fill |
| object-none | object-fit: none |
| object-scale-down | object-fit: scale-down |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for objectfit in variants.objectfit %}{% for item in objectfit.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).