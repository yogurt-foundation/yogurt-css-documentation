---
id: border-width
title: Border Width
description: Utilities for sets border width in increments of 1px.
layout: default
---

> Borders

# Border Width

Utilities for sets border width in increments of 1px.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| border | border-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-gray-900"></y> |
| border-0 | border-width: 0 | <y class="w-16 h-8 bg-gray-300 border-0 border-gray-900"></y> |
| border-2 | border-width: 2px | <y class="w-16 h-8 bg-gray-300 border-2 border-gray-900"></y> |
| border-4 | border-width: 4px | <y class="w-16 h-8 bg-gray-300 border-4 border-gray-900"></y> |
| border-8 | border-width: 8px | <y class="w-16 h-8 bg-gray-300 border-8 border-gray-900"></y> |
| border-t | border-top-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-t border-gray-900"></y> |
| border-r | border-right-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-r border-gray-900"></y> |
| border-b | border-bottom-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-b border-gray-900"></y> |
| border-l | border-left-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-l border-gray-900"></y> |
| border-t-0 | border-top-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-t-0 border-gray-900"></y> |
| border-r-0 | border-right-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-r-0 border-gray-900"></y> |
| border-b-0 | border-bottom-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-b-0 border-gray-900"></y> |
| border-l-0 | border-left-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-l-0 border-gray-900"></y> |
| border-t-2 | border-top-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-t-2 border-gray-900"></y> |
| border-r-2 | border-right-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-r-2 border-gray-900"></y> |
| border-b-2 | border-bottom-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-b-2 border-gray-900"></y> |
| border-l-2 | border-left-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-l-2 border-gray-900"></y> |
| border-t-4 | border-top-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-t-4 border-gray-900"></y> |
| border-r-4 | border-right-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-r-4 border-gray-900"></y> |
| border-b-4 | border-bottom-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-b-4 border-gray-900"></y> |
| border-l-4 | border-left-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-l-4 border-gray-900"></y> |
| border-t-8 | border-top-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-t-8 border-gray-900"></y> |
| border-r-8 | border-right-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-r-8 border-gray-900"></y> |
| border-b-8 | border-bottom-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-b-8 border-gray-900"></y> |
| border-l-8 | border-left-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-l-8 border-gray-900"></y> |

---

## Usage

<y class="px-4 my-2 mx-auto w-56">
  <y class="p-4 bg-gray-400 border-8">
    <y class="w-full h-24 bg-gray-500"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="border-8">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'border',
    //variant: 'responsive',
    property: 'border',
    modifier: (
      '10': '...px',
      '12': '...px'
      ...
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
| focus | Yes | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |