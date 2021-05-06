---
id: utility
title: Utility
description: Yogurt is a utility-centric framework. Creating a complex component from a bunch of small functional CSS building blocks.
topic: Core Concepts
layout: default
---

> Core Concepts

# Utility

Yogurt is a utility-centric framework. Which, creating a complex component from a bunch of small functional CSS building blocks.

Each utility property can be configured for different conditions. Such as the value of the text size, spacing, color shades, which also can be configured to respond to different screen sizes and different types of interactivity such as `hover`, `focus`, `active`, and so on or both.

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Read more information about the
  <a href="/responsive/">
    Responsive
  </a> and
  <a href="/pseudo-class-variants/">
    Pseudo-Class Variants
  </a>
</y>

## Writing Styles

The idea of how the utility is actually work in the Yogurt CSS framework. To get you to understand it in a more comprehensive way, let have a look at below the two HTML and CSS writing examples.

### Conventional Style

<y class="box-panel">
  <y class="box-content">
    <img src="https://i.pravatar.cc/100">
    <span>
      John Doe
    </span>
  </y>
</y>

<style>
  .box-panel {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: 2rem auto;
    max-width: 300px;
    padding: 2rem 1rem;
  }
  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-content img {
    background-color: #edf2f7;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  .box-content span {
    color: #262626;
    font-size: 1.125em;
  }
</style>

```html
<!-- Example -->
<div class="box-panel">
  <div class="box-content">
    <img src="https://i.pravatar.cc/100">
    <span>
      John Doe
    </span>
  </div>
</div>

<style>
  .box-panel {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: 2rem auto;
    max-width: 300px;
    padding: 2rem 1rem;
  }
  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-content img {
    background-color: #edf2f7;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  .box-content span {
    color: #262626;
    font-size: 1.125em;
  }
</style>
```

### Yogurt Style

When styling the elements with Yogurt, you don't have to write like the example above traditionally. You can create your styling to your component right away in the HTML instead.

<y class="mx-auto my-8 max-w-xs">
  <y class="flex justify-center items-center px-4 py-8 bg-white rounded-lg shadow-md">
    <img class="h-16 w-16 rounded-full object-cover object-center overflow-hidden"
         src="https://i.pravatar.cc/100">
    <y class="px-4 text-charcoal-100 text-lg">
      John Doe
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="mx-auto my-8 max-w-xs">
  <y class="flex justify-center items-center px-4 py-8 bg-white rounded-lg shadow-md">
    <img class="h-16 w-16 object-cover object-center rounded-full overflow-hidden"
         src="https://i.pravatar.cc/100">
    <y class="px-4 text-charcoal-100 text-lg">
      John Doe
    </y>
  </y>
</y>
```
