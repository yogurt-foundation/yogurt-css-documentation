---
id: transition-duration
title: Transition Duration
description: Utilities for sets the length of time for a transition animations to complete.
layout: default
---

> Transitions

# Transition Duration

Utilities for sets the length of time for a transition animations to complete.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| duration-75 | transition-duration: 75ms |
| duration-100 | transition-duration: 100ms |
| duration-150 | transition-duration: 150ms |
| duration-200 | transition-duration: 200ms |
| duration-300 | transition-duration: 300ms |
| duration-500 | transition-duration: 500ms |
| duration-700 | transition-duration: 700ms |
| duration-1000 | transition-duration: 1000ms |

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'duration',
  //variant: 'responsive',
  property: 'transition-duration',
  modifier: (
    '600': '...ms',
    '800': '...ms'
    ...
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |