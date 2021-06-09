---
id: transition-duration
title: Transition Duration
description: Utilities for sets the length of time for a transition animations to complete.
relate: transition-property, transition-timing
topic: Transitions
layout: default
---

> Transitions

# Transition Duration

Utilities for sets the length of time for a transition animations to complete.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| duration-75 | transition-duration: 75ms |
| duration-100 | transition-duration: 100ms |
| duration-150 | transition-duration: 150ms |
| duration-200 | transition-duration: 200ms |
| duration-300 | transition-duration: 300ms |
| duration-500 | transition-duration: 500ms |
| duration-700 | transition-duration: 700ms |
| duration-1000 | transition-duration: 1000ms |

---

## Usage

Set basic [Transition](/transition-property/) with [Duration](/transition-duration/) and [Timing](/transition-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

Set transition duration `75ms` to an element.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-75 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-75
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-75 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `100ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-100 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-100
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-100 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```
Set transition duration `150ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-150 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-150
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-150 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `200ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-200 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-200
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-200 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `300ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-300
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-300 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `500ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-500 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-500
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-500 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `1000ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-1000 ease-in-out (hover)shadow-lg cursor-pointer">
  	Hover duration-1000
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-1000 ease-in-out ... (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'duration',
  $property: transition-duration,
  $modifier: (
    100: 100ms,
    200: 200ms
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transitionduration in variants.transitionduration %}{% for item in transitionduration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


