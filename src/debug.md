---
id: debugger
title: Debugger
description: Utilities for inspecting screen sizes and errors in spacing or overlapping elements.
layout: default
---

> Debug

# Debugger <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.1.0</span>

Utilities for inspecting screen sizes and errors in spacing or overlapping elements.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">attribute</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| debug="outline" | background: rgba(255, 0, 0, 0.1); <br> box-shadow: 0 0 0 1px red |
| debug="screen" | @media (min-width: `{screen}`) { [debug="screen"]::after { content: "`{size}`" }} |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

### Debug Outline

<y class="px-4 -mt-4 mb-2 mx-auto w-64"
   debug="outline">
  <y class="px-4 h-32 bg-white rounded-lg">
    <y class="flex justify-between items-center transistion duration-300 ease-in-out transform hover:-rotate-45 hover:-translate-x-6 cursor-pointer">
      <y class="w-20">
        <y class="w-20 h-20 rounded-full"></y>
      </y>
      <y class="px-2 flex flex-wrap text-red-800">
        <y class="text-lg truncate">
          Lorem Ipsum
        </y>
        <y class="text-sm truncate">
          Lorem Ipsum
        </y>
      </y>
    </y>
  </y>
</y>

Apply `debug="outline"` to `<html>` tag.

```html
<!-- Example -->
<html debug="outline">
  ...
</html>
```

Apply `debug="outline"` to `<body>` tag.

```html
<!-- Example -->
<body debug="outline">
  ...
</body>
```

Apply `debug="outline"` to almost any elements.

```html
<!-- Example -->
<y debug="outline"> ... </y>
<span debug="outline"> ... </span>
```

### Debug Screen

<y class="xs:ml-4 lg:-ml-6 -mt-16"
   debug="screen"></y>

Apply `debug="screen"` to inspect the current screen size. The indicator will display at top-left of the browser viewport.

```html
<!-- Example -->
<y debug="screen"></y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |