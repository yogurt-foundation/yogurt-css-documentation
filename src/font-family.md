---
id: font-family
title: Font Family
description: Utilities for sets the font family.
layout: default
---

> Typography

# Font Family

Utilities for sets the font family.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| font-default | font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif | <y class="px-2 text-lg font-default bg-white">Text</y> |
| font-sans | font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-sans bg-white">Text</y> |
| font-serif | font-family: Noto Serif, Droid Serif, Georgia, Cambria, Times New Roman, Times, serif | <y class="px-2 text-lg font-serif bg-white">Text</y> |
| font-mono | font-family: SF Mono, Consolas, Roboto Mono, Noto Mono, Droid Mono, Fira Mono, Ubuntu Mono, Oxygen Mono, Lucida Console, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace | <y class="px-2 text-lg font-mono bg-white">Text</y> |
| font-arabic | font-family: Arabic UI Display, Geeza Pro, Simplified Arabic, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-arabic bg-white">نص</y> |
| font-japanese | font-family: Meiryo, Yu Gothic, Hiragino Kaku Gothic Pro, Hiragino Sans, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-japanese bg-white">テキスト</y> |
| font-korean | font-family: Malgun Gothic, Apple SD Gothic Neo, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-korean bg-white">본문</y> |
| font-thai | font-family: Leelawadee, Thonburi, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-thai bg-white">ข้อความ</y> |
| font-chinese | font-family: Microsoft Yahei, PingFang SC, PingFang TC, Hiragino Sans, Hiragino Kaku Gothic Pro, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif | <y class="px-2 text-lg font-chinese bg-white">文本</y> |

---

## Usage

Set font family to an specific element.

```html
<!-- Example -->
<y class="font-default">
  ...
</y>
```

Set font family to `<body>` as default.

```html
<!-- Example -->
<body class="font-default">
  ...
</body>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'font',
  //$variant: 'responsive',
  $property: 'font-family',
  $modifier: (
    '...': '...',
    '...': '...'
    ...
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |