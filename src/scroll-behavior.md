---
id: scroll-smooth
title: Scroll Smooth
description: Utilities for sets smooth animation of scroll anchored position within a scrolling box.
topic: Interactivity
layout: default
---

> Interactivity

# Scroll Smooth <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for sets smooth animation of scroll anchored position within a scrolling box.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scroll-smooth | scroll-behavior: smooth |

<style>
.supports {
  display: block
}
@supports (scroll-behavior: smooth) {
  .supports {
    display: none
  }
}
</style>

<y class="supports m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

---

## Usage

```html
<!-- Example -->
<html class="scroll-smooth">
  ...
</html>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollbehaviour in variants.scrollbehaviour %}{% for item in scrollbehaviour.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


