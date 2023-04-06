---
title: &title WebContainers Browser Support
description: &description WebContainers are supported in all recent desktop browsers (fully in Chrome and Chrome-based browsers, in beta in Firefox and Safari), and partially supported on Android browsers.
head:
  - ['meta', {property: 'og:title', content: *title}]
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/webcontainer-browser-support.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

_Last update: February 2023_

## Supported browsers

WebContainers are supported in all recent desktop browsers (fully in Chrome and Chrome-based browsers, in beta in Firefox and Safari), and partially supported on Android browsers.

### Desktop browsers

- Chrome: full support.
- Other Chromium-based browsers: full support. Some browsers may apply restrictive rules by default, and require specific configuration, like [Brave](#brave).
- Firefox: beta support ([see details](#firefox)).
- Safari: beta support since Safari 16.4, no support for earlier versions ([see details](#safari)).

### Mobile browsers

- Android: beta support for Chrome, Chromium-based browsers and Firefox. Depending on your device, large projects may run into memory limitations.
- iOS and iPadOS: beta support for Safari since iOS 16.4. Large projects may run into memory limitations because the memory usage for a web page on a mobile device is more constrained. In this case, we recommend switching to a Desktop browser that is less constrained and has more memory.

## Web Platform requirements

StackBlitz requires some of the latest additions to the Web Platform to work correctly when running WebContainers-based projects. Most important among them are **`SharedArrayBuffer`** and **cross-origin isolation**.

### Cross-origin isolation

[`SharedArrayBuffer`s](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) (SABs) allow simultaneous access to a chunk of memory from multiple different workers. This is a powerful feature that was [disabled temporarily](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) in light of potential security issues.

Cross-origin isolation is the key to enabling SABs: by properly configuring some of the headers and controlling which resources are served to browsers, a site can be considered [`crossOriginIsolated`](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated) or, in other words, secure enough to use SABs. Both features are enabled in Chromium-based browsers (Chrome, Brave, Edge, among others), Safari 16.4, and Firefox.

However, for cross-origin isolation to work for our use case, you need to be able to embed arbitrary resources: to be able to write and test your web application seamlessly, regardless of which images or scripts you choose to include. For this to work, a [new `credentialless` mode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless) of cross-origin isolation that allows this is needed.

Unfortunately, this feature is only enabled in Chromium-based browsers. We are following current specifications and continuing our talks with browser implementors to bring support to other browsers as soon as possible.

You can read more about [cross-origin isolation on our blog](https://blog.stackblitz.com/posts/cross-browser-with-coop-coep/).

### JS engine differences

Note that there might be minor differences in the behavior of WebContainers in browsers that are not based on Chromium. After all, WebContainers strive for maximum compatibility with Node.js, which itself is based on [V8](https://v8.dev/), Chromium's own JavaScript engine. Node.js very much relies on some specific features of V8, which are not part of the established JavaScript standards. Because of that, it is easier to achieve a higher degree of compatibility in a Chromium-based browser, which _also_ runs on top of V8.

## Chrome

WebContainers are fully supported in Chrome and most Chromium-based browsers including Brave, Edge, Vivaldi, and others.

However, if you enabled blocking third-party cookies in Chrome preferences, this may prevent WebContainers from working out of the box.

If you think you’re running into this issue, check out [how to configure Chrome to run WebContainers](/platform/webcontainers/browser-config#chrome-service-workers).

:::warning Note
There is a reported Chrome regression on Macbooks with M1 chip, which also affects the speed of some larger projects on WebContainers. Learn more about this issue in these bug reports: [issue 1228686](https://bugs.chromium.org/p/chromium/issues/detail?id=1228686) and [issue 1356099](https://bugs.chromium.org/p/chromium/issues/detail?id=1356099).
:::

## Brave

Brave is a Chromium-based browser and supports WebContainers well but it ships with a more aggressive third-party blocking by default which tends to stop WebContainers from running.

Learn [how to configure Brave to run WebContainers](/platform/webcontainers/browser-config#brave-service-workers).

## Firefox

We have beta support for Firefox. Please try it and [share feedback with us](https://github.com/stackblitz/webcontainer-core/issues/new/choose)!

Firefox does not fully support the required mode for cross-origin isolation, so you might encounter limitations when **running a server in a preview frame** within the StackBlitz editor. Third-party assets might get blocked due to the limitations of cross-origin isolation policies. However, you can work around this by opening your server preview in a separate window.

Because Firefox and Node.js use different JavaScript engines (SpiderMonkey and V8, respectively), there is a small risk of running into [JS engine differences](#js-engine-differences).

## Safari

We have beta support for Safari on macOS, starting with Safari 16.4. Please try it and [report issues here](https://github.com/stackblitz/webcontainer-core/issues/new/choose).

Safari does not fully support the required mode for cross-origin isolation, so you might encounter limitations when **running a server in a preview frame** within the StackBlitz editor. Third-party assets might get blocked due to the limitations of cross-origin isolation policies. However, you can work around this by opening your server preview in a separate window.

Because Safari and Node.js use different JavaScript engines (JavaScriptCore and V8, respectively), there is a small risk of running into [JS engine differences](#js-engine-differences).

Older Safari versions are not suported. They lack a few necessary Web Platform features, such as [`Atomics.waitAsync`](https://github.com/tc39/proposal-atomics-wait-async) and [lookbehind in regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions), which cannot be polyfilled.

## Embedding

Projects based on WebContainers can be [embedded](/guides/integration/embedding) as any other StackBlitz project. However, the [restrictions detailed above](#web-platform-requirements) hit harder when embedding a project since we no longer control the headers under which the _embedding_ content is served.

For that reason, we only support embedding WebContainers-based projects in **Chromium-based browsers**.
