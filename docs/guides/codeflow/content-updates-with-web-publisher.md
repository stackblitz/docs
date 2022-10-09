---
title: Content Updates with Web Publisher
---

# {{ $frontmatter.title }}

Content update? A small typo fix? Don't stress - Web Publisher makes this experience pleasant, even for those of us who are not entirely tech-savvy!

This page covers using Web Publisher to update your blog posts, docs, or wiki pages.

## What is Web Publisher?

<!--@include: ./parts/web-publisher.md-->

## Editing a page in Web Publisher

To edit a page, you need to find its corresponding file on GitHub. You can do it in four ways: 
- "Edit in Web Publisher" button,
- "Edit this page on GitHub" link,
- through a GitHub repository.

### "Edit in Web Publisher" button

If the page features our button, that's it! Just click on it and you will be redirected to our friendly publishing tool 💕

:::tip Ask for the button!
If the page doesn't feature our button, you can suggest to the page admins to include it - here's our [Web Publisher integration guide](./integrating-web-publisher).
:::

### "Edit this page on GitHub" link

Many pages feature a link that says "Edit this page on GitHub". If so click the link. On the page that opened, replace `github.com` with `pr.new` - and, that's it!

In the Preview panel on the right side, navigate to the page you want to edit. It will live update as you type.

### Through GitHub 

Go to the repository of the page and open the file you want to edit in the "editing" mode. Now, replace `github.com` with `pr.new` and - that's it!

In the Preview panel on the right side, navigate to the page you want to edit. It will live update as you type.

<!-- add gif -->

:::tip
Alternatively, you can also use our Web Publisher link generator, which will also immediately feature the edited page in the Preview:
<iframe src="https://stackblitz.com/edit/vue-c2wltp?embed=1&file=src/App.vue&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%;height:350px;border:1px solid var(--vp-custom-block-tip-border);border-radius:10px"></iframe>
:::

## On your screen

Welcome to Web Publisher, a friendly publishing tool for content updates on blogs, docs, wikis, and other pages.

Let us give you a quick tour around this tool.

<!-- screenshot of the whole screen -->

### Top navigation bar

On the left side, you see the information about which file you're editing and in which repository.

<!-- screenshot -->

On the right side, you see three buttons:
- **"Open in the IDE"**, which redirects to [Codeflow IDE](./working-in-codeflow-ide), which is helpful when you want to work on a few files or add images.
- **"Propose changes"**, which opens a dropdown with a button to "make a pull request" (which means suggesting changes to the owner of the repository).
- **Your Profile**, which opens a new browser tab with your StackBlitz profile page.

### Editor

Editor is where you will introduce your changes - it is located on the left side or takes a whole space. Note that if specified so in the link, Web Publisher will open with the editor on full screen.

In the top left corner, you will see the name of the file you're editing.

In the top right corner, you will see an icon that either expands the Editor view or switches back to split screen.

### Live Preview

Live Preview is where you can verify the changes you've introduced as it updates as you type or with a little delay. It is located on the left side or takes a whole space. Note that if specified so in the link, Web Publisher will open with the Preview on full screen.

In the top left corner, you will see the name of the panel ("Preview") and an icon that allows you to trigger a refresh if the changes you introduced are not updating.

In the top right corner, you will see three icons:
- **"Terminal"** which will open a terminal window at the bottom where you can see the terminal output, including possible errors (these might be helpful when reporting an issue).
- **"Open in new tab"** which will open a new browser tab with the Preview in case you want to see it full screen.
- **"Expand the view"** or **"Switch back to split screen"** icon.

## Updating the content

Use the Editor to update the content and Preview to verify how your changes look on the page.

:::tip New to Markdown?
If the name of the edited file ends in `.md`, this is a Markdown file and it may feature "strange" characters. Don't worry, here's a [Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) that will help you decipher and use them effectively!
:::

## Submitting your changes

You've introduced your edits and you're ready to submit them for the review. 

:::warning IMPORTANT:
Before you send them to the owner of the page, please double check the text for typos, stylistic errors, links that don't work, and so on. Make sure that your edits are top-notch and are actually helpful.
:::

Ready to submit? Follow these steps:

1. In the top right corner, click on the green button that reads "Propose changes".
2. In the dropdown window, click on "Commit proposed changes". Web Publisher will "push changes", which means that your edits are being sent to GitHub. In fact, Web Publisher first creates a fork (which means a copy) of the GitHub the repository, saves the changes and only them sends them to GitHub.
3. A new browser tab will open with a form to "Open a pull request". Fill it out, including the description of the changes you made and explaining your reasoning and motivation behind them. Please keep the information that the pull request was made with Web Publisher (already pre-filled).

Congratulations! You've submitted your edits!

## Compatibility Mode

<!--@include: ./parts/wp-compatibility-mode.md-->