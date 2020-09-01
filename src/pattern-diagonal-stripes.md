---
id: pattern-diagonal-stripes
title: Pattern Diagonal Stripes
description: Utilities for sets an element's background diagonal-stripes pattern.
layout: default
---

> Patterns

# Diagonal Stripes <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets an element's background diagonal-stripes pattern.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> diagonal-stripes-sm | background: repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor calc(2 * 10px)) | <y class="pattern diagonal-stripes-sm w-32 h-56"></y> |
| pattern <br> diagonal-stripes-md | background: repeating-linear-gradient(45deg, transparent, transparent 25px, currentColor 25px, currentColor calc(2 * 25px)) | <y class="pattern diagonal-stripes-md w-32 h-56"></y> |
| pattern <br> diagonal-stripes-lg | background: repeating-linear-gradient(45deg, transparent, transparent 50px, currentColor 50px, currentColor calc(2 * 50px)) | <y class="pattern diagonal-stripes-lg w-32 h-56"></y> |
| pattern <br> diagonal-stripes-xl | background: repeating-linear-gradient(45deg, transparent, transparent 100px, currentColor 100px, currentColor calc(2 * 100px)) | <y class="pattern diagonal-stripes-xl w-32 h-56"></y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic diagonal-stripes pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern diagonal-stripes-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern diagonal-stripes-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern diagonal-stripes-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern diagonal-stripes-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |