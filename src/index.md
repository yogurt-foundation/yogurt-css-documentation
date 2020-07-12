---
id: home
title: Welcome
description: Documentation for open source Yogurt CSS framework.
layout: default
---

<y class="-mt-12 pb-4">
  <img class="w-full h-full rounded-lg opacity-75"
       src="images/content/yogurt_promo.jpg"
       alt="Yogurt">
</y>

A colossal low-level utility CSS framework for crafting beautiful and elegant user interface at an atomic level without writing a single line of CSS.

<y class="my-4 p-4 text-sm text-gray-600 bg-gray-200">
  <span class="mr-4 p-2 text-gray-700 bg-gray-400 rounded">
    20 June 2020
  </span>
  Version
  <strong>
    1.0.7-solidcore
  </strong>
</y>

<y class="text-sm text-gray-600 depth-tight">
  The `SOLID CORE` means the next major Yogurt CSS update is depending on any major release of the CSS version. It also means you will less frequently updating the framework for your frontend development. Which makes this utility framework a futureproof.
</y>

<y class="my-4 flex flex-wrap items-center">
  <a href="https://discord.gg/A62YjNR"
     target="_blank">
    <img title="Join the chat at https://discord.gg/A62YjNR"
         src="https://img.shields.io/badge/DISCORD-JOIN_CHANNEL_%E2%86%92-7289da.svg?style=flat">
  </a>
  <img class="p-px"
       src="https://badgen.net/github/release/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/releases/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/assets-dl/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/npm/dw/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/npm/dm/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/npm/dy/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/branches/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/forks/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/stars/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/watchers/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/tag/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/commits/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/last-commit/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/contributors/yogurt-foundation/yogurt-css">
  <img class="p-px"
       src="https://badgen.net/github/license/yogurt-foundation/yogurt-css">
</y>

### Introduction

Yogurt is a CSS framework for crafting custom UI designs by using very smaller building block to build a component, even a basic component like a button can look entirely different from one to another in your material designs and having a complex template design that you'd end up needing to override the CSS will only make the creation process more frustrating.

Yogurt does not include any kind of component classes, unlike many other CSS frameworks. Yogurt using the humanized naming convention such as `font-size`, `padding`, `margin`, `line-height`, `color`, and so on, it easy to reason about, easy to manipulate and more readable code. Yogurt also delivers a balance between consistency and flexibility design without overwriting existing stylesheets and unlike many CSS frameworks. Play well with your CSS, library, and frameworks. No side effects. Support up to 4k screen size enabled by default.

### Concept

The `margin`, `padding`, `font-size` and so on are calling the utility components. Using the human-friendly CSS class naming (e.g. `border-` instead of `b-`) combines with values makes perfect sense to mix among the utilities to form a complex styling. The value is usually linear changing the properties of a utility in a very precise manipulation, which gives you low-level control over this framework. Almost all utilities can be configured with the responsive option, by combining the screen size `prefix` with a utility (e.g. `sm:text-md`, the text size in `md` value only activate on screen size `sm` as in screen width 640px).

### Tag Shorthand

Yogurt CSS use `<y>` tag to replacing the use of `<y>` tag, which you still can use the `<div>` tag. The `<y>` is a branding and also to reduce letters from `<div>`.

```html
<!-- Example -->
<y>
  Hello World!
</y>
```

You can use `<y>` tag for almost everything, except for some standard HTML tags that cannot be replaced with `<y>`.

### Tag Design

Yogurt CSS tag design consists of 3 components,

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

[![Netlify Status](https://api.netlify.com/api/v1/badges/07b893f5-2d17-413d-a3b6-e657ef9dbef3/deploy-status)](https://app.netlify.com/sites/yogurt-css-documentation/deploys)