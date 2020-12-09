---
id: mix-blend
title: Mix Blend
description: Utilities for sets how an element's content should blend with its direct parent background.
layout: default
---

> Effects

# Mix Blend

Utilities for sets how an element's content should blend with its direct parent background.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| blend-normal | mix-blend-mode: normal |
| blend-multiply | mix-blend-mode: multiply |
| blend-screen | mix-blend-mode: screen |
| blend-overlay | mix-blend-mode: overlay |
| blend-darken | mix-blend-mode: darken |
| blend-lighten | mix-blend-mode: lighten |
| blend-color | mix-blend-mode: color |
| blend-color-dodge | mix-blend-mode: color-dodge |
| blend-color-burn | mix-blend-mode: color-burn |
| blend-hard-light | mix-blend-mode: hard-light |
| blend-soft-light | mix-blend-mode: soft-light |
| blend-difference | mix-blend-mode: difference |
| blend-exclusion | mix-blend-mode: exclusion |
| blend-hue | mix-blend-mode: hue |
| blend-saturation | mix-blend-mode: saturation |
| blend-luminosity | mix-blend-mode: luminosity |

---

## Usage

Mix blend with background colors.

<y class="px-4 my-2 mx-auto w-64">
  <y class="w-48 h-32 bg-amber-400 blend-darken"></y>
  <y class="-mt-24 ml-10 h-32 bg-khaki-400 blend-darken"></y>
</y>

```html
<!-- Example -->
<y class="...">
 <y class="blend-darken bg-amber-400 ... w-48 h-32"></y>
 <y class="blend-darken bg-khaki-400... -mt-24 ml-10 h-32"></y>
</y>
```

Mix blend with images.

<y class="px-4 my-2 mx-auto w-64">
 <img class="w-48 h-32 bg-amber-400 blend-darken"
      src="https://picsum.photos/400?=1">
 <img class="-mt-24 ml-10 w-48 h-32 bg-khaki-400 blend-darken"
      src="https://picsum.photos/400?=2">
</y>

```html
<!-- Example -->
<y class="...">
 <img class="blend-darken bg-amber-400 ... w-48 h-32"
      src="...">
 <img class="blend-darken bg-khaki-400 ... -mt-24 ml-10 w-48 h-32"
      src="...">
</y>
```

Mix blend with typography.

<y class="px-4 my-2 mx-auto w-64">
  <y class="text-indigo-400 text-8xl font-extrabold blend-darken">
    TEXT
  </y>
  <y class="-mt-32 ml-16 text-pink-400 text-8xl font-extrabold blend-darken">
    TEXT
  </y>
</y>

```html
<!-- Example -->
<y class="...">
  <y class="blend-darken ... text-indigo-400 text-8xl font-extrabold">
    TEXT
  </y>
  <y class="blend-darken ... text-pink-400 text-8xl font-extrabold -mt-32 ml-16 ">
    TEXT
  </y>
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
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |