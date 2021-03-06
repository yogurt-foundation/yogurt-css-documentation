---
id: position
title: Position
description: Utilities for sets an element's position.
topic: Layouts
relate: box-sizing, clear, container, render, display, float, object-fit, object-position, overflow, top/bottom/left/right, visibility, z-index
variant: responsive, hover
layout: default
---

> Layouts

# Position

Utilities for sets an element's position.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| static | position: static |
| fixed | position: fixed |
| absolute | position: absolute |
| relative | position: relative |
| sticky | position: sticky |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for position in variants.position %}{% for item in position.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).