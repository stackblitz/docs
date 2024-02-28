---
title: Configuring your browser to run WebContainers
description: Some browser settings can stop WebContainers from running correctly. You can work around those issues by adding exceptions for StackBlitz domains in your browser’s settings.
og_image: webcontainer-browser-configuration.png
---

# {{ $frontmatter.title }}

While [all supported browsers](/platform/webcontainers/browser-support) can run WebContainers, some browser options can stop WebContainers from running correctly.

You can work around those issues by adding exceptions for StackBlitz domains in your browser’s settings. Here’s how.

## Why do I need to add exceptions for StackBlitz?

WebContainers use a combination of browser technologies, such as [Service Worker][MDN_SERVICE_WORKER] and [WebAssembly][MDN_WEB_ASSEMBLY], across several domains. Each running project has its own domain and needs to install a Service Worker for that domain to work properly.

In some browsers, this feature is blocked by “third-party cookie” or “third-party storage” restrictions. These are legitimate restrictions when the third-party domain is an ad server or a tracking server, but in the case of WebContainers the third-party domain is where your project code runs.

## Chrome

With Chrome's defaults, starting with version 118 or later, you should get a pretty good experience out of the box.

Read on if you run into issues or want an even smoother experience.

### Previews in a separate tab {#chrome-preview-separate-tab}

Previews opened in a separate tab are not connected by default to the editor and require an extra step. To complete this step, you are usually prompted to click a button.

