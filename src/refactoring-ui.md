---
id: refactoring-ui
title: Refactoring UI
description:
layout: default
---

> Core Concept

## Refactoring UI

Refactoring UI is a tedious job for frontend developers. Here you will understand some basics of how to refactor the existing style sheets or CSS framework you use in your project with Yogurt.

We will be using the `@extend` directive to extract the Yogurt utility classes and replacing the existing CSS properties of your style sheet. (See [Extract Utility Classes](/extract-utility-classes/)).

<y class="my-4 p-3 border-l-8 border-orange-600 text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
    Require Sass/SCSS preprocessor to use the
    <strong>
      @extend
    </strong>
    directive. (See
    <a href="/installation/#using-yogurt-via-cli">
      Using Yogurt via CLI
    </a>.)
</y>

### Example

<y class="my-4 mx-auto max-w-xxs">
  <y class="bg-white border border-gray-400 rounded">
    <y class="w-full h-32 bg-gray-500"></y>
    <y class="p-5 text-md font-normal depth-wider">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </y>
  </y>
</y>

Here we have existing classes in the HTML file, and we might not want to change the class names so lightly. In some cases, those class names might be used by the Javascript. So we leave it as it should be untouched.

```html
<!-- before refactoring -->

<div class="card">
  <img src="..." class="card-img-top">
  <div class="card-body">
    <p class="card-text">
      ...
    </p>
  </div>
</div>
```

We use the `@extend` directive to extract Yogurt utility classes to replacing the existing selectors CSS properties, look like the below,

```scss
// after refactoring with Yogurt in `.scss` file.

.card {
  @extend
    .max-w-xxs,
    .bg-white,
    .border,
    .border-gray-400,
    .rounded;
}

.card-img-top {
  @extend
    .h-32,
    .w-full,
    .object-cover,
    .object-top,
    .overflow-hidden,
    .bg-gray-500,
    .rounded-t;
}

.card-body {
  @extend
    .p-4;
}

.card-text {
  @extend
    .text-md,
    .font-normal,
    .depth-wider;
}
```