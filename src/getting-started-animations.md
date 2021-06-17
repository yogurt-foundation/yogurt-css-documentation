---
id: animationsoverview
title: Introduction of Animations Utilities
description:
topic: Getting Started > Features
relate:
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Animations
</y>

Utilities for sets the animation control with [delays](/animation-delay/), [Duration](/animation-duration/) and [Looping](/animation-looping/) with [Fade](/animation-fade/), [Roll](/animation-roll/), [Slide](/animation-slide/) and [Blur](/animation-blur/) animation utilities.

---

<y class="flex flex-gap-8 flex-wrap justify-around items-stretch">{% for data in animation.presets %}{% for item in data.items %}<y class="flex flex-col justify-center items-center"><y class="flex justify-center items-center bg-gray-200 (dark)bg-gray-700 border border-gray-300 (dark)border-gray-600 rounded-lg w-20 h-20 overflow-hidden"><y class="animation {{ item.class }} w-8 h-8 bg-gray-400 rounded-full"></y></y><y class="pt-3 text-sm text-gray-600 font-mono gap-tight">{{ item.title }}</y></y>{% endfor %}{% endfor %}</y>

---

{% include "button-getting-started.njk" %}