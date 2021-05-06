---
id: justify-content
title: Justify Content
description: Utilities for controls how flex items are positioned along container's main axis.
topic: Flexbox
relate: flex, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self
variant: responsive
layout: default
---

> Flexbox

# Justify Content

Utilities for controls how flex items are positioned along container's main axis.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| justify-start | justify-content: flex-start |
| justify-center | justify-content: center |
| justify-end | justify-content: flex-end |
| justify-between | justify-content: space-between |
| justify-around | justify-content: space-around |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for justifycontent in variants.justifycontent %}{% for item in justifycontent.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

