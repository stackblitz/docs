---
title: Working in Codeflow IDE
---

# {{ $frontmatter.title }}

Are you ready to **make Codeflow your workflow?** 🔥 

This page covers what to expect when using Codeflow IDE.

## What is Codeflow IDE?

<!--@include: ./parts/codeflow-ide.md-->

It is designed for enabling you to quickly spin up the entire environment without the hassle of cloning and installing dependencies.

:::tip Fun fact

At StackBlitz, we have been using Codeflow IDE in our daily internal development, including PR reviews. This docs site was also built on Codeflow IDE and Web Publisher!

:::

## Opening GitHub repositories in Codeflow IDE

To open a GitHub repository in Codeflow IDE, swap "github.com" with "pr.new" in the repository URL. 

:::details Intrigued by "pr.new"?  👀
If you're curious about this short URL, learn about the [full potential of "pr.new"](./making-a-pr-with-pr-new).
:::

If you are not logged into StackBlitz, while this product is in beta, you will be prompted to login or create a new account.

<!-- TODO add screenshot of the logging popup -->

## Running dev server

As soon as the page loads, Codeflow IDE will clone the repository, install the dependencies and, if the project is compatible with WebContainers, in the bottom right corner you will see a popup notification asking if you'd like to see the preview:

> A service is available on port 5173

If you choose "Open Preview", a Preview will appear on the split screen. By default, Preview updates whenever you save the file.

:::tip 
You can open the Preview in a separate tab or window if you find that more comfortable.
::: 

### Preview doesn't work

If the Preview doesn't work, please see [this page for troubleshooting](/platform/webcontainers/browser-support). Oftentimes, that's caused by browser configuration or browser incompatibility.

### Preview stopped working 

Please note that, depending on the framework, **some changes may cause the dev server to stop running**, which in turn causes the Preview to either not respond to new updates or show an error screen ("Unable to connect to `local.webcontainer.io`"). 

Check in the terminal if the dev server is still running. If you want to restart it, click in the terminal window and:

1. press the "up arrow" button to bring up the start command,
2. press enter to run that command,
3. in the popup notification in the bottom right corner, choose to open the Preview.

### Reopening the Preview panel 

If you close the Preview by accident, you can reopen it by selecting in the left-side navigation bar the icon of a plug entitled "Ports in use". You can open the Preview in a separate tab or as a split screen.

## Saving changes

Whenever a file is changed, you will see a white dot next to its tab in the editor. 

<!-- TODO: add screenshot -->

Moreover, you will also see that dot on the tab in your browser do you remember that you have unsaved changes.

:::warning

<!--@include: ./parts/persistance.md-->

:::


## Making a PR with Codeflow IDE

Let's add a file to [ilovecodeflow.com](https://github.com/stackblitz/ilovecodeflow.com).

Follow these steps:

1. In the GitHub URL of the repository, replace "github.com" with "pr.new".
2. Introduce changes - for instance, 

<!-- gifs -->

### 3. Commit the changes.

<!-- gifs -->

### 4. Make a pull request.

<!-- gifs -->

## Reviewing a PR with Codeflow IDE 