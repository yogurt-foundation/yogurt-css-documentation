---
id: pattern-grid
title: Pattern Grid
description: Utilities for sets an element's background grid pattern.
layout: default
---

> Patterns

# Grid <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets an element's background grid pattern.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> grid-sm | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 10px 10px | <y class="pattern grid-sm w-32 h-56"></y> |
| pattern <br> grid-md | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 25px 25px | <y class="pattern grid-md w-32 h-56"></y> |
| pattern <br> grid-lg | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 50px 50px | <y class="pattern grid-lg w-32 h-56"></y> |
| pattern <br> grid-xl | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 100px 100px | <y class="pattern grid-xl w-32 h-56"></y> |

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

<y class="mt-2 mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  To fill the pattern color is using the
  <strong>
    text-{value}
  </strong> (See
  <a href="/text-color/#class">
    Text Color
  </a>.)
</y>

---

## Usage

Set basic grid pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern grid-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern grid-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern grid-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern grid-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |