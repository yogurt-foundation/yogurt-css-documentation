---
id: animation-loop
title: Animation Loop
description: Utilities for sets the animation control with limited loop or infinite.
layout: default
---

> Animations

# Animation Loop <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for sets the animation control with limited loop or infinite.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|:-:|
| loop-2 | animation-iteration-count: 2 |
| loop-3 | animation-iteration-count: 3 |
| loop-4 | animation-iteration-count: 4 |
| loop-5 | animation-iteration-count: 5|
| loop-infinite | animation-iteration-count: infinite |

---

## Usage

```html
<!-- Example -->
<y class="animation blur-in loop-infinite">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'animation.loop-',
    //variant: 'responsive',
    property: 'animation-iteration-count',
    modifier: (
      '10': '10',
      '20': '20'
      //...
    )
  )
)
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
| checked | | |
| disabled | | |