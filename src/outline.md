---
id: outline
title: Outline
description: Utilities for sets native browser outline style to reset.
layout: default
---

> Interactivity

# Outline

Utilities for sets native browser outline style to reset.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| outline-none | outline: 0 |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for outline in variants.outline %}{% for item in outline.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

