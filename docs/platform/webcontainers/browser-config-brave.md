---
title: Running in Brave
---

# Running in Brave

WebContainers work in Brave almost out of the box. However, it might require a small configuration change.

## What’s the problem?

By default, Brave’s “Shields” feature blocks [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and cookies from third-party domains.

When you visit a WebContainers-enabled project on [stackblitz.com](https://www.stackblitz.com/), StackBlitz tries to register a Service Worker for the domain `<project_name>.stackblitz.io`. Since it’s considered a third-party domain, Brave will reject it.

## Allowing third-party Service Workers

1. Visit a WebContainers-based project, for instance https://www.stackblitz.com/edit/nextjs. The project’s boot sequence might stay stuck on the “Running start command” step:

![Screenshot of Brave on a WebContainers project with the Brave Shields feature on. Loading the project’s web server is stuck on the last step.](./assets/brave-stuck-project.png)

2. Click on the “Shields” icon at the right of the address bar, then click on “Advanced View”.

<img alt="Screenshot showing the Shields configuration popup for stackblitz.com." src="./assets/brave-shields-popup.png" width="380" />

3. In the advanced view, change the “Cross-site cookies blocked” option to “All cookies allowed”.

![Screenshot showing the advanced view of the Shields configuration popup, with a drop-down selector for cross-site cookie permissions.](./assets/brave-shields-details.png)

Brave will reload the page, and you should get a working project:

![Screenshot of Brave on a WebContainers project with the Brave Shields feature tweaked to allow third-party cookies and Service Workers. Loading the web server works, and shows the default page for Next.js’s starter project.](./assets/brave-working-project.png)
