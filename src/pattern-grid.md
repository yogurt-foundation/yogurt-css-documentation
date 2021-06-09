---
id: pattern-grid
title: Pattern Grid
description: Utilities for sets an element's background grid pattern.
topic: Patterns
layout: default
---

> Patterns

# Grid <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background grid pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> grid-sm | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 10px 10px | <y class="pattern grid-sm w-32 h-56"></y> |
| pattern <br> grid-md | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 25px 25px | <y class="pattern grid-md w-32 h-56"></y> |
| pattern <br> grid-lg | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 50px 50px | <y class="pattern grid-lg w-32 h-56"></y> |
| pattern <br> grid-xl | background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); <br><br> background-size: 100px 100px | <y class="pattern grid-xl w-32 h-56"></y> |

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

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern grid-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern grid-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern grid-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern grid-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patterngrid in variants.patterngrid %}{% for item in patterngrid.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

