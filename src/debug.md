---
id: debug
title: Debug
description: Utilities for inspect errors in spacing and overlapping elements.
layout: default
---

> Debug

# Debugger <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.1.0</span>

Utilities for inspect errors in spacing and overlapping elements.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">attribute</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| debug="true" | background: rgba(255, 0, 0, 0.1); <br> box-shadow: 0 0 0 1px red |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

<y class="px-4 my-2 mx-auto w-64"
   debug="true">
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

Apply debugger to `<html>` tag.

```html
<!-- Example -->
<html debug="true">
  ...
</html>
```

Apply debugger to `<body>` tag.

```html
<!-- Example -->
<body debug="true">
  ...
</body>
```

Apply debugger to almost any elements.

```html
<!-- Example -->
<y debug="true">
  ...
</y>

<span debug="true">
  ...
</span>
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