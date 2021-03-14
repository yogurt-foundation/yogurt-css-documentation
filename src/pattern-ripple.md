---
id: pattern-ripple
title: Pattern Ripple
description: Utilities for sets an element's background ripple pattern.
layout: default
---

> Patterns

# Ripple <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.2</span>

Utilities for sets an element's background ripple pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> ripple-sm | background-image: repeating-radial-gradient(circle at 0 0, transparent 0, currentColor 10px), repeating-linear-gradient( currentColor, transparent ) | <y class="pattern ripple-sm w-32 h-56"></y> |
| pattern <br> ripple-md | background-image: repeating-radial-gradient(circle at 0 0, transparent 0, currentColor 25px), repeating-linear-gradient( currentColor, transparent ) | <y class="pattern ripple-md w-32 h-56"></y> |
| pattern <br> ripple-lg | background-image: repeating-radial-gradient(circle at 0 0, transparent 0, currentColor 50px), repeating-linear-gradient( currentColor, transparent ) | <y class="pattern ripple-lg w-32 h-56"></y> |
| pattern <br> ripple-xl | background-image: repeating-radial-gradient(circle at 0 0, transparent 0, currentColor 100px), repeating-linear-gradient( currentColor, transparent ) | <y class="pattern ripple-xl w-32 h-56"></y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic ripple pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern ripple-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern ripple-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern ripple-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern ripple-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern with foreground and background colors by using `text-{color}` and `bg-{color}`utilities. (See [Text Color](/text-color/), [Background Color](/background-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern ripple-sm h-32 text-amber-400 bg-red-500"></y>
</y>


```html
<!-- Example -->
<y class="pattern ripple-sm text-amber-400 bg-red-500 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern ripple-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern ripple-sm clip-text text-red-500">
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