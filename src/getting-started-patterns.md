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

{% include "button-getting-started.njk" %}