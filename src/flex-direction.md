---
id: flex-direction
title: Flex Direction
description: Utilities for sets direction of flex items.
category: Flexbox
tags: flex, flex-gap, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Direction

Utilities for sets direction of flex items.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| flex-row | flex-direction: row |
| flex-row-reverse | flex-direction: row-reverse |
| flex-col | flex-direction: column |
| flex-col-reverse | flex-direction: column-reverse |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexdirection in variants.flexdirection %}{% for item in flexdirection.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

