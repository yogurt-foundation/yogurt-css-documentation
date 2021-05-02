---
id: pattern-dots
title: Pattern Dots
description: Utilities for sets an element's background dots pattern.
layout: default
---

> Patterns

# Dots <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background dots pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> dots-sm | background-image: radial-gradient(currentColor 1px, transparent 1px); <br><br> background-size: calc(10 * 1px) calc(10 * 1px) | <y class="pattern dots-sm w-32 h-56"></y> |
| pattern <br> dots-md | background-image: radial-gradient(currentColor 1.5px, transparent 1.5px); <br><br> background-size: calc(10 * 1.5px) calc(10 * 1.5px) | <y class="pattern dots-md w-32 h-56"></y> |
| pattern <br> dots-lg | background-image: radial-gradient(currentColor 2px, transparent 2px); <br><br> background-size: calc(10 * 2px) calc(10 * 2px) | <y class="pattern dots-lg w-32 h-56"></y> |
| pattern <br> dots-xl | background-image: radial-gradient(currentColor 5px, transparent 5px); <br><br> background-size: calc(10 * 5px) calc(10 * 5px) | <y class="pattern dots-xl w-32 h-56"></y> |

---

## Usage

Set basic dots pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern dots-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern dots-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern dots-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern dots-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern dots-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern dots-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patterndots in variants.patterndots %}{% for item in patterndots.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

