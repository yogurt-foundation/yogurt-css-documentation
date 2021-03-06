---
id: clear
title: Clear
description: Utilities for set whether an element is moved below preceding floated elements.
topic: Layouts
relate: box-sizing, container, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Clear

Utilities for set whether an element is moved below preceding floated elements.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| clear-left | clear: left |
| clear-right | clear: right |
| clear-both | clear: both |
| clear-none | clear: none |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clear in variants.clear %}{% for item in clear.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
