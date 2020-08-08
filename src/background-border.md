---
id: background-border
title: Background Border
description: Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.
layout: default
---

> Background

## Background Border <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| bg-border | background-image: repeating-linear-gradient(var(--bg-border-angle-left), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-top), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-right), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-bottom), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)); <br><br> background-size: var(--bg-border-width) 100%, 100% var(--bg-border-width), var(--bg-border-width) 100%, 100% var(--bg-border-width); <br><br> background-position: 0 0, 0 0, 100% 0, 0 100%; <br> background-repeat: no-repeat |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| length-10 | --bg-border-length: 10 |
| length-20 | --bg-border-length: 20 |
| length-30 | --bg-border-length: 30 |
| length-40 | --bg-border-length: 40 |
| length-50 | --bg-border-length: 50 |
| length-60 | --bg-border-length: 60 |
| length-70 | --bg-border-length: 70 |
| length-80 | --bg-border-length: 80 |
| size-6 | --bg-border-size: 6px |
| size-9 | --bg-border-size: 9px |
| size-12 | --bg-border-size: 12px |
| size-14 | --bg-border-size: 14px |
| size-18 | --bg-border-size: 18px |
| size-24 | --bg-border-size: 24px |
| size-32 | --bg-border-size: 32px |
| space-10 | --bg-border-space: 10px |
| space-20 | --bg-border-space: 20px |
| space-30 | --bg-border-space: 30px |
| space-40 | --bg-border-space: 40px |
| space-50 | --bg-border-space: 50px |
| space-60 | --bg-border-space: 60px |
| space-70 | --bg-border-space: 70px |
| space-80 | --bg-border-space: 80px |
| angle-45 | --bg-border-angle: 45deg |
| -angle-45 | --bg-border-angle: -45deg |
| angle-60 | --bg-border-angle: 60deg |
| -angle-60 | --bg-border-angle: -60deg |

<y class="mx-4 my-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  To fill the background border color is using the
  <strong>
    text-{value}
  </strong> (See
  <a href="/text-color/#class">
    Text Color
  </a>.)
</y>

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |