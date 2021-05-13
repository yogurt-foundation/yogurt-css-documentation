---
id: list-style-position
title: List Style Position
description: Utilities for sets the position of a list's bullets.
topic: Typography
layout: default
---

> Typography

# List Style Position

Utilities for sets the position of a list's bullets.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| list-inside | list-style-position: inside |
| list-outside | list-style-position: outside |

---

## Usage

```html
<!-- Example -->
<ul class="list-outside">
  <li>
    ...
  </li>
  ...
</ul>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for liststyleposition in variants.liststyleposition %}{% for item in liststyleposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).