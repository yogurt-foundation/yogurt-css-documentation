---
id: pattern-rhombus
title: Pattern Rhombus
description: Utilities for sets an element's background rhombus pattern.
category: Patterns
layout: default
---

> Patterns

# Rhombus <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.2</span>

Utilities for sets an element's background rhombus pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> rhombus-sm | background-image: linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(315deg, currentColor 25%, transparent 25%) <br> background-position: 10px 0, 10px 0, 0 0, 0 0 <br> background-size: 10px 10px <br> background-repeat: repeat | <y class="pattern rhombus-sm w-32 h-56"></y> |
| pattern <br> rhombus-md | background-image: background-image: linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(315deg, currentColor 25%, transparent 25%) <br> background-position: 20px 0, 25px 0, 0 0, 0 0 <br> background-size: 25px 25px <br> background-repeat: repeat | <y class="pattern rhombus-md w-32 h-56"></y> |
| pattern <br> rhombus-lg | background-image: background-image: linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(315deg, currentColor 25%, transparent 25%) <br> background-position: 50px 0, 50px 0, 0 0, 0 0 <br> background-size: 50px 50px <br> background-repeat: repeat | <y class="pattern rhombus-lg w-32 h-56"></y> |
| pattern <br> rhombus-xl | background-image: background-image: linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(315deg, currentColor 25%, transparent 25%) <br> background-position: 100px 0, 100px 0, 0 0, 0 0 <br> background-size: 100px 100px <br> background-repeat: repeat | <y class="pattern rhombus-xl w-32 h-56"></y> |

---

## Usage

Set basic rhombus pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern rhombus-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern rhombus-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern rhombus-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern rhombus-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern with foreground and background colors by using `text-{color}` and `bg-{color}`utilities. (See [Text Color](/text-color/), [Background Color](/background-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern rhombus-sm h-32 text-amber-400 bg-red-500"></y>
</y>


```html
<!-- Example -->
<y class="pattern rhombus-sm text-amber-400 bg-red-500 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern rhombus-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern rhombus-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patternrhombus in variants.patternrhombus %}{% for item in patternrhombus.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

