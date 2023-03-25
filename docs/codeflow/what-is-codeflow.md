---
title: &title What is Codeflow?
description: &description Codeflow is a one-click integration with GitHub for seamless coding workflows.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/what-is-codeflow.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---


# {{ $frontmatter.title }}

:::warning Note: StackBlitz Codeflow is currently in Beta

Please review our [FAQ](/codeflow/codeflow-faq#capabilities-limitations) for current limitations and [let us know](https://github.com/stackblitz/webcontainer-core/issues) if you find bugs!

:::

<!--@include: ./parts/codeflow.md-->

StackBlitz now helps you switch contexts seamlessly:
- <!--@include: ./parts/codeflow-ide.md-->
- <!--@include: ./parts/web-publisher.md-->
- <!--@include: ./parts/pr-new.md-->
- <!--@include: ./parts/codeflowapp-bot.md-->


## Key features
- 🔒 **unmatched security**: all development is happening in your browser tab, including running Node.js, git, package managers (npm, yarn, pnpm), and local extensions.
- ⚡️ **shockingly fast**: the entire dev environment spins up in milliseconds - even reinstalling `node_modules` is as simple as refreshing the page, with pnpm running up to four times as fast as locally!
- 💻 **works online and offline**: continue your work even when you lose the Internet connection midway.
- 🔥 **your environment is always online**: your apps never go to sleep and have no bandwidth limits - share the URL with as many friends, colleagues, and communities as you’d like!
- 🆓 **always free for Open Source**: you're the future of the web development and we love you.

## Explore

Excited to try it yourself? Try these:
- 📝 Take Web Publisher for a spin by adding your name to [ilovecodeflow.com](https://ilovecodeflow.com/)!
- 💻 Explore how we built [this docs site](https://pr.new/github.com/stackblitz/docs) in Codeflow IDE!
- 🕵️ Review [this suspicious PR](https://pr.new/stackblitz/docs/pull/40) in Codeflow IDE
- 🤖 See our CodeflowApp bot in action on [a PR](https://github.com/stackblitz/docs/pull/40#issue-1404169268)!

## Learn

Understand the Codeflow better! Read about:
- Working in [Codeflow IDE](./working-in-codeflow-ide).
- Updating content [with Web Publisher](./content-updates-with-web-publisher).
- Using the short URL [pr.new](./using-pr-new).
- Getting help from [CodeflowApp bot](./integrating-codeflowapp-bot).

You can also check our **[Frequently Asked Questions page](./codeflow-faq)**.

## Add Codeflow to your project

Follow these handy integration guides to link your project to Codeflow within minutes:
- 💻 [Using pr.new](./using-pr-new) integration guide
- 📝 [Web Publisher](./integrating-web-publisher) integration guide
- 🤖 [CodeflowApp bot](./integrating-codeflowapp-bot) integration guide

## Feedback? Ideas? Dreams?

Let us know what you think:
- **Ask questions** on [GitHub Discussions](https://github.com/stackblitz/docs/discussions/new?category=Q-A).
- **Request a new docs page** or a more thorough explanation using our [GitHub Discussions](https://github.com/stackblitz/docs/discussions/new?category=ideas)!


## What about other online IDEs?

Unlike StackBlitz, legacy online IDEs run on remote servers and stream the results back to your browser. This approach yields **few security benefits** and **provides a worse experience** than your local machine in nearly every way.

**StackBlitz solves these problems by doing all computing inside your browser**. This leverages decades of speed and security innovations but also **unlocks key development and debugging benefits**.

Lastly, StackBlitz is capable of running Node.js inside the browser so you can use the web to build the web.

## Get involved

**We love our community!** Please do stay in touch and:

- Join our supportive community on [the Discord server](https://discord.gg/22zTzrwQrU)!
- Read our [blog](https://blog.stackblitz.com/) and see what we have been up to in our [monthly update posts](https://blog.stackblitz.com/categories/monthly-updates/)!
- Share how you use Codeflow on [Twitter](https://twitter.com/stackblitz)!
- Reach out to our Developer Advocate on [Twitter](https://twitter.com/sylwiavargas) or via [an email](mailto:devrel@stackblitz.com) with your Codeflow ideas, dreams, and wishes!
