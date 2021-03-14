---
id: background-size
title: Background Size
description: Utilities for sets background size of a background image.
layout: default
---

> Backgrounds

# Background Size

Utilities for sets background size of a background image.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-auto | background-size: auto |
| bg-cover | background-size: cover |
| bg-contain | background-size: contain |

---

## Usage

Set default background image size with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-full bg-auto bg-center bg-no-repeat"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-auto ... bg-center bg-no-repeat ... h-48 w-full"
   style="background-image:url(...)"></y>
```

Set cropped and stretched background image to an element.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-full bg-cover bg-center bg-no-repeat"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-cover ... bg-center bg-no-repeat ... h-48 w-full"
   style="background-image:url(...)"></y>
```

Set background image contains an element with cropped and stretched.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-full bg-contain bg-center bg-no-repeat"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-contain ... bg-center bg-no-repeat ... h-48 w-full"
   style="background-image:url(...)"></y>
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