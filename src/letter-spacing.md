---
id: letter-spacing
title: Letter Spacing
description: Utilities for sets the spacing between letters.
layout: default
---

> Typography

# Letter Spacing

Utilities for sets the spacing between letters.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| gap-tighter | letter-spacing: -0.05em | <y class="text-lg gap-tighter">Text</y> |
| gap-tight | letter-spacing: -0.025em | <y class="text-lg gap-tight">Text</y> |
| gap-normal | letter-spacing: 0 | <y class="text-lg gap-normal">Text</y> |
| gap-wide | letter-spacing: 0.025em | <y class="text-lg gap-wide">Text</y> |
| gap-wider | letter-spacing: 0.05em | <y class="text-lg gap-wider">Text</y> |
| gap-widest | letter-spacing: 0.1em | <y class="text-lg gap-widest">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="gap-tight">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'gap',
    //variant: 'responsive',
    property: 'letter-spacing',
    modifier: (
      'super': '.5em',
      'ultra': '1em'
      ...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |