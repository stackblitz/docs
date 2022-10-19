---
title: Troubleshooting WebContainers
---

# {{ $frontmatter.title }}

This page helps you troubleshoot issues with WebContainers.

## Cannot load native addon

Currently, WebContainers can only execute languages that are natively supported on the Web, including JavaScript and WebAssembly. It is not possible to run [native addons](https://nodejs.org/api/addons.html) which are usually implemented using native languages such as C++, unless they can be compiled to WebAssembly. Therefore, loading native addons is disabled by default via [`--no-addons`](https://nodejs.org/api/cli.html#--no-addons) in WebContainers. As a result, you may encounter an error that says: `Cannot load native addon because loading addons is disabled`.

There is no way to opt-in into loading native addons because they can't be executed.

The solution to this is to use an alternative to the native addon which is either fully implemented in JavaScript or can be compiled to WebAssembly.
