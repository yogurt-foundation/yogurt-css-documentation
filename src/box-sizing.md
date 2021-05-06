---
id: box-sizing
title: Box Sizing
description: Utilities for sets how the total width and height of an element is calculated.
category: Layouts
tags: clear, container, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility, z-index
layout: default
---

> Layouts

# Box Sizing

Utilities for sets how the total width and height of an element is calculated.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| box-border | box-sizing: border-box |
| box-content | box-sizing: content-box |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for boxsizing in variants.boxsizing %}{% for item in boxsizing.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).