---
id: overscroll
title: Overscroll
description: Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.
layout: default
---

> Interactivity

# Overscroll <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| overscroll-auto | overscroll-behavior: auto |
| overscroll-contain | overscroll-behavior: contain |
| overscroll-none | overscroll-behavior: none |
| overscroll-x-auto | overscroll-behavior-x: auto |
| overscroll-x-contain | overscroll-behavior-x: contain |
| overscroll-x-none | overscroll-behavior-x: none |
| overscroll-y-auto | overscroll-behavior-y: auto |
| overscroll-y-contain | overscroll-behavior-y: contain |
| overscroll-y-none | overscroll-behavior-y: none |

<style>
.supports {
  display: block
}
@supports (overscroll-behavior: contain) {
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

<y class="mt-2 mb-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set an scrollable element that won't affecting the parent scrollable element. This will disable the browser default `scroll chaining` feature to improve user experience.

An example of an element on the left without the `overscroll` utility applied. When you scroll to the long text till the end, the whole page will continue to scroll. But the element on the right will not.

<y class="px-4 mt-2 mb-6 mx-auto (xs)max-w-full (sm)max-w-lg (md)max-w-lg (lg)max-w-lg h-64">
  <y class="flex">
    <y class="m-4">
      <y class="w-32 h-56 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 overflow-y-scroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus.
      </y>
      <y class="pt-2 text-sm text-center">
        Overscroll: OFF
      </y>
    </y>
    <y class="m-4">
      <y class="w-32 h-56 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 overscroll-contain overflow-y-scroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus.
      </y>
      <y class="pt-2 text-sm text-center">
        Overscroll: ON
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="overscroll-contain">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |
