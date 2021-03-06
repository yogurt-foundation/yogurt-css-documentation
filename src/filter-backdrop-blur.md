---
id: filter-backdrop-blur
title: Filter Backdrop Blur
description: Utilities for sets filter backdrop blur effect to an element.
topic: Filters
relate: filter-backdrop-brightness, filter-backdrop-contrast, filter-backdrop-saturate
layout: default
---

> Filters

# Backdrop Blur <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Utilities for sets filter backdrop blur effect to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| backdrop-filter `{blur}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

<style>
.supports {
  display: block
}
@supports (backdrop-filter: blur(0)) {
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

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| blur-0 | --backdrop-blur: 0px |
| blur-1 | --backdrop-blur: 2px |
| blur-2 | --backdrop-blur: 4px |
| blur-3 | --backdrop-blur: 6px |
| blur-4 | --backdrop-blur: 8px |
| blur-5 | --backdrop-blur: 10px |
| blur-6 | --backdrop-blur: 12px |
| blur-7 | --backdrop-blur: 14px |
| blur-8 | --backdrop-blur: 16px |
| blur-9 | --backdrop-blur: 18px |
| blur-10 | --backdrop-blur: 20px |

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="m-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="backdrop-filter blur-3 w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `backdrop-filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter blur-2 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter blur-2 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Contrast](/filter-backdrop-contrast/), and [Backdrop Saturate](/filter-backdrop-saturate/).

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter blur-2 brightness-1 contrast-1 saturate-1 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter blur-2 brightness-1 contrast-1 saturate-1 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'backdrop.blur',
  $property: --backdrop-blur,
  $modifier: (
    1: 1px,
    2: 2px
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropblur in variants.filterbackdropblur %}{% for item in filterbackdropblur.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


