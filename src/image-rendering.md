---
id: image
title: Image
description: Utilities for sets an image or canvas renders if it is scaled up or down from its original dimensions.
topic: Rendering
layout: default
---

> Rendering

# Image <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span>

Utilities for sets an image or canvas renders if it is scaled up or down from its original dimensions.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| image-optimize-auto | image-rendering: auto |
| image-optimize-crisp | image-rendering: crisp-edges |
| image-optimize-pixelated | image-rendering: pixelated |

<style>
.supports {
  display: block
}
@supports (image-rendering: auto) {
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

```html
<!-- Example -->
<img class="image-optimize-crisp">

<canvas class="image-optimize-crisp"></canvas>

<y
  class="image-optimize-crisp"
  style="background-image: url(...)">
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for imagerendering in variants.imagerendering %}{% for item in imagerendering.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

