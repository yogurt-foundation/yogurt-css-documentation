---
id: home
title: Welcome
description: Documentation for open source Yogurt CSS framework.
layout: home
---

<y class="relative mb-4 p-3 border-l-8 border-gray-800 dark:border-gray-800 text-sm text-gray-800 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 depth-loose">
  <span class="mr-2 px-2 py-1 font-semibold text-gray-100 dark:text-charcoal-100 bg-gray-800 dark:bg-gray-400 rounded">
    &nbsp;News
  </span>
  New version {{ site.version.core }} has released. Check the updates in
  <a class="font-semibold hover:underline"
     href="/utility-map/">
    Utility Map
  </a>.
  <y class="absolute top-1 right-1">
    <y class="h-2 w-2 bg-gray-800 dark:bg-orange-500 filter saturate-10 rounded animation fade-out duration-2000 delay-1 infinite"></y>
  </y>
</y>

<y class="pb-4">
  <img class="w-full h-full object-cover object-center rounded-lg opacity-75"
       src="images/content/yogurt_promo.jpg"
       alt="Yogurt">
</y>

### Introduction

Yogurt is a CSS framework for crafting custom UI designs by using very smaller building block to build a component, even a basic component like a button can look entirely different from one to another in your material designs and having a complex template design that you'd end up needing to override the CSS will only make the creation process more frustrating.

Yogurt does not include any component classes, unlike many other CSS frameworks. Yogurt using the humanized naming convention such as `font-size`, `padding`, `margin`, `line-height`, `color`, and so on, it's easy to reason about, easy to manipulate and more readable code. Yogurt also delivers a balance between consistency and flexibility design without overwriting existing stylesheets and unlike many CSS frameworks. Play well with your CSS, library, and frameworks. It has no side effects. Support up to 4k screen size enabled by default.

### Concept

The `margin`, `padding`, `font-size`, and so on are calling the utility components. Using the human-friendly CSS class naming combines with values makes perfect sense to mix among the utilities to form a complex styling. The value is usually linear changing the properties of a utility in a very precise manipulation, which gives you low-level control over this framework. Almost all utilities can be configured with the responsive option, by combining the screen size `prefix` with a utility (e.g. `sm:text-md`, the text size in `md` value only activate on screen size `sm` as in screen width 640px).

### Tag Shorthand

Yogurt CSS use `<y>` tag to replacing the use of `<div>` tag, which you still can use the `<div>` tag. The `<y>` is a branding and also to reduce letters from `<div>`.

```html
<!-- Example -->
<y>
  Hello World!
</y>
```

You can use `<y>` tag for almost everything, except for some standard HTML tags that cannot be replaced with `<y>`.

### Utility Class Design

Yogurt CSS utility class name design consists of 3 components,

```html
{prefix}:{class}-{modifier}
```

- **prefix** ~ by adding `:` before the class, allow you to manipulate the utility variants such as `responsive`, `hover`, `group-hover`, `active`, `focus`, `visited`, `disabled` and so on.
- **class** ~ is an utility class name (e.g. text, border, flex, cursor and so on).
- **modifier** ~ by adding `-` after the class, allow you to precisely manipulate the utility values such as text size, color shades, spacing, effects, filters and so on.

```html
<!-- Example -->
<y class="hover:text-charcoal-100">
  Text change color when hovered!
</y>
```

### Best Practice

When writing HTML with Yogurt CSS, the best way is to put the `class=""` to a top **vertical formation** as the highest priority this is to give better reading visibility. Suggesting the `id=""` will be the last.

```html
<!-- Example -->
<y class="..."
   title="..."
   id="...">
  Hello World!
</y>
```

<a href="/installation">
  Read more about the Installation
  <span class="exernal-link-icon">
    {% include "images/icons/arrow-right.svg" %}
  </span>
</a>

<y class="py-6 text-xs text-gray-600 depth-tight">
  The `SOLID CORE` means the next major Yogurt CSS update is depending on any major release of the CSS version. It also means you will less frequently updating the framework for your frontend development. Which makes this utility framework a futureproof.
</y>

<y theme="">

  [![Netlify Status](https://api.netlify.com/api/v1/badges/07b893f5-2d17-413d-a3b6-e657ef9dbef3/deploy-status)](https://app.netlify.com/sites/yogurt-css-documentation/deploys)

<y>
