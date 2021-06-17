---
id: gradientsoverview
title: Introduction of Gradient Presets Utilties
description: Utilities for sets the gradient preset diagonally to an element.
topic: Getting Started > Features
relate: bg-gradient
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Gradients
</y>

Utilities for sets the gradient preset diagonally to an element. Find more about the usage at [Gradient](/gradient/).

---

<y class="(group) flex flex-gap-8 flex-wrap justify-between items-stretch rounded-lg cursor-pointer">{% for data in gradient.presets %}{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-24 h-24 {{ item.class }} rounded-full shadow-dreamy-sm border-8 border-gray-100 (group-hover)border-gray-800 transition duration-100 ease-in-out"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.title }}</y></y>{% endfor %}{% endfor %}</y>

---

## Overlay with Image

<y class="mt-4 mb-5 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <y class="flex items-center">
    Press
    <y class="mx-1 px-1 py-0 border border-gray-400 rounded">
      CTRL
    </y>
    <y>+</y>
    <y class="mx-1 px-1 py-0 border border-gray-400 rounded">
      SHIFT
    </y>
    <y>+</y>
    <y class="mx-1 px-1 py-0 border border-gray-400 rounded">
      R
    </y>
		to change the image samples.
  </y>
</y>

<y class="(group) flex flex-gap-4 flex-wrap justify-between items-stretch">{% for data in gradient.presets %}{% for item in data.items %}<y class="relative (group) w-56 bg-gray-100 rounded-lg shadow-dreamy-sm transition duration-100 ease-in-out transform (xs)(group-hover)scale-100 (sm)(group-hover)scale-110 (md)(group-hover)scale-110 (lg)(group-hover)scale-110 cursor-pointer select-none"><y class="z-10 absolute top-0 left-0"><y class="{{ item.class }} filter-saturate-5 w-56 h-56 opacity-75 (group-hover)opacity-0 transition duration-100 ease-in-out rounded-md"></y></y><img class="w-56 h-56 object-cover object-center overflow-hidden rounded-md" src="https://picsum.photos/500?random=1" alt="{{ item.title }}"><y class="absolute top-2 left-2 h-10 w-10 {{ item.class }} rounded-full shadow-dreamy-md"></y><y class="z-20 absolute bottom-2 left-2 flex justify-center items-center px-4 h-8 font-default (xs)text-sm (sm)text-sm (md)text-sm (lg)text-sm font-mono text-center text-gray-100 (group-hover)text-charcoal-100 bg-charcoal-600 (group-hover)bg-gray-100 rounded-full shadow-dreamy-sm">{{ item.title }}</y></y>{% endfor %}{% endfor %}</y>

---

## Color Enhancement

Saturate the gradient with `filter` utilities. Find more about the usage [Saturate](/filter-saturate/), [Contrast](/filter-contrast) and [Brightness](/filter-brightness).

```html
<!-- Example -->
<y class="gradient-above-the-sky ... h-32 h-32 ... filter saturate-5">
  ...
</y>
```

---

{% include "button-getting-started.njk" %}