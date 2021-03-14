---
id: pattern-cross-dots
title: Pattern Cross Dots
description: Utilities for sets an element's background cross-dots pattern.
layout: default
---

> Patterns

# Cross Dots <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background cross-dots pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> cross-dots-sm | background-image: radial-gradient(currentColor 5px, transparent 5px), radial-gradient(currentColor 5px, transparent 5px); <br><br> background-size: calc(20 * 5px) calc(20 * 5px); <br><br> background-position: 0 0, calc(10 * 5px) calc(10 * 5px) | <y class="pattern cross-dots-sm w-32 h-56"></y> |
| pattern <br> cross-dots-md | background-image: radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px); <br><br> background-size: calc(20 * 1px) calc(20 * 1px); <br><br> background-position: 0 0, calc(10 * 1px) calc(10 * 1px) | <y class="pattern cross-dots-md w-32 h-56"></y> |
| pattern <br> cross-dots-lg | background-image: radial-gradient(currentColor 1.5px, transparent 1.5px), radial-gradient(currentColor 1.5px, transparent 1.5px); <br><br> background-size: calc(20 * 1.5px) calc(20 * 1.5px); <br><br> background-position: 0 0, calc(10 * 1.5px) calc(10 * 1.5px) | <y class="pattern cross-dots-lg w-32 h-56"></y> |
| pattern <br> cross-dots-xl | background-image: radial-gradient(currentColor 2px, transparent 2px), radial-gradient(currentColor 2px, transparent 2px); <br><br> background-size: calc(20 * 2px) calc(20 * 2px); <br><br> background-position: 0 0, calc(10 * 2px) calc(10 * 2px) | <y class="pattern cross-dots-xl w-32 h-56"></y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic cross-dots pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern cross-dots-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern cross-dots-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern cross-dots-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern cross-dots-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern cross-dots-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern cross-dots-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
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
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |