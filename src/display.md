---
id: display
title: Display
description: Utilities for sets the display box type of an element.
category: Layouts
variant: responsive, hover, group-hover
layout: default
---

> Layouts

# Display

Utilities for sets the display box type of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| block | display: block |
| hidden | display: none |
| inline | display: inline |
| inline-block | display: inline-block |
| flex | display: flex |
| inline-flex | display: inline-flex |
| table | display: table |
| table-caption <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-caption |
| table-cell | display: table-cell |
| table-row | display: table-row |
| table-row-(group) <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-row-(group) |
| table-column <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-column |
| table-column-(group) <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-column-(group) |
| table-header-(group) <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-header-(group) |
| table-footer-(group) <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span> | display: table-footer-(group) |

---

## Usage

Set a block element that starts on a new line and takes up the full width.

<y class="p-4 my-2 mx-auto w-64 bg-gray-400">
  <y class="flex bg-gray-600">
    <span class="block py-2 w-full bg-gray-500 text-center text-gray-600">
      1
    </span>
    <span class="block py-2 w-full bg-gray-600 text-center text-gray-100">
      2
    </span>
    <span class="block py-2 w-full bg-gray-500 text-center text-gray-600">
      3
    </span>
  </y>
</y>

```html
<!-- Example -->
<span class="block">
  ...
</span>
```

Set the completely removed element.

<y class="p-4 my-2 mx-auto w-64 bg-gray-400">
  <y class="flex bg-red-300">
    <y class="block py-2 w-full bg-gray-500 text-center text-gray-600">
      1
    </y>
    <y class="hidden py-2 w-full bg-gray-500 text-center text-gray-100">
      2
    </y>
    <y class="block py-2 w-full bg-gray-500 text-center text-gray-600">
      3
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="block">
  ...
</y>
<y class="hidden">
  ...
</y>
<y class="block">
  ...
</y>
```

Set an element as an inline. Any height and width properties will have no effect.

<y class="p-4 my-2 mx-auto w-64 bg-gray-400">
  <y class="bg-gray-600">
    <y class="inline-block m-2 px-4 py-2 bg-gray-500 text-gray-600">1</y>
    <y class="inline-block m-2 px-4 py-2 bg-gray-500 text-gray-600">2</y>
    <y class="inline-block m-2 px-4 py-2 bg-gray-500 text-gray-600">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="inline-block">
  ...
</y>
```

Set an element as a block-level flex container.

<y class="p-4 my-2 mx-auto w-64 bg-gray-400">
  <y class="flex bg-gray-600">
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">1</y>
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">2</y>
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="flex">
  <y> ... </y>
  <y> ... </y>
</y>
```

Set an element as an inline-level flex container.

<y class="p-4 my-2 mx-auto w-64 bg-gray-400">
  <y class="inline-flex bg-gray-600">
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">1</y>
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">2</y>
    <y class="w-full m-2 px-4 py-2 bg-gray-500 text-gray-100 text-center">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="inline-flex">
  <y> ... </y>
  <y> ... </y>
</y>
```

Set a complete set of table with `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, and `table-footer-group` utilities.

<y class="p-4 my-2 mx-auto max-w-lg bg-gray-400">
  <y class="table w-full">
    <y class="table-row-group">
      <y class="table-row">
        <y class="table-cell bg-gray-500 text-gray-700 px-4 py-2 text-sm">
          Row-1 Cell-1
        </y>
        <y class="table-cell bg-gray-300 text-gray-700 px-4 py-2 text-sm">
          Row-1 Cell-2
        </y>
      </y>
      <y class="table-row">
        <y class="table-cell bg-gray-300 text-gray-700 px-4 py-2 text-sm">
          Row-2 Cell-1
        </y>
        <y class="table-cell bg-gray-500 text-gray-700 px-4 py-2 text-sm">
          Row-2 Cell-2
        </y>
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="table w-full">
  <y class="table-row-group">
    <y class="table-row">
      <y class="table-cell">
        ...
      </y>
      <y class="table-cell">
        ...
      </y>
    </y>
    <y class="table-row">
      <y class="table-cell">
        ...
      </y>
      <y class="table-cell">
        ...
      </y>
    </y>
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for display in variants.display %}{% for item in display.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).