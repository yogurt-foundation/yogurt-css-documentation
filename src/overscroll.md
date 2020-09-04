---
id: overscroll
title: Overscroll
description: Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.
layout: default
---

> Layouts

# Overscroll <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.1.0</span>

Utilities for sets an scrollable element that won't affecting the parent scrollable element on touch device.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| overscroll-auto | overscroll-behaviour: auto |
| overscroll-contain | overscroll-behaviour: contain |
| overscroll-none | overscroll-behaviour: none |
| overscroll-x-auto | overscroll-behaviour-x: auto |
| overscroll-x-contain | overscroll-behaviour-x: contain |
| overscroll-x-none | overscroll-behaviour-x: none |
| overscroll-y-auto | overscroll-behaviour-y: auto |
| overscroll-y-contain | overscroll-behaviour-y: contain |
| overscroll-y-none | overscroll-behaviour-y: none |

---

## Usage

Set an scrollable element that won't affecting the parent scrollable element. This will disable the browser default `scroll chaining` feature to improve user experience.

An example of an element on the left without the `overscroll` utility applied. When you scroll to the long text till the end, the whole page will continue to scroll. But the element on the right will not.

<y class="px-4 mt-2 mb-6 mx-auto xs:max-w-full sm:max-w-lg md:max-w-lg lg:max-w-lg h-64">
  <y class="flex">
    <y class="m-4">
      <y class="w-32 h-56 bg-gray-300 overflow-scroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ducimus eum debitis. Magni, officiis numquam recusandae deserunt et maiores molestias quod laudantium. Natus, unde veniam hic labore voluptatibus aliquam ducimus.
      </y>
      <y class="pt-2 text-sm text-center">
        Overscroll: OFF
      </y>
    </y>
    <y class="m-4">
      <y class="w-32 h-56 bg-gray-300 overscroll-contain overflow-scroll">
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
| active | | |
| visited | | |
| disabled | | |
