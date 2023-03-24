---
title: &title General FAQs (Frequently Asked Questions)
description: &description This page outlines commonly asked questions and answers about StackBlitz.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/general-faqs.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page outlines commonly asked questions and answers about StackBlitz.

[[toc]]


## Capabilities & Limitations

### How do I create code snippets?

Click on the Settings icon in the activity bar to the left of your screen. The Settings sidebar will pop open and you will see User snippets and Workspace snippets. User snippets are available for any of your projects. Workspace snippets are only available in the current project you create them in.

Here's a [handy video](https://twitter.com/sulco/status/1275039159611203585) featured on Twitter that shows you how to create and use code snippets in StackBlitz.


### How do I know if my project is Engineblock or WebContainers-based?

All WebContainers projects will have a terminal in the project.

### Can I run Angular unit tests in StackBlitz?

This is possible inside WebContainer-based projects, but not Engineblock-based projects. The easiest way to start is by navigating to node.new, which is create a WebContainer-based project automatically!

### Can I develop ElectronJS apps on StackBlitz?

Since Electron is a native app, this cannot be supported since StackBlitz runs entirely within the browser.





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

### I want to purchase the enterprise edition for WebContainer. Where can I do that?

Bringing Webcontainer to EE (enterprise edition) is in the works, but not currently available. You can reach out to enterprise@stackblitz.com for details.

We do offer [WebContainer API](webcontainers.io) licenses for organizations wanting to use WebContainer technology for production usage in a for-profit setting. Check out [webcontainers.io](webcontainers.io) for more information!