---
id: text-clamp
title: Text Clamp
description: Utilities for sets total display text line to an element.
layout: default
---

> Typography

# Text Clamp <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets total display text line to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| clamp-1 | display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| clamp-2 | display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| clamp-3 | display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| clamp-4 | display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |
| clamp-5 | display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; position: relative; visibility: visible |

<style>
.supports {
  display: block
}
@supports (-webkit-line-clamp: 1) {
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

<y class="mx-2 my-2 mx-auto flex flex-wrap">
  <y class="p-4 w-1/2">
    <y class="font-serif text-2xl">
      Clamp-1
    </y>
    <y class="text-sm depth-tight clamp-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </y>
  </y>
  <y class="p-4 w-1/2">
    <y class="font-serif text-2xl">
      Clamp-2
    </y>
    <y class="text-sm depth-tight clamp-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </y>
  </y>
  <y class="p-4 w-1/2">
    <y class="font-serif text-2xl">
      Clamp-3
    </y>
    <y class="text-sm depth-tight clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </y>
  </y>
  <y class="p-4 w-1/2">
    <y class="font-serif text-2xl">
      Clamp-4
    </y>
    <y class="text-sm depth-tight clamp-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="clamp-3 ... text-md depth-tight">
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