---
id: installation
title: Installation
description: Ways to install Yogurt CSS framework for your project.
layout: default
---

> Getting Started

## Using Yogurt via CDN

```html
<link defer href="https://unpkg.com/yogurt-css@1.0.8/dist/yogurt-1.0.8_solidcore.min.css"
      rel="stylesheet"
      rel="preload"
      as="style"
      media="all">
```

**Note:** The CDN build is large, the sizes will be different when you are customizing with the build tool (See [Customize Utilties](/customize-utilities)). Using the build tool to exclude utilities or exclude variants from utilities that you don't need to reduce file size. (See [File Size Control](/file-size-control)).

## Using Yogurt via Package Manager

You can include the Yogurt CSS file from the `node_modules` directory with an HTML `<link>` tag.

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
````

## Using Yogurt via CLI

To create a new project, run:

```bash
$ npx create-yogurt-app my-new-project
```

The CLI gives you an optional tool to quickly installs and sets up a new frontend project with essential build tools such as preprocessors, compressors, etc.

If you install the `create-yogurt-app` package to run locally, simply run `yogurt <project_name>`,

```bash
$ yogurt my-new-project
```

<y class="py-4">
  <img class="w-full h-full rounded-lg"
       src="/images/content/yogurt_cli_screenshot_01.png">
</y>

## Using Yogurt via Playground

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

## Using Yogurt via CodeSandbox

Or, if you prefer testing Yogurt on a web browser right away,

[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yogurt-css-playground-r7duh?fontsize=14&hidenavigation=1&moduleview=1&theme=light)