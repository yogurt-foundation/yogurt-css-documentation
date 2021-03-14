---
id: writing-mode
title: Writing Mode
description: Utilities for sets alignment of the text horizontally, vertically, or which direction depending on the language.
layout: default
---

> Typography

# Writing Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for sets alignment of the text horizontally, vertically, or which direction depending on the language.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| text-horizontal | writing-mode: horizontal-tb |
| text-vertical-left | writing-mode: vertical-lr |
| text-vertical-right | writing-mode: vertical-rl |

<style>
.supports {
  display: block
}
@supports (writing-mode: vertical-rl) {
  .supports {
    display: none
  }
}
</style>

<y class="supports mt-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

---

## Usage

Set text element alignment to `vertically` and `left to right` direction.

<y class="my-2 mx-auto max-w-md h-40 flex flex-wrap justify-center items-start">
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-left">
    <span class="bg-red-400">ほえほふ</span>さ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
  </y>
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-left">
    <span class="bg-red-400">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
  </y>
  <y class="(xs)hidden (lg)block m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-left">
    <span class="bg-red-400">統微代一</span>月機隊転紹位責講行見三情川記手。手反者記来変動評歩沖氏波込度年容走。購
  </y>
</y>

```html
<!-- Example -->
<y class="text-vertical-left">
  ...
</y>
```

Set text element alignment to `vertically` and `right to left` direction.

<y class="my-2 mx-auto max-w-md h-40 flex flex-wrap justify-center items-start">
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-right">
    <span class="bg-red-400">ほえほ</span>ふさ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
  </y>
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-right">
    <span class="bg-red-400">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
  </y>
  <y class="(xs)hidden (lg)block m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-vertical-right">
    <span class="bg-red-400">統微代一</span>月機隊転紹位責講行見三情川記手。手反者記来変動評歩沖氏波込度年容走。購
  </y>
</y>

```html
<!-- Example -->
<y class="text-vertical-right">
  ...
</y>
```

Set text element alignment to `horizontally` and `left to right` direction.

<y class="my-2 mx-auto max-w-md h-40 flex flex-wrap justify-center items-start">
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-normal">
    <span class="bg-red-400">ほえほふ</span>さ鵜れま瀬瀬樹知保ゅ瀬留すし魔離ひいめは舳トシテム日御等樹等かの毛派ゅ
  </y>
  <y class="m-1 p-2 text-gray-900 (dark)text-gray-400 bg-gray-300 (dark)bg-gray-700 text-normal">
    <span class="bg-red-400">목숨이 산</span>야에 우리의 있는 현저하게 것이 쓸쓸하랴? 없는 끓는 바이며. 가는
  </y>
</y>

```html
<!-- Example -->
<y class="text-horizontal">
  ...
</y>
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
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |