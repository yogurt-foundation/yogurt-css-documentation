---
id: gradientsoverview
title: Introduction of Gradient Presets
description: Utilities for sets the gradient preset diagonally to an element.
topic: Getting Started > Features
relate:
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Gradients
</y>

Utilities for sets the gradient preset diagonally to an element.

<y class="(group) flex flex-gap-8 flex-wrap justify-between items-stretch rounded-lg cursor-pointer">{% for data in gradient.presets %}{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="w-24 h-24 {{ item.class }} rounded-full shadow-dreamy-sm shadow-dreamy-sm border-8 border-gray-100 (group-hover)border-gray-800 transition duration-100 ease-in-out"></y><y class="pt-3 text-sm font-mono gap-tight">{{ item.title }}</y></y>{% endfor %}{% endfor %}</y>

<y class="mt-16 mx-auto max-w-sm">
  <a class="px-10 py-3 appearance-none (focus)outline-none text-md text-gray-800 (hover)text-gray-100 bg-gray-200 (hover)bg-gray-800 border-4 border-gray-300 (hover)border-gray-800 (focus)border-gray-800 rounded-lg transition duration-300 ease-in-out"
     href="/getting-started/"
     target="_self"
     rel="noopener">
    Back to
    <span class="font-semibold">
      Gettings Started
    </span>
  </a>
</y>