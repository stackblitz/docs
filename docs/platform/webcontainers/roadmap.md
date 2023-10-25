---
title: &title Roadmap
description: &description "Get insights into our current and future plans for features in WebContainer. Let us know what you think!"
head:
  - ['meta', {property: 'og:title', content: *title}]
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/webcontainer-project-configuration.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

:::warning Disclaimer

The following is intended for informational purposes only and is subject to change. It might contain outdated information or inaccuracies.
:::

On this page, you'll find information about what is currently being worked on, planned features and things that are under consideration.

If you have a feature request, please check [our github issue tracker](https://github.com/stackblitz/webcontainer-core/issues) to create a new issue or comment to an existing one.

:::info
This roadmap only includes large features. Minor bug fixes or features will not be reflected here.
:::

## ✅ Shipped

 * **Node 18**
 * **WASI** (Blog post: https://blog.stackblitz.com/posts/announcing-wasi/)
 * **Private / Custom Registries** (Blog post: https://blog.stackblitz.com/posts/introducing-teams/)

## 🚧 In Development

 * **Node 20** (Github: https://github.com/stackblitz/webcontainer-core/issues/560)
 * **CORS Proxy** (Github: https://github.com/stackblitz/webcontainer-core/issues?q=is%3Aissue+is%3Aopen+CORS)
 * **Reducing memory usage** (Github: https://github.com/stackblitz/webcontainer-core/issues/1120)

## 🦄 Future

 * **Supporting multiple Node.js versions** (Github: https://github.com/stackblitz/webcontainer-core/issues/560)
 * **Remote Databases** (Github: https://github.com/stackblitz/webcontainer-core/issues/679, https://github.com/stackblitz/webcontainer-core/issues/1106)
 * **More CLI utilities** (Github: https://github.com/stackblitz/webcontainer-core/issues/1165, https://github.com/stackblitz/webcontainer-core/issues/452, https://github.com/stackblitz/webcontainer-core/issues/1013)
