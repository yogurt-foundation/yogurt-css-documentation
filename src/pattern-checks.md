---
id: pattern-checks
title: Pattern Checks
description: Utilities for sets an element's background checks pattern.
layout: default
---

> Patterns

# Checks <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background checks pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> checks-sm | background-image: repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor); <br><br> background-position: 0 0, 10px 10px; <br><br> background-size: calc(2 * 10px) calc(2 * 10px) | <y class="pattern checks-sm w-32 h-56"></y> |
| pattern <br> checks-md | background-image: repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor); <br><br> background-position: 0 0, 25px 25px; <br><br> background-size: calc(2 * 25px) calc(2 * 25px) | <y class="pattern checks-md w-32 h-56"></y> |
| pattern <br> checks-lg | background-image: repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor); <br><br> background-position: 0 0, 50px 50px; <br><br> background-size: calc(2 * 50px) calc(2 * 50px) | <y class="pattern checks-lg w-32 h-56"></y> |
| pattern <br> checks-xl | background-image: repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), repeating-linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor); <br><br> background-position: 0 0, 100px 100px; <br><br> background-size: calc(2 * 100px) calc(2 * 100px) | <y class="pattern checks-xl w-32 h-56"></y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic checks pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern checks-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern checks-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern checks-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern checks-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern checks-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern checks-sm clip-text text-red-500">
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