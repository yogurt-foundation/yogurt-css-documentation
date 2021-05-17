---
id: resize
title: Resize
description: Utilities for sets whether an element is resizable, along with direction.
topic: Interactivity
variant: responsive
layout: default
---

> Interactivity

# Resize

Utilities for sets whether an element is resizable, along with direction.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| resize | resize: both |
| resize-none | resize: none |
| resize-x | resize: horizontal |
| resize-y | resize: vertical |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for resize in variants.resize %}{% for item in resize.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

