---
id: text-stroke-width
title: Text Stroke
description: Utilities for set text with outer stroke width.
topic: Typography
relate: text-stroke-color
variant: responsive
layout: default
---

> Typography

# Text Stroke

Utilities for set text with outer stroke width.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| text-stroke-1 | -webkit-text-stroke: 1px | <y class="text-white text-lg text-stroke-1">text</y> |
| text-stroke-2 | -webkit-text-stroke: 2px | <y class="text-white text-lg text-stroke-2">text</y> |
| text-stroke-3 | -webkit-text-stroke: 3px | <y class="text-white text-lg text-stroke-3">text</y> |
| text-stroke-4 | -webkit-text-stroke: 4px | <y class="text-white text-lg text-stroke-4">text</y> |
| text-stroke-5 | -webkit-text-stroke: 5px | <y class="text-white text-lg text-stroke-5">text</y> |
| text-stroke-6 | -webkit-text-stroke: 6px | <y class="text-white text-lg text-stroke-6">text</y> |
| text-stroke-7 | -webkit-text-stroke: 7px | <y class="text-white text-lg text-stroke-7">text</y> |
| text-stroke-8 | -webkit-text-stroke: 8px | <y class="text-white text-lg text-stroke-8">text</y> |
| text-stroke-9 | -webkit-text-stroke: 9px | <y class="text-white text-lg text-stroke-">text</y> |
| text-stroke-10 | -webkit-text-stroke: 10px | <y class="text-white text-lg text-stroke-10">text</y> |
| text-stroke-12 | -webkit-text-stroke: 12px | <y class="text-white text-lg text-stroke-12">text</y> |
| text-stroke-14 | -webkit-text-stroke: 14px | <y class="text-white text-lg text-stroke-14">text</y> |
| text-stroke-16 | -webkit-text-stroke: 16px | <y class="text-white text-lg text-stroke-16">text</y> |
| text-stroke-18 | -webkit-text-stroke: 18px | <y class="text-white text-lg text-stroke-18">text</y> |
| text-stroke-20 | -webkit-text-stroke: 20px | <y class="text-white text-lg text-stroke-20">text</y> |
| text-stroke-24 | -webkit-text-stroke: 24px | <y class="text-white text-lg text-stroke-24">text</y> |
| text-stroke-28 | -webkit-text-stroke: 28px | <y class="text-white text-lg text-stroke-28">text</y> |
| text-stroke-32 | -webkit-text-stroke: 32px | <y class="text-white text-lg text-stroke-32">text</y> |
| text-stroke-36 | -webkit-text-stroke: 36px | <y class="text-white text-lg text-stroke-36">text</y> |
| text-stroke-40 | -webkit-text-stroke: 40px | <y class="text-white text-lg text-stroke-40">text</y> |

---

## Usage

<y class="px-4 my-2 mx-auto w-full">
  <y class="text-white text-8xl text-stroke-4 text-stroke-gray-700">
    TEXT
  </y>
</y>

```html
<!-- Example -->
<y class="text-white text-8xl text-stroke-4 ... text-stroke-gray-700">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textstrokewidth in variants.textstrokewidth %}{% for item in textstrokewidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).