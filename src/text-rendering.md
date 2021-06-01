---
id: text-rendering
title: Text Rendering
description: Utilities for fine tune optimization by suggesting to the browser as to how it should render text on the screen.
topic: Rendering
relate: image-rendering
layout: default
---

> Rendering

# Text Rendering <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for fine tune optimization by suggesting to the browser as to how it should render text on the screen.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| text-optimize-auto | text-rendering: auto; |
| text-optimize-speed | text-rendering: optimizeSpeed; |
| text-optimize-legibility | text-rendering: optimizeLegibility; |
| text-optimize-precision | text-rendering: geometricPrecision; |

<style>
.supports {
  display: block
}
@supports (text-rendering: auto) {
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
<y class="text-optimize-legibility">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textrendering in variants.textrendering %}{% for item in textrendering.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
