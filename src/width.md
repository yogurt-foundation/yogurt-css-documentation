---
id: width
title: Width
description: Utilities for sets the width of an element.
layout: default
---

> Sizing

# Width

Utilities for sets the width of an element.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| w-0 | width: 0 |
| w-1 | width: 0.25rem |
| w-2 | width: 0.5rem |
| w-3 | width: 0.75rem |
| w-4 | width: 1rem |
| w-5 | width: 1.25rem |
| w-6 | width: 1.5rem |
| w-8 | width: 2rem |
| w-10 | width: 2.5rem |
| w-12 | width: 3rem |
| w-16 | width: 4rem |
| w-20 | width: 5rem |
| w-24 | width: 6rem |
| w-32 | width: 8rem |
| w-40 | width: 10rem |
| w-48 | width: 12rem |
| w-56 | width: 14rem |
| w-64 | width: 16rem |
| w-auto | width: auto |
| w-px | width: 1px |
| w-1/2 | width: 50% |
| w-1/3 | width: 33.333333% |
| w-2/3 | width: 66.666667% |
| w-1/4 | width: 25% |
| w-2/4 | width: 50% |
| w-3/4 | width: 75% |
| w-1/5 | width: 20% |
| w-2/5 | width: 40% |
| w-3/5 | width: 60% |
| w-4/5 | width: 80% |
| w-1/6 | width: 16.666667% |
| w-2/6 | width: 33.333333% |
| w-3/6 | width: 50% |
| w-4/6 | width: 66.666667% |
| w-5/6 | width: 83.333333% |
| w-1/12 | width: 8.333333% |
| w-2/12 | width: 16.666667% |
| w-3/12 | width: 25% |
| w-4/12 | width: 33.333333% |
| w-5/12 | width: 41.666667% |
| w-6/12 | width: 50% |
| w-7/12 | width: 58.333333% |
| w-8/12 | width: 66.666667% |
| w-9/12 | width: 75% |
| w-10/12 | width: 83.333333% |
| w-11/12 | width: 91.666667% |
| w-full | width: 100% |
| w-screen | width: 100vw |

---

## Usage

Set basic width to an element.

```html
<!-- Example -->
<y class="w-4">
  ...
</y>
```

Set full width to an element.

```html
<!-- Example -->
<y class="w-full">
  ...
</y>
```

Set full width in viewport screen to an element.

```html
<!-- Example -->
<y class="w-screen">
  ...
</y>
```

Set 2-column width `1/2` to an element companion with `flex` utility (See [Flex](/flex/)).

<y class="p-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/2 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/2 h-16 bg-gray-500 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/2">
    ...
  </y>
  <y class="w-1/2">
    ...
  </y>
</y>
```

Set 3-column width `1/3` to an element.

<y class="py-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/3 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/3 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/3 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/3">
    ...
  </y>
  <y class="w-1/3">
    ...
  </y>
  <y class="w-1/3">
    ...
  </y>
</y>
```

...mixed 3-column widths.

```html
<!-- Example -->
<y class="flex">
  <y class="w-2/3">
    ...
  </y>
  <y class="w-1/3">
    ...
  </y>
</y>
```

Set 4-column width `1/4` to an element.

<y class="py-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/4 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/4 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/4 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
  <y class="w-1/4 h-16 text-gray-100 bg-gray-700 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/4"> ... </y>
  <y class="w-1/4"> ... </y>
  <y class="w-1/4"> ... </y>
  <y class="w-1/4"> ... </y>
</y>
```

...mixed 4-column widths.

```html
<!-- Example -->
<y class="flex">
  <y class="w-2/4"> ... </y>
  <y class="w-3/4"> ... </y>
</y>
```

Set 5-column width `1/5` to an element.

<y class="py-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/5 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/5 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/5 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
  <y class="w-1/5 h-16 text-gray-100 bg-gray-700 flex justify-center items-center"></y>
  <y class="w-1/5 h-16 text-gray-100 bg-gray-800 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/5"> ... </y>
  <y class="w-1/5"> ... </y>
  <y class="w-1/5"> ... </y>
  <y class="w-1/5"> ... </y>
  <y class="w-1/5"> ... </y>
</y>
```

...mixed 5-column widths.

```html
<!-- Example -->
<y class="flex">
  <y class="w-3/5"> ... </y>
  <y class="w-2/5"> ... </y>
</y>
```

Set 6-column width `1/6` to an element.

<y class="py-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/6 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/6 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/6 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
  <y class="w-1/6 h-16 text-gray-100 bg-gray-700 flex justify-center items-center"></y>
  <y class="w-1/6 h-16 text-gray-100 bg-gray-800 flex justify-center items-center"></y>
  <y class="w-1/6 h-16 text-gray-100 bg-gray-900 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/6"> ... </y>
  <y class="w-1/6"> ... </y>
  <y class="w-1/6"> ... </y>
  <y class="w-1/6"> ... </y>
  <y class="w-1/6"> ... </y>
  <y class="w-1/6"> ... </y>
</y>
```

...mixed 6-column widths.

```html
<!-- Example -->
<y class="flex">
  <y class="w-4/6"> ... </y>
  <y class="w-2/6"> ... </y>
</y>
```

Set 12-column width `1/12` to an element.

<y class="py-4 my-4 mx-auto w-64 bg-gray-300 flex">
  <y class="w-1/12 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-700 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-800 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-900 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 bg-gray-400 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 bg-gray-500 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-600 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-700 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-800 flex justify-center items-center"></y>
  <y class="w-1/12 h-16 text-gray-100 bg-gray-900 flex justify-center items-center"></y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
  <y class="w-1/12"> ... </y>
</y>
```

...mixed 12-column widths.

```html
<!-- Example -->
<y class="flex">
  <y class="w-4/12"> ... </y>
  <y class="w-6/12"> ... </y>
  <y class="w-2/12"> ... </y>
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'w',
    //variant: 'responsive',
    property: 'width',
    modifier: (
      '..': '...',
      '..': '...'
      ...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| Dark Theme | | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |