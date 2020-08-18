---
id: word-break
title: Word Break
description: Utilities for sets the word breaks of an element.
layout: default
---

> Typography

# Word Break

Utilities for sets the word breaks of an element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| break-normal | word-break: normal; <br> overflow-wrap: normal |
| break-words | overflow-wrap: break-word; |
| break-all | word-break: break-all;
| truncate | overflow: hidden; <br> text-overflow: ellipsis; <br> white-space: nowrap |

---

## Usage

<y class="my-2 mx-auto max-w-sm">
  <y class="p-4 bg-gray-300 break-normal">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="break-normal">
  ...
</y>
```

<y class="my-2 mx-auto max-w-sm">
  <y class="p-4 bg-gray-300 break-words">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="break-words">
  ...
</y>
```

<y class="my-2 mx-auto max-w-sm">
  <y class="p-4 bg-gray-300 break-all">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="break-all">
  ...
</y>
```

<y class="my-2 mx-auto max-w-sm">
  <y class="p-4 bg-gray-300 truncate">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem teneturuiaiureeumnatusenimmaximelaudantiumquibusdamillonihil, reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="truncate">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |