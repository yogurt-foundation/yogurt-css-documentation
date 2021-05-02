---
id: font-weight
title: Font Style
description: Utilities for sets the font weight.
layout: default
---

> Typography

# Font Weight

Utilities for sets the font weight.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| font-hairline | font-weight: 100 | <y class="text-lg font-hairline">Text</y> |
| font-thin | font-weight: 200 | <y class="text-lg font-thin">Text</y> |
| font-light | font-weight: 300 | <y class="text-lg font-light">Text</y> |
| font-normal | font-weight: 400 | <y class="text-lg font-normal">Text</y> |
| font-medium | font-weight: 500 | <y class="text-lg font-medium">Text</y> |
| font-semibold | font-weight: 600 | <y class="text-lg font-semibold">Text</y> |
| font-bold | font-weight: 700 | <y class="text-lg font-bold">Text</y> |
| font-extrabold | font-weight: 800 | <y class="text-lg font-extrabold">Text</y> |
| font-black | font-weight: 900 | <y class="text-lg font-black">Text</y> |

---

## Usage

Set font-weight to an element.

```html
<!-- Example -->
<y class="font-light">
  ...
</y>
```

Set font-weight with `Google Fonts`. (See [Font Family](/font-family/#customize-more)).

```html
<!-- Example -->
<y class="font-roboto font-light">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontweight in variants.fontweight %}{% for item in fontweight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).