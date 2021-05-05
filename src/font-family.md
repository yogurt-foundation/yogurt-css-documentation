---
id: font-family
title: Font Family
description: Utilities for sets the font family and Google Fonts.
category: Typography
layout: default
---

> Typography

# Font Family

Utilities for sets the font family and Google Fonts.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
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

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'font',
  $property: font-family,
  $modifier: (
    noto: Noto Serif,
    droid: Droid Serif
    //...
  )
);
```

### Google Fonts <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

#### Embed Google Fonts

Use Yogurt dedicated API to embedding the Google Fonts in the framework without manually adding the line `@import url(...);`.

```scss
@include google-fonts(
  (
    font: 'Alata',
    weight: '400;500;800'
  )
  //...
);
```

The generated code look like below in your Yogurt CSS final build.

```css
/* @file: `dist/yogurt-{{ site.version.core }}_solidcore.css` */
@import url("https://fonts.googleapis.com/css2?family=Alata&:wght@400;500;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&:wght@400;500&display=swap");
```

To embed more than one Google Fonts.

```scss
@include google-fonts(
  (
    font: 'Alata',
    weight: '400;500;800'
  ),
  (
    font: 'Lato',
    weight: '400;500'
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontfamily in variants.fontfamily %}{% for item in fontfamily.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
