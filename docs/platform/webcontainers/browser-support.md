---
title: Browser support
---

#  Browser support

Last update: July 2022

TL;DR: For WebContainers, we support desktop Chromium-based browsers out of the box, and Firefox in alpha state.

If you have issues with supported browsers, check the entries under "Troubleshooting" (e.g. [Running in Brave](/guide/brave-support) or [Cookie Blockers](/guide/third-party-blocker)).

## Web Platform requirements

StackBlitz requires some of the latest additions to the Web Platform to work correctly when running WebContainers-based projects. Chiefly among them are **[`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)** and **[cross-origin isolation](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated)**.

`SharedArrayBuffer`s (SABs) allow simultaneous access to a chunk of memory from multiple different workers. This is a powerful feature that was [disabled temporarily](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) in light of potential security issues. Cross-origin isolation is the key to enabling SABs: by properly configuring some headers and controlling which resources are served to browsers, a site can be considered `crossOriginIsolated`, that is, secure enough to use SABs. Both features are enabled in Chromium-based browsers (Chrome, Brave, Edge) and Firefox.

However, for cross-origin isolation work for our use case, we need the ability to embed arbitrary resources. More accurately, we need the ability for _you_ to embed arbitrary resources: we want you to be able to write and test your web application seamlessly, regardless of which images, scripts, etc. you include in it. For this to work, we are tracking with interest a [new mode](https://github.com/WICG/credentiallessness) of cross-origin isolation that allows this.

Unfortunately, this feature is only enabled in Chromium-based browsers. We are following current specifications and talking to browser implementors to bring support to other browsers as soon as possible.

You can read more about cross-origin isolation in [our blog](https://blog.stackblitz.com/posts/cross-browser-with-coop-coep/).

## Runtime differences

Note that there might be minor differences in the behavior of WebContainers in browsers that are not based on Chromium. After all, WebContainers strive for maximum compatibility with Node.js, which is itself based on top of [V8](https://v8.dev/), Chromium's own JavaScript engine. Node.js very much relies on some specific features of V8, which are not part of established JavaScript standards. Hence, it is easier to achieve a higher degree of compatibility in a Chromium-based browser, which _also_ runs on top of V8.

## Chrome

WebContainers are fully supported in Chrome and most Chromium-based browsers (including Brave, Edge, Vivaldi, etc.).

However, if you enabled blocking third-party cookies in Chrome preferences, this may prevent WebContainers from working out of the box.

If you think you’re running into this issue, check out [how to configure Chrome to run WebContainers](/guide/third-party-blocker).

## Brave

Brave is a Chromium-based browser, and supports WebContainers well, but it ships with more aggressive third-party blocking by default which tends to stop WebContainers from running.

Learn [how to configure Brave to run WebContainers](/guide/brave-support/).

## Firefox

We have alpha support for Firefox. Please try it and [provide feedback](https://github.com/stackblitz/webcontainer-core/issues/new/choose)!

As mentioned above, Firefox does not fully support the required mode for cross-origin isolation, so you might encounter limitations when **running a server in a preview window** within the StackBlitz editor. Third party assets might get blocked due to the limitations of cross-origin isolation policies. However, you can work around this by opening your server preview in a separate window.

In addition to this, there might be [other runtime incompatibilities](#runtime-differences) as detailed above.

## Safari

Safari recently shipped support for `SharedArrayBuffer` and cross-origin isolation. However, it is still lacking a few other features that prevent us from shipping a working environment:

* [Atomics.waitAsync](https://github.com/tc39/proposal-atomics-wait-async)
* [Lookbehind in regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

(Note that none of above can be pollyfilled).

## Embedding

Projects based on WebContainers can be [embedded](/guide/embedding) as any other StackBlitz project. However, the [restrictions detailed above](#web-platform-requirements) hit harder when embedding a project, since we no longer control the headers under which the _embedding_ content is served.

For that reason, we only support embedding WebContainers-based projects in **Chromium-based browsers**.
