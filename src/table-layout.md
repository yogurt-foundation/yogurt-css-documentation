---
id: tab-layout
title: Table Layout
description: Utilities for defines the algorithm used to layout table cells, rows and columns.
category: Tables
layout: default
---

> Tables

# Table Layout

Utilities for defines the algorithm used to layout table cells, rows and columns.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| table-auto | table-layout: auto |
| table-fixed | table-layout: fixed |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for tabletlayout in variants.tabletlayout %}{% for item in tabletlayout.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

