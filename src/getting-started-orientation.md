---
id: orientationoverview
title: Introduction of Orientation Variants
description: Utilities to sets screen orientation with other utilities.
topic: Getting Started > Features
relate: pseudo-class-variants, flex-direction
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Orientation
</y>

Utilities to sets screen orientation with other utilities such as [flex-direction](/flex-direction/). Find more about the usage [Pseudo-Class Variants](http://localhost:8080/pseudo-class-variants/#orientation).

---

<y class="flex flex-wrap justify-between items-stretch">
  <y class="relative h-80 w-72 bg-gray-200 border border-gray-400 rounded-lg">
    <y class="absolute top-4 left-5 flex flex-col flex-gap-4 flex-wrap">
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
    </y>
    <y class="absolute top-4 right-5">
      <y class="text-md font-mono">
        (portrait)flex-col
      </y>
    </y>
    <y class="absolute bottom-4 left-5">
      <y class="text-2xl font-mono gap-tight">
        Portrait
      </y>
      <y class="text-sm">
        @media (orientation: portrait){...}
      </y>
    </y>
  </y>
  <y class="relative h-72 w-96 bg-gray-200 border border-gray-400 rounded-lg">
    <y class="absolute top-4 left-5 flex flex-row flex-gap-4 flex-wrap">
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
      <y class="h-12 w-12 bg-orange-300 border border-orange-400 rounded"></y>
    </y>
    <y class="absolute top-24 left-5">
      <y class="text-md font-mono">
        (landscape)flex-row
      </y>
    </y>
    <y class="absolute bottom-4 left-5">
      <y class="text-2xl font-mono gap-tight">
        Landscape
      </y>
      <y class="text-sm">
        @media (orientation: landscape){...}
      </y>
    </y>
  </y>
</y>

---

Set `flex-direction` to arrange containing items in a `column` when screen orientation set to `portrait`.

```html
<!-- Example -->
<y class="flex (portrait)flex-col">
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

Set `flex-direction` to arrange containing items in a `row` when screen orientation set to `landscape`.

```html
<!-- Example -->
<y class="flex (landscape)flex-row">
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

---

{% include "button-getting-started.njk" %}