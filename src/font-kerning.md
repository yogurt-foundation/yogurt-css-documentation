---
id: font-kerning
title: Font Kerning
description: Utilities for removing spacing for specific pairs of letters automatically.
topic: Typography
layout: default
---

> Typography

# Font Kerning <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for removing spacing for specific pairs of letters automatically.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| font-kerning-auto | font-kerning: auto |
| font-kerning-normal | font-kerning: normal |
| font-kerning-none | font-kerning: none |

<style>
.supports {
  display: block
}
@supports (font-kerning: auto) {
  .supports {
    display: none
  }
}
</style>

<y class="supports mt-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

<y class="mt-2 mb-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 (dark)text-orange-500 bg-gray-200 (dark)bg-gray-900">
  See
  <a href="/letter-spacing/">
    Letter Spacing
  </a>
  for more manual control over letter spacing.
</y>

---

## Usage

There are 5 types of letters that could be effectively kerning:

- Rectangular: `M`, `H`, `N` (have vertical elements on both sides)
- Rounded: `O`
- Half-rounded: `B`, `D`
- Half-Opened: `L`, `E`, `C`, `K`, `J`
- Opened: `X`, `T`, `W`

Set a typo element to removing space in between each letter if any spaces are left.

<y class="mt-4 mb-2 mx-auto max-w-md">
  <y class="flex">
    <y class="mx-2">
      <y class="p-4 text-4xl text-center gap-wide bg-gray-300">
        LOREM
      </y>
      <y class="pt-2 text-sm text-center">
        Kerning: auto
      </y>
    </y>
    <y class="mx-2">
      <y class="p-4 text-4xl gap-tight text-center bg-gray-300">
        LOREM
      </y>
      <y class="pt-2 text-sm text-center">
        Kerning: none
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="font-kerning-none">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontkerning in variants.fontkerning %}{% for item in fontkerning.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).