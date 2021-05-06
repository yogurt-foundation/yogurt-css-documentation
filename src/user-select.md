---
id: user-select
title: User Select
description: Utilities for controls whether the user can select text.
topic: Interactivity
variant: responsive
layout: default
---

> Interactivity

# User Select

Utilities for controls whether the user can select text.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| select-none | user-select: none |
| select-text | user-select: text |
| select-all | user-select: all |
| select-auto | user-select: auto |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for userselect in variants.userselect %}{% for item in userselect.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

