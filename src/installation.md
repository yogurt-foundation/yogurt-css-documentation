---
id: installation
title: Installation
description: Ways to install Yogurt CSS framework for your project.
layout: default
---

> Getting Started

### Using Yogurt via CDN

```html
<link defer href="https://unpkg.com/yogurt-css@1.0.7/dist/yogurt-1.0.7_solidcore.min.css"
      rel="stylesheet"
      rel="preload"
      as="style"
      media="all">
```

**Note:** The CDN builds is large (585kb compressed, 99kb gzipped), the sizes will be different when you are customizing with the build tool. Using the build tool to exclude utilities or exclude variants from utilities that you don't need to reduce file size. (See [File Size Control](/file-size-control)).

### Using Yogurt via Build Tool

```bash
$ git clone https://github.com/yogurt-foundation/yogurt-css.git
$ cd yogurt-css
$ yarn && yarn build
```

In this document is recommended `yarn`, you can choose to `npm` that came with the NodeJS installation.

Once the build process is done. You can extract the minified `yogurt.css` file from `dist/` directory to use in your project.

### Using Yogurt via Playground

[Yogurt Playground](https://github.com/yogurt-foundation/playground) is a developer tool also an HTML/CSS IDE for testing and prototyping with all the Yogurt frameworks and other libraries, [FX-Filter](https://github.com/yogurt-foundation/fx-filter), [FX-Gradient](https://github.com/yogurt-foundation/fx-gradient), [FX-Motion](https://github.com/yogurt-foundation/fx-motion). If you have an idea and want to draft something small without setting up a new project, then Yogurt Playground is for you.

```bash
$ git clone https://github.com/yogurt-foundation/playground.git
$ cd playground
$ yarn && yarn start
```

Download the precompiled desktop apps without going through the building process,

- [Linux](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-linux-x64.tar.gz)
- [Mac](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-mac-x64.zip)
- [Windows](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-win-x64.tar.gz)

<y class="py-4">
  <img class="w-full h-full rounded-lg"
       src="/images/content/yogurt_playground_screenshot_01.png">
</y>