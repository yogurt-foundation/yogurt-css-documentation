---
id: float
title: Float
description: Utilities for sets an element's placement to a side of its container and allows content to wrap around it.
layout: default
---

> Layouts

# Float

Utilities for sets an element's placement to a side of its container and allows content to wrap around it.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| float-right | float: right |
| float-left | float: left |
| float-none | float: none |
| clearfix | &::after { <br> content: ""; <br> display: table; <br> clear: both; } |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for float in variants.float %}{% for item in float.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).