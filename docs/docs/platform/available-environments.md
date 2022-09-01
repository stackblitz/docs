---
title: Available environments
---

# Available environments

There are two kinds of environments that run projects in StackBlitz: **EngineBlock** and **WebContainers**. Each project in StackBlitz is tied to one or the other.

Depending on the environment, StackBlitz IDE includes slightly different features and user interface elements. See an overview of both environments in the table below. If you'd like to learn more about them, please specifically consult the section on [EngineBlock](#engineblock) or [WebContainers](#webcontainers).

| Feature                    | EngineBlock                                               | WebContainers                                             |
| -------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| Native Node.js environment | <img src="/img/icons/times-solid.svg" className="icon" /> | <img src="/img/icons/check-solid.svg" className="icon" /> |
| Supported frameworks       | front-end                                                 | front-end & back-end                                      |
| Editor                     | <img src="/img/icons/check-solid.svg" className="icon" /> | <img src="/img/icons/check-solid.svg" className="icon" /> |
| Preview                    | <img src="/img/icons/check-solid.svg" className="icon" /> | <img src="/img/icons/check-solid.svg" className="icon" /> |
| Console                    | <img src="/img/icons/check-solid.svg" className="icon" /> | <img src="/img/icons/times-solid.svg" className="icon" /> |
| Shareable Preview URL      | <img src="/img/icons/check-solid.svg" className="icon" /> | <img src="/img/icons/times-solid.svg" className="icon" /> |
| Terminal                   | <img src="/img/icons/times-solid.svg" className="icon" /> | <img src="/img/icons/check-solid.svg" className="icon" /> |

You can see these differences in practice by comparing this React project as running in:

- [EngineBlock](https://stackblitz.com/fork/react)
- [WebContainers](https://vite.new/react) (powered by Vite)

### EngineBlock

EngineBlock is a custom runtime based on [SystemJS](https://github.com/systemjs/systemjs#systemjs), capable of running popular front-end frameworks and libraries. Depending on whether you want others to interact with the codebase or the app, you can choose to share the link to the editor or the app preview.
This environment is running a custom build process and is not compatible with Node.js.

The EngineBlock runtime works with every major browser engine.

### WebContainers

> 💡 [Read the announcement post](https://blog.stackblitz.com/posts/introducing-webcontainers/)

As a runtime focused on providing a native Node.js environment, WebContainers are capable of running Node.js toolchains, including Webpack or Vite. Using one of these tools, you can work with any front-end framework just like you would in your local environment. WebContainers, however, also support various back-end frameworks, as well as other tools ([including `sqlite3`](https://blog.stackblitz.com/posts/introducing-sqlite3-webcontainers-support/)!).
As for the sharing options, you can share only the editor link as the preview requires running editor. The preview is visible in the editor's window.
This environment has a terminal that supports various common commands you would run locally.

WebContainers are currently supported by Chromium-based browsers and [in Firefox, with some caveats](/docs/platform/browser-support/).
