---
id: appearance
title: Appearance
description: Utilities for disables native styling based on the native browser theme.
layout: default
---

> Interactivity

# Appearance

Utilities for disables native styling based on the native browser theme.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| appearance-none | appearance: none |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for appearance in variants.appearance %}{% for item in appearance.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

