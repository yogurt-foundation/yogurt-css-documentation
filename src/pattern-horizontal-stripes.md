---
id: pattern-horizontal-stripes
title: Pattern Horizontal Stripes
description: Utilities for sets an element's background horizontal-stripes pattern.
topic: Patterns
layout: default
---

> Patterns

# Horizontal Stripes <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background horizontal-stripes pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> horizontal-stripes-sm | background-image: linear-gradient(0deg, transparent 50%, currentColor 50%); <br><br> background-size: 10px 10px | <y class="pattern horizontal-stripes-sm w-32 h-56"></y> |
| pattern <br> horizontal-stripes-md | background-image: linear-gradient(0deg, transparent 50%, currentColor 50%); <br><br> background-size: 25px 25px | <y class="pattern horizontal-stripes-md w-32 h-56"></y> |
| pattern <br> horizontal-stripes-lg | background-image: linear-gradient(0deg, transparent 50%, currentColor 50%); <br><br> background-size: 50px 50px | <y class="pattern horizontal-stripes-lg w-32 h-56"></y> |
| pattern <br> horizontal-stripes-xl | background-image: linear-gradient(0deg, transparent 50%, currentColor 50%); <br><br> background-size: 100px 100px | <y class="pattern horizontal-stripes-xl w-32 h-56"></y> |

---

## Usage

Set basic horizontal-stripes pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern horizontal-stripes-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern horizontal-stripes-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern horizontal-stripes-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern horizontal-stripes-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

Set pattern clipping with text.

<y class="px-4 my-2 mx-auto w-64">
  <y class="pattern horizontal-stripes-sm clip-text text-red-500">
    <y class="text-8xl font-bold">
      TEXT
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="pattern horizontal-stripes-sm clip-text text-red-500">
  <y>
    TEXT
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patternhorizontalstripes in variants.patternhorizontalstripes %}{% for item in patternhorizontalstripes.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

