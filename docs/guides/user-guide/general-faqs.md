---
title: &title General FAQs (Frequently Asked Questions)
description: &description This page outlines commonly asked questions and answers about StackBlitz.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/general-faqs.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

This page outlines commonly asked questions and answers about StackBlitz.

## Capabilities & Limitations

### How do I create code snippets?

Click on the Settings icon in the activity bar to the left of your screen. The Settings sidebar will pop open and you will see User snippets and Workspace snippets. User snippets are available for any of your projects. Workspace snippets are only available in the current project you create them in.

Here's a [handy video](https://twitter.com/sulco/status/1275039159611203585) featured on Twitter that shows you how to create and use code snippets in StackBlitz.

### How do I know if my project is EngineBlock or WebContainers-based?

All WebContainers projects will have a terminal in the project. You can find what environments are available for EngineBlock and WebContainers projects in our [docs](https://developer.stackblitz.com/guides/user-guide/available-environments).

Any projects in `https://stackblitz.com/?starters=fullstack`, `..?starters=backend`, `..?starters=vite` will be WebContainer/Node projects with a terminal.

### Why can't I see my terminal?

Please note that the terminal is only available for WebContainer-based projects. You can use the keyboard binding `^` `` ` `` (the caret and the back quote keys) to toggle the terminal.

### Can I run Angular unit tests in StackBlitz?

This is possible inside WebContainer-based projects, but not Engineblock-based projects. The easiest way to start is by navigating to node.new, which is create a WebContainer-based project automatically!

### Can I use Postman or something similar for testing?

[Postman](https://www.postman.com/automated-testing/) and similar tools will not work since the server is unreachable outside of the browser. As an alternative, you could run a node program that makes requests for testing.

### Can I develop ElectronJS apps on StackBlitz?

Since Electron is a native app, this cannot be supported since StackBlitz runs entirely within the browser.

### What are the deploy options available on StackBlitz?

The three pathways we current support are:

1. If you are in any non-Codeflow StackBlitz project, you can download the project to your local machine by clicking the button right underneath the "Share" dialogue and deploy manually.

2. If you are using an EngineBlock project, you can deploy directly via our [Firebase integration](https://developer.stackblitz.com/guides/user-guide/ide-whats-on-your-screen#firebase-sidebar).

3. If you are using Codeflow, you can push code directly into GitHub and then use the [Netlify](https://github.com/apps/netlify) or [Vercel](https://vercel.com/docs/concepts/git/vercel-for-github) GitHub bots to deploy your site.

### Are MongoDB and Mongoose supported?

Currently, database connections are not supported in StackBlitz. If you'd like to request something new to be added to StackBlitz, you can fill out fill out a [Feature Request issue](https://github.com/stackblitz/core/issues/new?assignees=&labels=Status%3A+Triage%2C+Type%3A+Feature+Request&template=feature-request.md&title=) on our GitHub repository or share your thoughts in our [Discord server](https://discord.gg/stackblitz)! 

### Can I change the TypeScript version in my project?

The current TypeScript starter uses EngineBlock technology, which has a fixed TypeScript version. EngineBlock is great for lightweight frontends, but does not run Node.js itself and will be limited to things like TypeScript versioning.

Webcontainer, however does run Node.js itself in the browser and does not have this limitation. You can simply `npm install` any TypeScript version as you would locally.

### Can I change the Node version in my project?

The current state of Codeflow does not support users being able to set their own Node version.

## Billing and Invoices

### How do I view my invoice?

You can go directly to https://stackblitz.com/settings/membership and click the 'View Invoices' button to view your invoice history. You can view [this video](./assets/view-invoice.mp4) to see how it's done!

<!--- Need to figure out what plugin is needed in VitePress to add videos (./assets/view-invoice.mp4) -->

## Membership Plans

### What is the Teams plan?

The Teams plan (currently in Beta) is a paid membership offering that allows users to share features amongst members of their GitHub organization. Features and highlights of this plan include:

- Instant integration with your GitHub repos for seamless in-browser pull request creation and review
- Full VS Code in the browser (the classic StackBlitz editor is also included)
- A unified security model for sharing StackBlitz projects and repos across your team
- A single billing and user management interface based around your existing GitHub organization

If you're interested in Teams Beta, come onboard with us for a private technology preview of this plan! You can sign up [here](https://stackblitz.com/beta-teams-signup).

### I see that WebContainer API is free to use, but a license is required. Can I use the WebContainer API for commercial purposes?

We are thrilled to offer free access for most users! For those with high levels of commercial usage, we do apply a nominal charge for API requests beyond 10,000 per month, at a highly competitive rate of $0.10 per API call.

### I want to purchase the enterprise edition for WebContainer. Where can I do that?

Bringing Webcontainer to EE (enterprise edition) is in the works, but not currently available. You can reach out to enterprise@stackblitz.com for details.

We do offer [WebContainer API](webcontainers.io) licenses for organizations wanting to use WebContainer technology for production usage in a for-profit setting. Check out [webcontainers.io](webcontainers.io) for more information!