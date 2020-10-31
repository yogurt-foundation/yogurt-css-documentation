---
id: font-size
title: Font Size
description: Utilities for sets the font size.
layout: default
---

> Typography

# Font Size

Utilities for sets the font size.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| text-xs | font-size: .75rem | <span class="text-xs">Text</span> |
| text-sm | font-size: .875rem | <span class="text-sm">Text</span> |
| text-md | font-size: 1rem | <span class="text-md">Text</span> |
| text-lg | font-size: 1.125rem | <span class="text-lg">Text</span> |
| text-xl | font-size: 1.25rem | <span class="text-xl">Text</span> |
| text-2xl | font-size: 1.5rem | <span class="text-2xl">Text</span> |
| text-3xl | font-size: 1.875rem | <span class="text-3xl">Text</span> |
| text-4xl | font-size: 2.25rem | <span class="text-4xl">Text</span> |
| text-5xl | font-size: 3rem | <span class="text-5xl">Text</span> |
| text-6xl | font-size: 4rem | <span class="text-6xl">Text</span> |
| text-7xl | font-size: 5rem | <span class="text-7xl">Text</span> |
| text-8xl | font-size: 6rem | <span class="text-8xl">Text</span> |

---

## Usage

Set font-size to an element.

```html
<!-- Example -->
<y class="text-md">
  ...
</y>

<span class="text-md">
  ...
</span>
```

Set default font-size with `<body>` tag.

```html
<!-- Example -->
<body class="text-md">
  ...
</body>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'text',
    //variant: 'responsive',
    property: 'font-size',
    modifier: (
      '9xl': '7rem',
      '10xl': '8rem'
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
| active | | |
| visited | | |
| checked | | |
| disabled | | |