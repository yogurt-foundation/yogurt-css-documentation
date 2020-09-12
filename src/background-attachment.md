---
id: background-attachment
title: Background Attachment
description: Utilities for sets behaviour of background images when scrolling.
layout: default
---

> Backgrounds

# Background Attachment

Utilities for sets behaviour of background images when scrolling.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-fixed | background-attachment: fixed |
| bg-local | background-attachment: local |
| bg-scroll | background-attachment: scroll |

---

## Usage

Set fixed background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<y class="my-2 mx-auto max-w-sm bg-red-300">
  <y class="h-32 w-full overflow-y-scroll">
    <y class="h-64 w-64 bg-fixed"
       style="background-image:url(https://picsum.photos/300?=1)"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="bg-fixed ... w-56 h-24 overflow-y-scroll"
   style="background-image:url(...)"></y>
```

Set a scrollable background image in the browser viewport and the element container.

<y class="my-2 mx-auto max-w-sm bg-red-300">
  <y class="h-32 w-full overflow-y-scroll">
    <y class="h-64 w-64 bg-local"
       style="background-image:url(https://picsum.photos/300?=1)"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="bg-local ... w-56 h-24 overflow-y-scroll"
   style="background-image:url(...)"></y>
```

Set a scrollable background image in the browser viewport.

<y class="my-2 mx-auto max-w-sm bg-red-300">
  <y class="h-32 w-full overflow-y-scroll">
    <y class="h-64 w-64 bg-scroll"
       style="background-image:url(https://picsum.photos/300?=1)"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="bg-scroll ... w-56 h-24 overflow-y-scroll"
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
| active | | |
| visited | | |
| disabled | | |