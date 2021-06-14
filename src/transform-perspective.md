---
id: transform-perspective
title: Transform Perspective
description: Utilities for set an element a 3D-space by affecting the distance between the Z plane and the user.
topic: Transforms
relate: rotate
layout: default
---

> Transforms

# Perspective <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for set an element a 3D-space by affecting the distance between the Z plane and the user.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| transform-perspective-none  | perspective: none |
| transform-perspective-200  | perspective: 200px |
| transform-perspective-300  | perspective: 300px |
| transform-perspective-400  | perspective: 400px |
| transform-perspective-500  | perspective: 500px |
| transform-perspective-600  | perspective: 600px |
| transform-perspective-700  | perspective: 700px |
| transform-perspective-800  | perspective: 800px |
| transform-perspective-900  | perspective: 900px |
| transform-perspective-1000  | perspective: 1000px |

---

## Usage

With `transform-perspective` value set to `300`.

<y class="mx-2 my-2 mx-auto w-full">
  <y class="p-4 flex flex-col justify-center items-center">
    <y class="transform-perspective-300 flex flex-gap-4 justify-center items-center">
      <y class="transform rotate-y-45 (hover)rotate-y-0 h-32 w-32 bg-gray-400 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-600">
          rotate-y-45
        </y>
      </y>
      <y class="transform -rotate-y-24 (hover)rotate-y-0 h-32 w-32 bg-gray-500 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-300">
          -rotate-y-24
        </y>
      </y>
      <y class="transform rotate-x-24 (hover)rotate-x-0 h-32 w-32 bg-gray-400 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-600">
          rotate-x-24
        </y>
      </y>
      <y class="transform -rotate-x-24 (hover)rotate-x-0 h-32 w-32 bg-gray-500 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-300">
          -rotate-x-24
        </y>
      </y>
    </y>
    <y class="py-6 text-gray-600">
      Try hover above objects to see 3D perspective effect.
    </y>
  </y>
</y>

With `transform-perspective` value set to `none` to disable 3D perspective.

<y class="mx-2 my-2 mx-auto w-full">
  <y class="p-4 flex flex-col justify-center items-center">
    <y class="transform-perspective-none flex flex-gap-4 justify-center items-center">
      <y class="transform rotate-y-45 (hover)rotate-y-0 h-32 w-32 bg-gray-400 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-600">
          rotate-y-45
        </y>
      </y>
      <y class="transform -rotate-y-24 (hover)rotate-y-0 h-32 w-32 bg-gray-500 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-300">
          -rotate-y-24
        </y>
      </y>
      <y class="transform rotate-x-24 (hover)rotate-x-0 h-32 w-32 bg-gray-400 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-600">
          rotate-x-24
        </y>
      </y>
      <y class="transform -rotate-x-24 (hover)rotate-x-0 h-32 w-32 bg-gray-500 rounded-lg shadow transition duration-500 linear flex justify-center items-center">
        <y class="text-sm font-semibold text-gray-300">
          -rotate-x-24
        </y>
      </y>
    </y>
    <y class="py-6 text-gray-600">
      Try hover above objects to see effect.
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="transform-perspective-300">
  <y class="transform rotate-y-45 (hover)-rotate-y-0 ... h-32 w-32 ... bg-gray-400 ... transition duration-500 linear"></y>
</y>

<y class="transform-perspective-300">
  <img
    class="transform rotate-y-45 (hover)-rotate-y-0 ... h-32 w-32 ... bg-gray-400 ... object-cover object-fit overflow-hidden ... transition duration-500 linear"
    src=".."
  >
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'transform-perspective',
  $property: perspective,
  $modifier: (
    250: 250px,
    350: 350px,
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for transformperspective in variants.transformperspective %}{% for item in transformperspective.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


