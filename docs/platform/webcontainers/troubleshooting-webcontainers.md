---
title: Troubleshooting WebContainers
description: This page helps you troubleshoot issues with WebContainers.
og_image: webcontainer-troubleshooting.png
---

# {{ $frontmatter.title }}

This page helps you troubleshoot issues with WebContainers.

## Cannot load native addon

Currently, WebContainers can only execute languages that are natively supported on the Web, including JavaScript and WebAssembly. It is not possible to run [native addons](https://nodejs.org/api/addons.html) which are usually implemented using native languages such as C++, unless they can be compiled to WebAssembly. Therefore, loading native addons is disabled by default via [`--no-addons`](https://nodejs.org/api/cli.html#--no-addons) in WebContainers. As a result, you may encounter an error that says: `Cannot load native addon because loading addons is disabled`.

The solution to this is to use an alternative to the native addon which is either fully implemented in JavaScript or can be compiled to WebAssembly.

## Fixing `npm ERR! code ERESOLVE`

With the release of native npm support, the `npm` command in a terminal no longer defaults to [`turbo`](turbo-package-manager.md) but instead uses the real [npm cli](https://github.com/npm/cli). There are a few differences in how `npm` and `turbo` resolve dependencies and one of them is how they work with peer dependencies. `npm install` might now fail on your project with an error saying `code ERESOLVE` or `Conflicting peer dependency`. That's because npm now automatically installs peer dependencies by default. This feature was [introduced in npm 7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/#peer-dependencies). You have three options to fix this error:

 1. Remove your `package-lock.json` file, re-run `npm install`, and save your project; or
 2. Run `npm install --legacy-peer-deps`; or
 3. Run `npm install --force` to bypass the conflicts.

Your project should load without your action, at least if dependencies are automatically installed. If an error is detected, StackBlitz will automatically re-run the installation step with `npm install --legacy-peer-deps`. You can find more information on how to configure your project [here](https://developer.stackblitz.com/platform/webcontainers/project-config).

## Chrome: Infinite reload when DevTools are opened

You might find yourself stuck in an infinite reload loop upon refreshing your webpage. This is usually caused by having the `Update on reload` setting checked under `Application > Service Workers` if you've launched your preview in a separate tab while Chrome DevTools are open.

<img alt="Chrome DevTools with the Application tab selected showing the Service Workers section with the Update on reload checkbox checked" src="./assets/chrome-update-on-reload.png" width="800" />

To fix this issue, simply disable that option.

:::info

At this time, it is not possible to install your own Service Worker with WebContainer as our own Service Worker is used as a core component of the networking stack.

Having this option enabled means it updates WebContainer's Service Worker on every page refresh.

:::
