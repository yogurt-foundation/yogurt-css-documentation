---
id: patternoverview
title: Introduction of Patterns Utilities
description: Utilities for sets an element's background filled with patterns.
topic: Getting Started > Features
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Patterns
</y>

Utilities for sets an element's background filled with patterns. Find more about the usage of patterns: [Checks](/pattern-checks/), [Circle](/pattern-circle/), [Cross Dots](/pattern-cross-dots/), [Diagonal Lines](/pattern-diagonal-lines/), [Diagonal Stripes](/pattern-diagonal-stripes/), [Dots](/pattern-dots/), [Grid](/pattern-grid/), [Horizontal Lines](/pattern-horizontal-lines/), [Horizontal Stripes](/pattern-horizontal-stripes/), [Rhombus](/pattern-rhombus/), [Ripple](/pattern-ripple/), [Triangles](/pattern-triangles/), [Vertical Lines](/pattern-vertical-lines/), [Vertical Stripes](/pattern-vertical-stripes/), [Zigzag](/pattern-zigzag/).

---

{% for data in patterns.cssdrawing %}<y class="flex flex-gap-4 flex-wrap justify-between items-stretch opacity-75 text-teal-700">{% for item in data.items %}<y class="text-center"><y class="pattern {{ item.class }} h-32 w-40"></y><y class="pt-4 font-mono text-gray-600">{{ item.title }}</y></y>{% endfor %}</y>{% endfor %}

---

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