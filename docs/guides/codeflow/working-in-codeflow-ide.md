---
title: Working in Codeflow IDE
---

# {{ $frontmatter.title }}

This page covers the workflow using Codeflow IDE.

## What is Codeflow IDE?

<!--@include: ./parts/codeflow-ide.md-->

## Opening GitHub repositories in Codeflow IDE

To open a GitHub repository in Codeflow IDE, swap "github.com" with "pr.new" in the repository URL. 

:::tip Intrigued by "pr.new"?  👀
If you're curious about this short URL, learn about the [full potential of "pr.new"](./making-a-pr-with-pr-new).
:::

If you are not logged into StackBlitz, you will be prompted to ADD MORE INFO 
<!-- TODO add screenshot of the logging popup -->

## Running dev server

As soon as the page loads, Codeflow IDE will install dependencies and if the project is compatible with WebContainers, you will see a popup notification in the bottom right corner asking if you'd like to see the preview. If you open it, a realtime preview will appear on the split screen.

:::tip 
You can open the live preview in a separate tab or window for more comfort.
:::

If you close the Preview panel by accident, you can reopen it through the terminal by:
- clicking on the link in the "→ Local: http://localhost:PORT_NUMBER"
- clicking in the terminal window and: 
    1. pressing `ctrl+c` to kill the server, 
    2. pressing up arrow to bring up the start command,
    3. pressing enter to run that command,
    4. opening the preview in the popup notification in the bottom right corner.

## Saving changes

Whenever a file is changed, you will see a white dot next to its tab in the editor. Moreover, you will also see that dot on the tab in your browser do you remember that you have unsaved changes.

:::warning

<!--@include: ./parts/persistance.md-->

:::

## Making a PR with Codeflow IDE


## Reviewing a PR with Codeflow IDE 