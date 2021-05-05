---
id: clear
title: Clear
description: Utilities for set whether an element is moved below preceding floated elements.
category: Layouts
layout: default
---

> Layouts

# Clear

Utilities for set whether an element is moved below preceding floated elements.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| clear-left | clear: left |
| clear-right | clear: right |
| clear-both | clear: both |
| clear-none | clear: none |

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clear in variants.clear %}{% for item in clear.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
