---
title: &title Available environments
description: &description "There are two kinds of environments that run projects in StackBlitz: EngineBlock and WebContainers. Each project in StackBlitz is tied to one or the other."
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/available-environments.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

<script setup lang="ts">
  import SupportIcon from '@theme/components/SupportIcon.vue';
</script>

# {{ $frontmatter.title }}

There are two kinds of environments that run projects in StackBlitz: **EngineBlock** and **WebContainers**. Each project in StackBlitz is tied to one or the other.

Depending on the environment, StackBlitz IDE includes slightly different features and User Interface elements. See an overview of both environments in the table below - or you can directly consult the section on [EngineBlock](#engineblock) or [WebContainers](#webcontainers).

| Feature | EngineBlock | WebContainers |
| --- | --- | --- |
| Supported frameworks | <SupportIcon value="star-half" label="" /> Front-end | <SupportIcon value="star" label="" /> Front-end & back-end |
| Supported package managers | <SupportIcon value="star-half" label="" /> Turbo v1 | <SupportIcon value="star" label="" /> npm, pnpm, yarn v1 |
| Full Node.js environment | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| Classic editor | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="yes" label="Available" /> |
| [Codeflow IDE](/codeflow/working-in-codeflow-ide) (beta) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| [Web Publisher](/codeflow/content-updates-with-web-publisher) (beta) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| Shareable preview URL | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="no" label="Not available" /> |
| [Console](/guides/user-guide/ide-whats-on-your-screen#console) | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="no" label="Not available" /> |
| [Terminal](/guides/user-guide/ide-whats-on-your-screen#terminal) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |

To explore these differences in practice, we took a React project and turned it into:

- [a React project running on EngineBlock](https://stackblitz.com/fork/react)
- [a React project running on WebContainers](https://vite.new/react) (powered by [Vite](https://vitejs.dev/))

### EngineBlock

EngineBlock is a custom runtime environment based on [SystemJS](https://github.com/systemjs/systemjs#systemjs), capable of running popular front-end frameworks and libraries. Depending on whether you want others to interact with the codebase or the app, you can choose to share the link to the editor or the app preview.

Please note that this environment is running a custom build process and is not compatible with Node.js.

The EngineBlock runtime works with every major browser engine.

### WebContainers

> 💡 [Read the WebContainers announcement](https://blog.stackblitz.com/posts/webcontainers-are-now-supported-on-firefox/)

As a runtime focused on providing a native Node.js environment, WebContainers are capable of running Node.js toolchains, including Webpack or Vite. Using one of these tools, you can work with any front-end framework just like you would in your local environment. WebContainers, however, also support various back-end frameworks, as well as other tools ([including `sqlite3`](https://blog.stackblitz.com/posts/introducing-sqlite3-webcontainers-support/)!).

As for the sharing options, you can share only the editor link as the preview requires running editor. The preview is visible in the editor's window.

This environment has a terminal that supports various common commands you would run locally.

WebContainers are currently supported by Chromium-based browsers and [in Firefox, with some caveats](/platform/webcontainers/browser-support).

Our [Codeflow IDE](/codeflow/what-is-codeflow) runs on the WebContainers runtime.

# Determining Which Environment You Are Using

:::tip Not seeing a terminal in your project?

Currently, the terminal is only available in projects which use the WebContainers execution environment. There is no way to automatically convert from one execution environment to another.
:::

The simplest way to determine if you're using EngineBlock vs WebContainers is the presence of a terminal, as shown below. If you see a terminal, you're in a WebContainers-based project.

![Screenshot of the terminal in a StackBlitz WebContainer project](./assets/stackblitz_terminal.png)

You can also check in the project settings in the left pane of any StackBlitz project. When you click the gear icon, the top of the settings pane will display "WebContainers" for WebContainer-based projects or "Dev Server" for EngineBlock projects.

⬇️ Project settings for a Webcontainer Project: 
![Screenshot of the project settings for a WebContainer project](./assets/webcontainer_settings.png)

⬇️ Project settings for an EngineBlock Project:
![Screenshot of the project settings for an EngineBlock project](./assets/engineblock_settings_devserver.png)