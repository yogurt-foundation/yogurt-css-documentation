---
id: line-style-type
title: List Style Type
description: Utilities for sets the bullet style of a list.
topic: Typography
layout: default
---

> Typography

# List Style Type

Utilities for sets the bullet style of a list.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| list-none | list-style-type: none |
| list-disc | list-style-type: disc |
| list-decimal | list-style-type: decimal |

---

## Usage

<y class="my-2 mx-auto max-w-md">
  <y class="flex">
    <y class="mx-2 pl-0 pr-10 py-4 bg-gray-300">
      <ul class="">
        <y class="pb-1">
          1. Lorem ipsum
        </y>
        <y class="pb-1">
          2. Lorem ipsum
        </y>
        <y class="pb-1">
          3. Lorem ipsum
        </y>
      </ul>
    </y>
    <y class="mx-2 pl-4 pr-10 py-4 bg-gray-300">
      <ul class="list-disc">
        <li>
          Lorem ipsum
        </li>
        <li>
          Lorem ipsum
        </li>
        <li>
          Lorem ipsum
        </li>
      </ul>
    </y>
  </y>
</y>

```html
<!-- Example -->
<ul class="list-disc">
  <li>
    ...
  </li>
  ...
</ul>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for liststyletype in variants.liststyletype %}{% for item in liststyletype.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).