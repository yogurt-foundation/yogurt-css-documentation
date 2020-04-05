<p align="center">
  <img src="assets/promo_2.jpg" height="auto" width="auto">
</p>

A colossal low-level utility CSS framework for crafting beautiful and elegant user interface at an atomic level without writing a single line of CSS.

> Version 1.0.2-solidcore, 05 April 2020

> The `SOLID CORE` means the next major Yogurt CSS update is depending on any major release of the CSS version. It also means you will less frequently updating the framework for your frontend development. Which makes this utility framework a futureproof.

<p align="left">
  <img src="https://badgen.net/github/release/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/releases/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/assets-dl/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/branches/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/forks/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/stars/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/watchers/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/tag/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/commits/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/last-commit/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/contributors/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/license/yogurt-foundation/yogurt-css">
</p>

### Introduction

**Yogurt CSS** using the humanized naming convention such as `font-size`, `padding`, `margin`, `line-height`, `color`, and so on, easy to reason about, easy to manipulate and more readable code. **Yogurt CSS** also delivers a balance between consistency and flexibility design without overwriting existing stylesheets and unlike other frameworks. Play well with your CSS, library, and frameworks. No side effects. Support up to 4k screen size enabled by default.

### Concept

The `margin`, `padding`, `font-size` and so on are considered utility components. Using the human-friendly CSS class naming (e.g. `border-` instead of `b-`) combines with values makes perfect sense to mix among the utilities to form a complex styling. The value is usually linear changing the properties of a utility in a very precise manipulation, which gives you low-level control over this framework. Almost all utilities can be configured with the responsive option, by combining the screen size `prefix` with a utility (e.g. `sm:text-md`, the text size in `md` value only activate on screen size `sm` as in screen width 640px).

### Tag

Yogurt CSS use `<y>` tag to replacing the use of `<div>` tag, which you still can use the `<div>` tag. The `<y>` is a branding and also to reduce letters from `<div>`. For example,

```html
<y>
  Hello World!
</y>
```

You can use `<y>` tag for almost everything, except for some standard HTML tags that cannot be replaced with `<div>`.

### Best Practice

When writing HTML with Yogurt CSS, the best way is to put the `class=""` to a top **vertical formation** as the highest priority this is to give better reading visibility. Suggesting the `id=""` will be the last.

```html
<y class="..."
   title="..."
   id="...">
  Hello World!
</y>
```

[**Read the documentation and start using Yogurt!**](getting-started/installation.md)

[![Netlify Status](https://api.netlify.com/api/v1/badges/07b893f5-2d17-413d-a3b6-e657ef9dbef3/deploy-status)](https://app.netlify.com/sites/yogurt-css-documentation/deploys)
