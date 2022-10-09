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

At StackBlitz, we have been using Codeflow IDE in our daily development, including PR reviews. In fact, this docs site was built using Codeflow IDE - with typo corrections done through Web Publisher.

→ If you're curious what our experience has been like, check out this blog post 👀

:::

## Opening GitHub repositories in Codeflow IDE

To open a GitHub repository in Codeflow IDE, swap "github.com" with "pr.new" in the repository URL. 

:::details Intrigued by "pr.new"?  👀
If you're curious about this short URL, learn about the [full potential of "pr.new"](./making-a-pr-with-pr-new).
:::

If you are not logged into StackBlitz, you will be prompted to ADD MORE INFO 
<!-- TODO add screenshot of the logging popup -->

## Running dev server

As soon as the page loads, Codeflow IDE will clone the repository, install dependencies and, if the project is compatible with WebContainers, you will see a popup notification in the bottom right corner asking if you'd like to see the preview:

> A service is available on port 5173

If you choose "Open Preview", a realtime Preview will appear on the split screen.

:::tip 
You can open the live Preview in a separate tab or window for more comfort.
::: 

Depending on the framework, **some changes may cause the dev server to stop running**, which may cause the Preview to either not respond to new updates or feature an error screen ("Unable to connect to `local.webcontainer.io`"). 

Check in the terminal if the dev server is still running. To restart it, click in the terminal window and:

1. press the "up arrow" button to bring up the start command,
2. press enter to run that command,
3. in the popup notification in the bottom right corner, choose to open the Preview.

## Reopening the Preview panel 

If you close the Preview by accident, you can reopen it in two ways:
- **in a new tab:** in the terminal, scroll all the way down and click on the link in the "→ Local: `http://localhost:PORT_NUMBER`"
- **as a split screen**: click the terminal window and:
    1. press `ctrl+c` to "kill" the server, 
    2. press the "up arrow" button to bring up the start command,
    3. press enter to run that command,
    4. in the popup notification in the bottom right corner, choose to open the Preview.

## Saving changes

Whenever a file is changed, you will see a white dot next to its tab in the editor. 

Moreover, you will also see that dot on the tab in your browser do you remember that you have unsaved changes.

:::warning

<!--@include: ./parts/persistance.md-->

:::


## Making a PR with pr.new with changes in a project

Let's add a file to this docs repository.

### 1. In the GitHub URL of the repository, replace "github.com" with "pr.new".

<!-- gifs -->

### 2. Introduce changes.

<!-- gifs -->

### 3. Commit the changes.

<!-- gifs -->

### 4. Make a pull request.

<!-- gifs -->

## Reviewing a PR with Codeflow IDE 