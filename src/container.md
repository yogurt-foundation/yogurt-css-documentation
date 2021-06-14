---
id: container
title: Container
description: Utilities for set max-width to match min-width of the current breakpoint.
topic: Layouts
relate: box-sizing, clear, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, visibility, z-index
variant: responsive
layout: default
---

> Layouts

# Container

Utilities for set max-width to match min-width of the current breakpoint.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">breakpoint</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|:--|
| container | none | width: 100% |
|   | xs (320px) | max-width: 320px |
|   | sm (640px) | max-width: 640px |
|   | md (768px) | max-width: 768px |
|   | lg (1024px) | max-width: 1024px |
|   | xl (1280px) | max-width: 1280px |
|   | 2k (1920px) | max-width: 1920px |
|   | 4k (3840px) | max-width: 3840px |
|   | 5k (5120px) | max-width: 5120px |
|   | 6k (5760px) | max-width: 5760px |
|   | 7k (7000px) | max-width: 7000px |
|   | 8k (7680px) | max-width: 7680px |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for container in variants.container %}{% for item in container.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).