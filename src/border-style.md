---
id: border-style
title: Border Style
description: Utilities for sets border style.
topic: Borders
relate: border-color, border-radius, border-width, curve-object
variant: focus
layout: default
---

> Borders

# Border Style

Utilities for sets border style.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| border-solid | border-style: solid | <y class="w-16 h-8 rounded bg-gray-300 border-2 border-solid"></y> |
| border-dashed | border-style: dashed | <y class="w-16 h-8 rounded bg-gray-300 border-2 border-dashed"></y> |
| border-dotted | border-style: dotted | <y class="w-16 h-8 rounded bg-gray-300 border-2 border-dotted"></y> |
| border-double | border-style: double | <y class="w-16 h-8 rounded bg-gray-300 border-2 border-double"></y> |
| border-none | border-style: none | <y class="w-16 h-8 rounded bg-gray-300 border-2 border-none"></y> |

---

## Usage

<y class="px-4 my-2 mx-auto w-56">
  <y class="p-4 bg-gray-400 border-8 border-dashed">
    <y class="w-full h-24 bg-gray-500"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="border-8 border-dashed">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for borderstyle in variants.borderstyle %}{% for item in borderstyle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

