---
id: object-position
title: Object Position
description: Utilities for sets the alignment of the selected replaced element.
topic: Layouts
relate: box-sizing, clear, container, render, display, float, object-fit, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Object Position

Utilities for sets the alignment of the selected replaced element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| object-top | object-position: top |
| object-bottom | object-position: bottom |
| object-center | object-position: center |
| object-left | object-position: left |
| object-left-bottom | object-position: left bottom |
| object-left-top | object-position: left top |
| object-right | object-position: right |
| object-right-bottom | object-position: right bottom |
| object-right-top | object-position: right top |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for objectposition in variants.objectposition %}{% for item in objectposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).