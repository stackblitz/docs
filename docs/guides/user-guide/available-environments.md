---
title: Available environments
---

<script setup lang="ts">
  import SupportIcon from '../../.vitepress/theme/components/SupportIcon.vue';
</script>

# {{ $frontmatter.title }}

There are two kinds of environments that run projects in StackBlitz: **EngineBlock** and **WebContainers**. Each project in StackBlitz is tied to one or the other.

Depending on the environment, StackBlitz IDE includes slightly different features and User Interface elements. See an overview of both environments in the table below - or you can directly consult the section on [EngineBlock](#engineblock) or [WebContainers](#webcontainers).

| Feature | EngineBlock | WebContainers |
| --- | --- | --- |
| Native Node.js environment | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| Supported frameworks | <SupportIcon value="star-half" label="" /> Front-end | <SupportIcon value="star" label="" /> Front-end & back-end |
| Editor | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="yes" label="Available" /> |
| Preview | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="yes" label="Available" /> |
| Shareable Preview URL | <YepNope value="yes" label="Supported" /> | <SupportIcon value="no" label="Not supported" /> |
| Console | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="no" label="Not available" /> |
| Terminal | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |

To explore these differences in practice, we took a React project and turned it into:

- [a React project running on EngineBlock](https://stackblitz.com/fork/react)
- [a React project running on WebContainers](https://vite.new/react) (powered by Vite)

### EngineBlock

EngineBlock is a custom runtime environment based on [SystemJS](https://github.com/systemjs/systemjs#systemjs), capable of running popular front-end frameworks and libraries. Depending on whether you want others to interact with the codebase or the app, you can choose to share the link to the editor or the app preview.

Please note that this environment is running a custom build process and is not compatible with Node.js.

The EngineBlock runtime works with every major browser engine.

### WebContainers

> 💡 [Read the recent WebContainers announcement](https://blog.stackblitz.com/posts/webcontainers-are-now-supported-on-firefox/)

As a runtime focused on providing a native Node.js environment, WebContainers are capable of running Node.js toolchains, including Webpack or Vite. Using one of these tools, you can work with any front-end framework just like you would in your local environment. WebContainers, however, also support various back-end frameworks, as well as other tools ([including `sqlite3`](https://blog.stackblitz.com/posts/introducing-sqlite3-webcontainers-support/)!).

As for the sharing options, you can share only the editor link as the preview requires running editor. The preview is visible in the editor's window.

This environment has a terminal that supports various common commands you would run locally.

WebContainers are currently supported by Chromium-based browsers and [in Firefox, with some caveats](/platform/webcontainers/browser-support).
