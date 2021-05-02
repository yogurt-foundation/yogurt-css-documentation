---
id: transition-property
title: Transition Property
description: Utilities for sets the css properties affected by transition animations.
layout: default
---

> Transitions

# Transition Property

Utilities for sets the css properties affected by transition animations.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| transition | transition-property: all |
| transition-none | transition-property: none |
| transition-colors | transition-property: background-color, border-color, color, fill, stroke |
| transition-opacity | transition-property: opacity |
| transition-shadow | transition-property: box-shadow |
| transition-transform | transition-property: transform |

---

## Usage

Set basic transition with [Duration](/transition-duration/) and [Timing](/transform-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

An example of transitioning an element with [Border Width](/border-width/) and [Box Shadow](/box-shadow/) utilities.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-48 text-center text-gray-600 font-semibold bg-gray-400 transition duration-300 ease-in-out border-4 border-gray-400 (hover)border-gray-500 (hover)shadow-lg rounded-lg cursor-pointer">
  	Hover
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-300 ease-in-out border-4 border-gray-400 (hover)border-gray-500 (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transitionproperty in variants.transitionproperty %}{% for item in transitionproperty.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
