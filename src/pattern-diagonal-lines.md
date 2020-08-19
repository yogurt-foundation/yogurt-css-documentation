---
id: pattern-diagonal-lines
title: Pattern Diagonal Lines
description: Utilities for sets an element's background diagonal-lines pattern.
layout: default
---

> Patterns

# Diagonal Lines <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets an element's background diagonal-lines pattern.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> diagonal-lines-sm | background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%); <br><br> background-size: 10px 10px | <y class="pattern diagonal-lines-sm w-32 h-56"></y> |
| pattern <br> diagonal-lines-md | background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%); <br><br> background-size: 25px 25px | <y class="pattern diagonal-lines-md w-32 h-56"></y> |
| pattern <br> diagonal-lines-lg | background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%); <br><br> background-size: 50px 50px | <y class="pattern diagonal-lines-lg w-32 h-56"></y> |
| pattern <br> diagonal-lines-xl | background-image: repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%); <br><br> background-size: 100px 100px | <y class="pattern diagonal-lines-xl w-32 h-56"></y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic diagonal-lines pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern diagonal-lines-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern diagonal-lines-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. See (Text Color)[/text-color/].

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern diagonal-lines-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern diagonal-lines-sm text-amber-400 ... h-32 w-full">
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