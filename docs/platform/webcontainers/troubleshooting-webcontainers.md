---
title: &title Troubleshooting WebContainers
description: &description This page helps you troubleshoot issues with WebContainers.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/webcontainer-troubleshooting.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page helps you troubleshoot issues with WebContainers.

## Cannot load native addon

Currently, WebContainers can only execute languages that are natively supported on the Web, including JavaScript and WebAssembly. It is not possible to run [native addons](https://nodejs.org/api/addons.html) which are usually implemented using native languages such as C++, unless they can be compiled to WebAssembly. Therefore, loading native addons is disabled by default via [`--no-addons`](https://nodejs.org/api/cli.html#--no-addons) in WebContainers. As a result, you may encounter an error that says: `Cannot load native addon because loading addons is disabled`.

The solution to this is to use an alternative to the native addon which is either fully implemented in JavaScript or can be compiled to WebAssembly.

## Fixing `npm ERR! code ERESOLVE`

With the release of native npm support, the `npm` command in a terminal no longer defaults to [`turbo`](turbo-package-manager.md) under the hood but instead uses the real [npm](https://github.com/npm/cli). There are a few differences in how `npm` and `turbo` resolve dependencies and one of them is how they work with peer dependencies. In particular, `npm install` might now fail in your project with an error saying `code ERESOLVE` or `Conflicting peer dependency`. To fix this error, you can either:

 1. remove your `package-lock.json` file, re-run `npm install`, and save your project; or
 2. run `npm install --legacy-peer-deps`.

Even without any specific action on your part, your project should still load fine - when this error is detected, StackBlitz will re-run the installation step with `npm install --legacy-peer-deps`.
