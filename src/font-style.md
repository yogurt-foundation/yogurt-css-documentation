---
id: font-style
title: Font Style
description: Utilities for sets the style of the font.
topic: Typography
layout: default
---

> Typography

# Font Style

Utilities for sets the style of the font.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| italic | font-style: italic | <y class="text-lg italic">Text</y> |
| not-italic | font-style: normal | <y class="text-lg not-italic">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="italic">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontstyle in variants.fontstyle %}{% for item in fontstyle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).