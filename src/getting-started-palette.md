---
id: paletteoverview
title: Introduction of Color Palette
description: Utilities for sets color to other utilties such as text, background, border, placeholder and dissect.
topic: Getting Started > Features
relate: text-color, bg-color, border-color, placeholder-color, dissect-color
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Color Palette
</y>

Utilities for sets color to other utilties such as [text](/text-color/), [background](/background-color/), [border](/border-color/), [placeholder](/placeholder-color/) and [dissect](/dissect-color/).

---

<!-- amber -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.amber %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- black -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.black %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- blue -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.blue %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- charcoal -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.charcoal %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- gray -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.gray %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- green -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.green %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- indigo -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.indigo %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- khaki -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.khaki %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- nero -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.nero %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- orange -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.orange %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- pink -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.pink %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- purple -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.purple %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- red -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.red %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

<!-- teal -->

<y class="(group) flex flex-gap-2 flex-wrap justify-between items-center">{% for data in palettes.teal %}<y class="mr-4 text-3xl font-mono font-semibold text-gray-600">{{ data.label }}</y><y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-10 h-10 {{ item.class }} rounded-md shadow-dreamy-sm"></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.modifier }}</y></y>{% endfor %}</y>{% endfor %}</y>

---

## Color Enhancement

Saturate the gradient with `filter` utilities. Find more about the usage [Saturate](/filter-saturate/), [Contrast](/filter-contrast) and [Brightness](/filter-brightness).

```html
<!-- Example `Text Color` -->
<y class="text-teal-400 ... filter saturate-5">
  ...
</y>

<!-- Example `Background Color` -->
<y class="bg-teal-400 ... w-24 h-24 ... filter saturate-5">
  ...
</y>
```

<y class="mt-16 mx-auto max-w-sm">
  <a
    class="px-10 py-3 appearance-none (focus)outline-none text-md text-gray-800 (hover)text-gray-100 bg-gray-200 (hover)bg-gray-800 border-4 border-gray-300 (hover)border-gray-800 (focus)border-gray-800 rounded-lg transition duration-300 ease-in-out"
    href="/getting-started/"
    target="_self"
    rel="noopener"
  >
    Back to
    <span class="font-semibold">
      Gettings Started
    </span>
  </a>
</y>