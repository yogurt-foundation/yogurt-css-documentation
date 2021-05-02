---
id: border-collapse
title: Border Collapse
description: Utilities for collapse or separate table borders.
layout: default
---

> Tables

# Border Collapse

Utilities for collapse or separate table borders.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| border-collapse | border-collapse: collapse |
| border-separate | border-collapse: separate |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for bordercollapse in variants.bordercollapse %}{% for item in bordercollapse.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

