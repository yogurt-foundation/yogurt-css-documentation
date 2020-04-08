> Core Concepts

## Utility

Meaning, creating a complex component from a bunch of small functional building blocks with the Yogurt CSS framework.

Each utility property can be configured for different conditions such as the value of the `text size`, `spacing`, `color`, and also can be configured for `responsive` to have different `variants` such as `hover`, `focus`, `active`, and so on.

### Writing Styles

The idea of how utility is actually work in the Yogurt CSS framework. To get you to understand it in more comprehensive way, let have a look at below the two HTML and CSS writing examples.

Usually, CSS is written in a separate CSS file with file extension `.css` or in a `<style>` tag inside of the `<head>` tag, or write CSS is inside of an HTML tag, using the style attribute as inline style. Like an example below:

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
```

When styling the elements with Yogurt, you don't have to write like the example above in a traditional way. You can create your styling to your component right away in the HTML instead. 

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
    <img class="h-16 w-16 rounded-full object-cover object-center overflow-hidden"
         src="https://i.pravatar.cc/100">
    <y class="px-4 text-charcoal-100 text-lg">
      John Doe
    </y>
  </y>
</y>
```

To find out more about the **tag shorthand**, **tag design** and **best practice** (See [Introduction](../introduction.md)).

### Benefit

Styling with Yogurt CSS framework, you benefits from:

- Writing less, clean and shorter code in your HTML.
- Your CSS file will never grows and no new stylesheet needed.
- Your design always maintain a balance between consistency and flexibility design.
- You never have to worry about overwriting existing stylesheets nightmare.
