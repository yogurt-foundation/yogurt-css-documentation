---
id: counter
title: Counter
description: Utilities for sets automatically counter to an element can be grouped separately with a counter reset option.
topic: Typography
layout: default
---

> Typography

# Counter <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets automatically counter to an element can be grouped separately with a counter reset option.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| counter `{options}` | counter-increment: lists; |
| counter-reset | counter-reset: lists, mini-step; |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| upper-alpha | content: counter(lists, upper-alpha); |
| lower-alpha | content: counter(lists, lower-alpha); |
| upper-roman | content: counter(lists, upper-roman); |
| lower-roman | content: counter(lists, lower-roman); |
| number | content: counter(lists, number); |

---

## Usage

<y class="px-4 my-8 mx-auto w-full h-32">
  <y class="counter-reset ... flex flex-gap-32 justify-start items-center">
    <y class="counter upper-roman ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
    <y class="counter upper-roman ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
    <y class="counter upper-roman ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
  </y>
</y>

<y class="px-4 my-8 mx-auto w-full h-32">
  <y class="counter-reset ... flex flex-gap-32 justify-start items-center">
    <y class="counter upper-alpha ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
    <y class="counter upper-alpha ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
    <y class="counter upper-alpha ... relative h-12 w-12 bg-gray-400 rounded-full flex justify-center items-center">
      <y class="absolute top-10 left-10 w-32 bg-gray-200 p-4 rounded-lg">
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
        <y>Lorem Ipsum</y>
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="counter-reset">
  <y class="counter upper-roman">
    <y>...</y>
    <y>...</y>
    <y>...</y>
  </y>
</y>

<!-- Example -->
<y class="counter-reset ... flex flex-gap-32">
  <y class="counter upper-roman ... relative ... h-12 w-12 bg-gray-400 rounded-full ... flex justify-center items-center">
    <y class="absolute top-10 left-10 ... w-32 p-4 bg-gray-200 rounded-lg">
      <y>...</y>
      <y>...</y>
      <y>...</y>
    </y>
  </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for counter in variants.counter %}{% for item in counter.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
