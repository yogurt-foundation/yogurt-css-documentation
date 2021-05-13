---
id: content-visibility
title: Render (Content-Visibility)
description: Utilities for sets skip rendering if element is off-screen to improve overall page rendering speed.
topic: Layouts
layout: default
---

> Layouts

# Render <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets skip rendering if element is off-screen to improve overall page rendering speed.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| render-auto <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span> | content-visibility: auto |
| render-auto-widest | content-visibility: auto; <br> contain-intrinsic-size: 1000px |
| render-auto-wide | content-visibility: auto; <br> contain-intrinsic-size: 800px |
| render-auto-normal | content-visibility: auto; <br> contain-intrinsic-size: 600px |
| render-auto-tight | content-visibility: auto; <br> contain-intrinsic-size: 400px |
| render-auto-tigher | content-visibility: auto; <br> contain-intrinsic-size: 200px |
| render-hidden-widest | content-visibility: hidden; <br> contain-intrinsic-size: 1000px |
| render-hidden-wide | content-visibility: hidden; <br> contain-intrinsic-size: 800px |
| render-hidden-normal | content-visibility: hidden; <br> contain-intrinsic-size: 600px |
| render-hidden-tight | content-visibility: hidden; <br> contain-intrinsic-size: 400px |
| render-hidden-tigher | content-visibility: hidden; <br> contain-intrinsic-size: 200px |

<style>
.supports {
  display: block
}
@supports (content-visibility: auto) {
  .supports {
    display: none
  }
}
</style>

<y class="supports mt-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

---

## Usage

Set maximum height and width for the browser to start to render an element.

```html
<y class="render-auto-widest">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for contentvisibility in variants.contentvisibility %}{% for item in contentvisibility.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).