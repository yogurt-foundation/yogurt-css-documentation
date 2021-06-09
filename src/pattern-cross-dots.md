---
id: pattern-cross-dots
title: Pattern Cross Dots
description: Utilities for sets an element's background cross-dots pattern.
topic: Patterns
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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patterncrossdots in variants.patterncrossdots %}{% for item in patterncrossdots.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

