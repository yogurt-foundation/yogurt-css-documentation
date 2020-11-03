---
id: utility
title: Utility
description: Yogurt is a utility-centric framework. Meaning, creating a complex component from a bunch of small functional CSS building blocks.
layout: default
---

> Core Concepts

## Utility

Yogurt is a utility-centric framework. Which, creating a complex component from a bunch of small functional CSS building blocks.

Each utility property can be configured for different conditions. Such as the value of the text size, spacing, color shades, which also can be configured to respond to different screen sizes and different types of interactivity such as hover, focus, active, and so on or both.

### Writing Styles

The idea of how the utility is actually work in the Yogurt CSS framework. To get you to understand it in a more comprehensive way, let have a look at below the two HTML and CSS writing examples.

Usually, CSS is written in a separate CSS file with file extension `.css` or in a `<style>` tag inside of the `<head>` tag, or write CSS is inside of an HTML tag, using the style attribute as an inline style. Like an example below:

<y class="box-panel">
  <y class="box-content">
    <img theme=""
         src="https://i.pravatar.cc/100">
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

When styling the elements with Yogurt, you don't have to write like the example above traditionally. You can create your styling to your component right away in the HTML instead.

<y class="mx-auto my-8 max-w-xs">
  <y class="flex justify-center items-center px-4 py-8 bg-white rounded-lg shadow-md">
    <img theme=""
         class="h-16 w-16 rounded-full object-cover object-center overflow-hidden"
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
    <img class="h-16 w-16 rounded-full object-cover object-center overflow-hidden"
         src="https://i.pravatar.cc/100">
    <y class="px-4 text-charcoal-100 text-lg">
      John Doe
    </y>
  </y>
</y>
```

To find out more about the [Tag Shorthand](/#tag-shorthand), [Utility Class Design](/#utility-class-design) and [Best Practice](/#best-practice).

Read more about advanced framework usages such as [Import Framework](/import-framework/), [Extract Utility Classes](/extract-utility-classes/), [Refactoring UI](/refactoring-ui/), and [Plugin API](/plugin-api/).

---

### Benefit

Styling with Yogurt CSS framework, you benefit from:

- Blazing fast prototyping and make it production-ready.
- Instant refactoring your existing UI with Yogurt utility modules.
- Your CSS file will never grow, and no new stylesheet needed.
- Your design always maintains a balance between consistency and flexibility design.
- You never have to worry about overwriting existing stylesheets nightmare.
- Compatible to all web browsers, including the old one.