---
id: flex-shrink
title: Flex Shrink
description: Utilities for controls how flex items shrink.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-wrap, align-content, align-items, align-self, justify-content
variant: responsive
layout: default
---

> Flexbox

# Flex Shrink

Utilities for controls how flex items shrink.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| flex-shrink | flex-shrink: 1 |
| flex-shrink-0 | flex-shrink: 0 |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexshrink in variants.flexshrink %}{% for item in flexshrink.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

