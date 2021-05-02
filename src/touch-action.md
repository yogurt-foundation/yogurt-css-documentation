---
id: touch-action
title: Touch Action
description: Utilities for set control over the effect of touchscreen interactions to an element.
layout: default
---

> Interactivity

# Touch Action <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for set control over the effect of touchscreen interactions to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| touch-auto | touch-action: auto |
| touch-none | touch-action: none |
| touch-pan-x | touch-action: pan-x |
| touch-pan-left | touch-action: pan-left |
| touch-pan-right | touch-action: pan-right |
| touch-pan-y | touch-action: pan-y |
| touch-pan-up | touch-action: pan-up |
| touch-pan-down | touch-action: pan-down |
| touch-pinch-zoom | touch-action: pinch-zoom |
| touch-manipulation | touch-action: manipulation |

<style>
.supports {
  display: block
}
@supports (touch-action: none) {
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

Set an element with touch limit to `pan-left`, no `pan-right` is allowed.

<y class="my-2 mx-auto w-48 h-48 touch-pan-left overflow-auto overscroll-contain">
  <y class="m-1 w-64 h-64">
    <img class=""
         src="https://picsum.photos/800?=1">
  </y>
</y>

```html
<!-- Example -->
<y class="touch-pan-left ... overflow-scroll overscroll-contain">
  ...
</y>
```

Set an element with touch limit to `pan-none`, `x` and `y` panning is disabled.

<y class="my-2 mx-auto w-48 h-48 touch-none overflow-auto overscroll-contain">
  <y class="m-1 w-64 h-64">
    <img class=""
         src="https://picsum.photos/800?=1">
  </y>
</y>

```html
<!-- Example -->
<y class="touch-none ... overflow-scroll overscroll-contain">
  ...
</y>
```

Set an element with full touch manipulation, `x` and `y` panning is enabled.

<y class="my-2 mx-auto w-48 h-48 touch-manipulation overflow-auto overscroll-contain">
  <y class="m-1 w-64 h-64">
    <img class=""
         src="https://picsum.photos/800?=1">
  </y>
</y>

```html
<!-- Example -->
<y class="touch-manipulation ... overflow-scroll overscroll-contain">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for touchaction in variants.touchaction %}{% for item in touchaction.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


