---
id: pattern-zigzag
title: Pattern Zigzag
description: Utilities for sets an element's background zigzag pattern.
topic: Patterns
layout: default
---

> Patterns

# Zigzag <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets an element's background zigzag pattern.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| pattern <br> zigzag-sm | background: linear-gradient(135deg, currentColor 25%, transparent 25%) -10px 0, linear-gradient(225deg, currentColor 25%, transparent 25%) -10px 0, linear-gradient(315deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%); <br><br> background-size: calc(2 * 10px) calc(2 * 10px) | <y class="pattern zigzag-sm w-32 h-56"></y> |
| pattern <br> zigzag-md | background: linear-gradient(135deg, currentColor 25%, transparent 25%) -25px 0, linear-gradient(225deg, currentColor 25%, transparent 25%) -25px 0, linear-gradient(315deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%); <br><br> background-size: calc(2 * 25px) calc(2 * 25px) | <y class="pattern zigzag-md w-32 h-56"></y> |
| pattern <br> zigzag-lg | background: linear-gradient(135deg, currentColor 25%, transparent 25%) -50px 0, linear-gradient(225deg, currentColor 25%, transparent 25%) -50px 0, linear-gradient(315deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%); <br><br> background-size: calc(2 * 50px) calc(2 * 50px) | <y class="pattern zigzag-lg w-32 h-56"></y> |
| pattern <br> zigzag-xl | background: linear-gradient(135deg, currentColor 25%, transparent 25%) -100px 0, linear-gradient(225deg, currentColor 25%, transparent 25%) -100px 0, linear-gradient(315deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%); <br><br> background-size: calc(2 * 100px) calc(2 * 100px) | <y class="pattern zigzag-xl w-32 h-56"></y> |

---

## Usage

Set basic zigzag pattern.

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern zigzag-sm h-32"></y>
</y>


```html
<!-- Example -->
<y class="pattern zigzag-sm ... h-32 w-full">
  ...
</y>
```

Set pattern with color by using `text-{color}` utility. (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="pattern zigzag-sm h-32 text-amber-400"></y>
</y>


```html
<!-- Example -->
<y class="pattern zigzag-sm text-amber-400 ... h-32 w-full">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for patternzigzag in variants.patternzigzag %}{% for item in patternzigzag.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

