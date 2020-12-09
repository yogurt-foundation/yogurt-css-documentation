---
id: screen-reader
title: Screen Reader
description: Utilities for controls whether an element is visually hidden but still accessible to screen readers.
layout: default
---

> Accessibility

# Screen Reader <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.7</span>

Utilities for controls whether an element is visually hidden but still accessible to screen readers.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| sr-only | position: absolute; <br> width: 1px; <br> height: 1px; <br> padding: 0; <br> margin: -1px; <br> overflow: hidden; <br> white-space: nowrap; <br> border-width: 0 |
| not-sr-only | position: static; <br> width: auto; <br> height: auto; <br> padding: 0; <br> margin: 0; <br> overflow: visible; <br> clip: auto; <br> white-space: normal |

---

## Usage

Set an element visible to screen reader.

```html
<!-- Example -->
<y class="sr-only">
  ...
</y>
```

Set an element hidden from screen reader.

```html
<!-- Example -->
<y class="not-sr-only">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |
