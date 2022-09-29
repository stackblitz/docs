---
title: 'IDE: what’s on your screen'
---

# IDE: what’s on your screen

This page provides an overview of the terms we use to describe each of the pieces of the user interface (UI) available to you in StackBlitz projects.

<figure>
    <a target="_blank" href="/doc_images/stackblitz_ui_elements.png"><img alt="Overview of the StackBlitz IDE user interface elements" src="/doc_images/stackblitz_ui_elements.png" /></a>
    <figcaption>Overview of the StackBlitz IDE user interface elements</figcaption>
</figure>

### Menu Bar

The Menu Bar is where you perform general operations on your StackBlitz project. It includes:

- The StackBlitz logo which links to your dashboard if you are logged in or to the StackBlitz home page otherwise.
- The buttons to save, fork (create a copy of the project), and share the project. If the project is connected to a GitHub repository, you will also find the commit button here.
- The project owner's avatar which is also a link to their StackBlitz profile page.
- The project title. If you are the project's owner, you can click on it to change it.
- The project visibility icon. If you are the project's owner, you can click it to edit project information such as title, description, URL, or whether the project is public, private or secret.
- The buttons to open the app preview in a new window and to close the integrated [preview](#preview).

<figure>
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/menu-bar.png"><img src="/doc_images/stackblitz_ui_elements/menu-bar.png" /></a>
    <figcaption>screenshot: Menu Bar</figcaption>
</figure>

### Activity Bar

The Activity Bar allows you to select a view to display in the [Side Bar](#side-bar) from the available:

<a target="_blank" href="/doc_images/stackblitz_ui_elements/activity-bar.png"><img src="/doc_images/stackblitz_ui_elements/activity-bar.png" className="float-right" style="height: 200px" /></a>

- [Project](#project-side-bar)
- [Search](#search-side-bar)
- [Firebase](#firebase-side-bar) ([EngineBlock](/guide/available-environments) projects only)
- [Ports in use](#ports-in-use-side-bar) ([WebContainers](/guide/available-environments) projects only)
- [Settings](#settings-side-bar) (some differences between [environments](/guide/available-environments) – [see the settings description](#settings-side-bar) for details)

### Side Bar

When you open a StackBlitz project, the Side Bar displays the _Project_ view. You can open a different view by clicking on the icons in the [Side Bar](#side-bar).

#### Project Side Bar

<figure className="float-left" style="width: 200px">
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/side-bar.png"><img src="/doc_images/stackblitz_ui_elements/side-bar.png" /></a>
    <figcaption>screenshot: Project Side Bar</figcaption>
</figure>

The _Project_ Side Bar view includes the project description (if its author provided one), allows you to browse the project files and, if you are the project owner, to connect the project to a GitHub repository.

In the [EngineBlock](/guide/available-environments) environment the _Project_ Side Bar also displays the project's npm dependencies list.

#### Search Side Bar

The _Search_ Side Bar allows you to find all the given string occurrences in your project. The search can be case-sensitive or use regular expression.

#### Ports in use Side Bar

The _Ports_ Side Bar lists all the ports opened by your app. Clicking on the port opens it in a new window. This Side Bar is displayed in the [EngineBlock](/guide/available-environments) environment only.

#### Firebase Side Bar

The _Firebase_ Side Bar allows you to deploy a production version of your project using Firebase Hosting. This Side Bar is displayed in the [EngineBlock](/guide/available-environments) environment only.

#### Settings Side bar

The _Settings_ Side Bar includes some project-level and user-level customization options. You can use it to configure your editor, set up snippets and freeze or delete the project.

In the [EngineBlock](/guide/available-environments) environment the _Settings_ Side Bar allows you to also customize the development server running your app:

- Reload mechanism – when the code updates, specify if the changes be applied without reloading the preview window ("Hot reload"), using the [HMR mechanism](https://webpack.js.org/concepts/hot-module-replacement/) or should the preview window be reloaded ("Page reload"). "Hot reload" usually offers a better development experience but keep in mind that if your app relies on global event handlers (like setting `setInterval`), they may persist between the updates.
- Reload trigger, which specifies what triggers the app to update in the [Preview](#preview). The "Edit (auto)" option picks up updates automatically whenever you stop typing in the editor for about one second, the "Save" option only updates when you save the file, and the "Keystroke" option updates whenever you press a key in the editor.
- Clear console on HMR – when the "Reload mechanism" is set to "Hot Reload", this option allows you to keep the [Console](#console) messages between updates ("Disabled") or to automatically clear them ("Enabled") as if you have manually run `console.clear()` in your code.

### Editor

The Editor section of the IDE displays the content of the currently selected file. You can perform several actions in the Editor's top-right side such as format code with [Prettier](https://prettier.io) or manage the file tabs if you have several open.

<figure>
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/editor.png"><img src="/doc_images/stackblitz_ui_elements/editor.png" /></a>
    <figcaption>screenshot: Editor</figcaption>
</figure>

### Terminal

The Terminal allows you to run commands, such as `ls`, `mkdir`, `npm start`, `node index.js`, and others – the same way you would on your local machine. **NOTE:** the terminal is only available in the [WebContainers](/guide/available-environments) projects.

<figure>
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/terminal.png"><img src="/doc_images/stackblitz_ui_elements/terminal.png" /></a>
    <figcaption>screenshot: Terminal</figcaption>
</figure>

### Preview

<figure className="float-right" style="width:300px">
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/preview.png"><img src="/doc_images/stackblitz_ui_elements/preview.png" /></a>
    <figcaption>screenshot: Preview</figcaption>
</figure>

The Preview displays the application or webside that you are building in the [Editor](#editor). It is like a mini browser inside your browser: it includes an address bar which displays the URL of your app, the actual app (rendered inside an iframe) and, in the [EngineBlock](/guide/available-environments) projects, a JavaScript [Console](#console).

In case you prefer to view your app in a separate window, you can use the "Open in New Window" button located above the Preview. It will close the Preview and open your app in a separate browser tab instead.

### Console

<figure className="float-right" style="width:300px">
    <a target="_blank" href="/doc_images/stackblitz_ui_elements/console.png"><img src="/doc_images/stackblitz_ui_elements/console.png" /></a>
    <figcaption>screenshot: Console</figcaption>
</figure>

In the [EngineBlock](/guide/available-environments) projects the [Preview](#preview) includes a Console. The Console outputs JavaScript errors and messages from `console.log` methods in your app. It is meant as a lightweight replacement of browser's [DevTools](https://developer.chrome.com/docs/devtools/overview/#console). It is also useful if you are sharing a project and you want to make sure that people see these JavaScript output messages without having to tell them to open the actual DevTools.

As an example see how the RxJS starter project uses it to display a "Hello, World!" message: https://stackblitz.com/edit/rxjs?devtoolsheight=60
