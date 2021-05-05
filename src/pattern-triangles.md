---
id: pattern-triangles
title: Pattern Triangles
description: Utilities for sets an element's background triangles pattern.
category: Patterns
layout: default
---

> Patterns

# Triangles <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background triangles pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> triangles-sm | background-image: linear-gradient(45deg, currentColor 50%, transparent 50%); <br><br> background-size: 10px 10px | <y class="pattern triangles-sm w-32 h-56"></y> |
| pattern <br> triangles-md | background-image: linear-gradient(45deg, currentColor 50%, transparent 50%); <br><br> background-size: 25px 25px | <y class="pattern triangles-md w-32 h-56"></y> |
| pattern <br> triangles-lg | background-image: linear-gradient(45deg, currentColor 50%, transparent 50%); <br><br> background-size: 50px 50px | <y class="pattern triangles-lg w-32 h-56"></y> |
| pattern <br> triangles-xl | background-image: linear-gradient(45deg, currentColor 50%, transparent 50%); <br><br> background-size: 100px 100px | <y class="pattern triangles-xl w-32 h-56"></y> |

---

## Usage

Set basic triangles pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern triangles-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern triangles-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern triangles-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern triangles-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern triangles-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern triangles-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patterntriangles in variants.patterntriangles %}{% for item in patterntriangles.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