This can happen automatically if your popups settings, [chrome://settings/content/popups](chrome://settings/content/popups), are adjusted with the following exception:

```
https://[*.]webcontainer.io
```

<img class="mx-auto" alt="Chrome popups settings showing the *.webcontainer.io origins as exceptions" src="./assets/chrome-settings-popups.png" width="800" height="502.37" />

Once done, whenever the preview needs to reconnect to the editor, it will open a popup that gets immediately closed.

Lastly, if Chrome's [memory saver][CHROME_MEMORY_SAVER] is turned on, this step might be necessary more often than required. To avoid it, you can add the following exception in [chrome://settings/performance](chrome://settings/performance):

```
https://webcontainer.io
https://stackblitz.com
```

Your performance settings should be similar to this:

<img class="mx-auto" alt="Chrome performance settings showing the memory saver section with an exception for stackblitz.com" src="./assets/chrome-memory-saver.png" width="800" height="502.37" />

### Enabling Service Workers {#chrome-service-workers}

If you use the “Block Third Party Cookies” option in Chrome and you have “Third-party Storage Partitioning” disabled, you will need to either:

 - Enable Storage partitioning
 - Or add exceptions for StackBlitz projects.

The first option should be preferred because this is a [new feature][GOOGLE_SP] of Chrome which improves your privacy when you visit websites that embed third-party sites.

#### Enable Storage partitioning

Visit `chrome://flags/#third-party-storage-partitioning` and choose `Enabled` in the drop down. In recent version of Chrome, choosing the `Default` value should work too.

<img alt="Chrome flags showing the third-party Storage Partitioning option enabled." src="./assets/chrome-enable-sp.png" width="800" height="234.56" />


#### Or add exceptions for Stackblitz

To allow all StackBlitz projects to use Service Workers, go to your browser’s cookie preferences, and add exceptions for the following URL patterns:

```
https://[*.]stackblitz.io
https://[*.]webcontainer.io
```

For instance, in Chrome, go to `chrome://settings/cookies` and add those exceptions in the “Sites that can always use cookies” section.

<img alt="Chrome cookie settings with an empty list of “Sites that can always use cookies”." src="./assets/chrome-settings-cookies-1.png" width="800" height="600" />

<img alt="Chrome cookie settings showing a modal dialog for adding a site to list of third-party cookie exceptions." src="./assets/chrome-settings-cookies-2.png" width="800" height="600" />

<img alt="Chrome cookie settings with exceptions for stackblitz.io and local.webcontainer.io domains." src="./assets/chrome-settings-cookies-3.png" width="800" height="600" />

:::details Advanced: enabling Service Workers for a single project

If you don’t want to allow Service Workers and third-party cookies for all StackBlitz projects, you can add exceptions for individual projects instead.

Note that this may not be very practical, because the exact domain for a project can change between sessions, especially in [Codeflow IDE](/codeflow/working-in-codeflow-ide).

In Chrome, click the lock icon in the navigation bar:

<img alt="Clicking the lock icon in the navigation bar shows a menu with a “Cookies” entry." src="./assets/chrome-show-cookies.png" width="800" />

<img alt="A modal dialog titled “Cookies in use” shows that cookies for a couple subdomains of stackblitz.io and webcontainer.io were blocked. Select a domain and click “Allow” to add an exception." src="./assets/chrome-blocked-cookies.png" width="800" />

If that is the case, choose to “Allow” cookies for those third-party domains. After that, the browser will prompt you to reload the page and you will be able to run the current project.

Note that the list of blocked domains might look different for you. In particular, a `xyz.local.webcontainer.io` domain might not be present. WebContainers-based projects use different domains dynamically, depending on what the runtime is doing (for instance, whether it is serving HTTP content or not), so you might need to check the list of blocked domains later if you see something off again.

:::

## Firefox

### Enabling Service Workers {#firefox-service-workers}

When Firefox’s Enhanced Tracking Protection is configured in “Custom” mode with the cookie blocking option set to “All cross-site cookies”, Firefox will block the Service Workers used by WebContainers.

You can work around this issue in a couple ways:

1. Use the “Strict” mode instead of “Custom” mode. It’s important to note that it's slightly more permissive than “Custom” mode with very strict options. If this is not something you'd like to allow, you can...
2. Add exceptions to cookie blocking for the domains used to run StackBlitz projects.

To do so, visit `about:preferences#privacy` to check what your current settings look like.

<img
  alt="The Firefox “Privacy & Security” settings page showing that Enhanced Tracking Protection is set to “Custom”, and to “Cookies: All cross-site cookies (may cause websites to break)”."
  src="./assets/firefox-settings-cookies-1.png"
  width="820"
  height="661"
/>

To add exceptions for StackBlitz, scroll down to the “Cookies and Site Data” section, click on “Manage Exceptions…”, and add exceptions for the following sites:

```
https://stackblitz.io
https://webcontainer.io
```

<img
  alt="The Cookies and site data exceptions management window in Firefox settings. It shows a couple entries for stackblitz.io and webcontainer.io, both with the value “Allow”."
  src="./assets/firefox-settings-cookies-2.png"
  width="820"
  height="645"
/>

Don’t forget to click “Save Changes”. Then you should be able to reload the tab with your StackBlitz project, and hopefully everything should work!

### Previews in a separate tab {#firefox-preview-separate-tab}

Previews opened in a separate tab are not connected by default to the editor and require an extra step. You usually get prompted to click a button to do that.

You can have it done automatically by modifying your popups settings, [about:preferences#privacy](about:preferences#privacy), with the following exception:

```
https://webcontainer.io
```

<img alt="Firefox popups settings showing the webcontainer.io site allowed as an exception" src="./assets/firefox-settings-popups.png" width="800" height="649" />


## Brave: enabling Service Workers {#brave-service-workers}

By default, Brave’s “Shields” feature blocks [Service Workers][MDN_SERVICE_WORKER] and cookies from third-party domains.

To allow WebContainers to run in Brave, you will need to add an exception for StackBlitz:

1. Visit a WebContainers-based project, for instance https://stackblitz.com/edit/nextjs. The project’s boot sequence might stay stuck on the “Running start command” step:

<img alt="Screenshot of Brave on a WebContainers project with the Brave Shields feature on. Loading the project’s web server is stuck on the last step" src="./assets/brave-stuck-project.png" width="820" height="500"/>

2. Click on the “Shields” icon at the right of the address bar, then click on “Advanced View”.

<img alt="Screenshot showing the Shields configuration popup for stackblitz.com." src="./assets/brave-shields-popup.png" width="380" height="358" />

3. In the advanced view, change the “Cross-site cookies blocked” option to “All cookies allowed”.

<img alt="Screenshot showing the advanced view of the Shields configuration popup, with a drop-down selector for cross-site cookie permissions." src="./assets/brave-shields-details.png" width="820" height="559" />

Brave will reload the page, and you should get a working project:

<img alt="Screenshot of Brave on a WebContainers project with the Brave Shields feature tweaked to allow third-party cookies and Service Workers. Loading the web server works, and shows the default page for Next.js’s starter project." src="./assets/brave-working-project.png" width="820" height="500"/>

## Edge: enabling WebAssembly {#edge-webassembly}

Microsoft Edge disables usage of [WebAssembly][MDN_WEB_ASSEMBLY] when you set its “Enhance your security on the web” option to “Strict”.

To allow StackBlitz projects to run, either set this option to “Balanced” or add exceptions for a couple domains used by StackBlitz projects.

1. Go to `edge://settings/privacy` → “Enhance your security on the web”.

<img alt="Edge privacy settings showing the “Enhance your security on the web” section." src="./assets/edge-settings-enhanced-security-1.png" width="800" />

2. Then click “Exceptions”, and add exceptions for the following domains:

```
stackblitz.com
[*.]staticblitz.com
```

<img alt="Edge privacy settings showing two entries added under the label “Enhanced security is turned off for these sites”." src="./assets/edge-settings-enhanced-security-2.png" width="800" />


[MDN_SERVICE_WORKER]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[MDN_WEB_ASSEMBLY]: https://developer.mozilla.org/en-US/docs/WebAssembly
[GOOGLE_SP]: https://developers.google.com/privacy-sandbox/3pcd/storage-partitioning
[CHROME_MEMORY_SAVER]: https://support.google.com/chrome/answer/12929150