---
title: FAQs (Frequently Asked Questions)
description: This page outlines commonly asked questions and answers about StackBlitz.
og_image: general-faqs.png
---

# Frequently asked questions

This page outlines commonly asked questions and answers about StackBlitz. If you have questions that aren't addressed on this page, contact us at [hello@stackblitz.com](mailto:hello@stackblitz.com).

## General FAQs

### What is the difference between the legacy and next-generation editors?

StackBlitz's classic editor is the original StackBlitz interface. The legacy editor includes a file tree, an npm package manager, and a light dev server and preview pane that allows you to see your app as you code.

The legacy editor is compatible with both EngineBlock and WebContainers compute environments.

StackBlitz's next-generation, WebContainers-backed editor enables you to use your VS Code extensions, keybindings, and customizations in a familiar interface. WebContainers also enables a full terminal and Node 18 development environment.

### How do I change the editor my project opens in?


### How do I select my default editor?


### Why can't I see my terminal?

Please note that the terminal is only available for WebContainer-based projects. You can use the keyboard binding `^` `` ` `` (the caret and the back quote keys) to toggle the terminal. 

If you are unsure which envronment you are using, review our documentation on the [environments available in StackBlitz](https://developer.stackblitz.com/guides/user-guide/available-environments).

### What is the difference between EngineBlock and WebContainers?

[EngineBlock](https://developer.stackblitz.com/guides/user-guide/available-environments#engineblock) is StackBlitz's legacy compute environment, first introduced in 2017. It operates as a lightweight custom runtime built on top of SystemJS and is focused solely on supporting popular front-end frameworks and libraries.

Projects using EngineBlock can be embedded in blogs, documentation, and other web-based mediums, making it an excellent tool for tutorials, demos, and code samples.

EngineBlock is only available in StackBlitz's legacy editor.

[WebContainers](https://developer.stackblitz.com/guides/user-guide/available-environments#webcontainers) is our next-generation compute environment, launched in May 2021. 

Unlike EngineBlock, WebContainers provides a full Node.js environment, capable of running full-stack web applications. WebContainers is the default runtime for all new StackBlitz projects. 

For more information on the differences between each compute environment, including how to determine which environment your project is using, refer to the documentation on [available environments](https://developer.stackblitz.com/guides/user-guide/available-environments).

### Why do I have to re-authorize StackBlitz to access GitHub repositories?

As of September 27th, 2023, we started migrating from GitHub's OAuth app to their GitHub App. We received a lot of feedback from users saying that they didn't like the "*all* or nothing" approach that GitHub's OAuth app takes so we've started switching over to the GitHub app itself which allows granularity on a per-repository basis.

To ensure a smooth migration, we converted our "Codeflow bot" app into a "StackBlitz" app. Additionally, we made necessary adjustments to the permissions to enable us to:
- Create repositories and manage
- Import teams to StackBlitz
- Login to StackBlitz

If you have any questions about this process feel free to reach out to [hello@stackblitz.com](mailto:hello@stackblitz.com)

## Integrations and compatibility

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Can I run Vim?

Previously our most-requested features and [one of the oldest issues on our repository](https://github.com/stackblitz/core/issues/3), Vim is now supported in our next-generation editor by adding it using the "Extensions" menu.

### Can I open private GitHub repositories in StackBlitz?

Yes. Private repositories can be opened in StackBlitz. 

You can open and edit private repositories owned by your GitHub user with any StackBlitz plan. However, to collaborate on private repositories you do not own or to access private repositories owned by your GitHub organization, you will need a [paid StackBlitz plan](https://stackblitz.com/pricing/).

If you experience issues accessing a repository in StackBlitz, ensure your GitHub user has permission to access the repository in the repository's settings in GitHub.

### Which git providers does StackBlitz support?

All StackBlitz users can use GitHub. StackBlitz Enterprise customers can integrate with GitHub, GitLab, and Bitbucket.

### What type of repositories can be opened in StackBlitz?

You can open any repository in StackBlitz. However, StackBlitz's WebContainers compute envronment can only *run* repositories compatible with Node.js. 

### Can I use tools like Postman for testing?

[Postman](https://www.postman.com/automated-testing/) and similar tools will not work since the server is unreachable outside of the browser. As an alternative, you could run a node program that makes requests for testing.

### What are the deploy options available on StackBlitz? 

There are multiple options for deploying projects in StackBlitz:

*Recommended:*

If you are using StackBlitz's next-generation editor, you can sync code directly with GitHub and then use tools like [Netlify](https://github.com/apps/netlify) or [Vercel](https://vercel.com/docs/concepts/git/vercel-for-github) to deploy your site from GitHub.

*For StackBlitz projects using the legacy editor:*

1. Download the project to your local machine by clicking the button right underneath the "Share" dialogue. From there, you can deploy manually.

2. For projects using EngineBlock, you can deploy to Firebase using the [Firebase integration](https://developer.stackblitz.com/guides/user-guide/user-interface#firebase-sidebar).

3. Create a GitHub repository witn the code from your StackBlitz project using the "Create a repository" button.
![Connect repository button on StackBlitz editor](./assets/stackblitz_connecttorepobutton.png)

### Are MongoDB, Mongoose, Postgres, or MySQL supported?

Currently, direct TCP database connections are not supported. However, API-based database providers like [Neon](https://neon.tech/) can be used with StackBlitz.

### Can I run unit tests in StackBlitz?

WebContainer-based projects can run any Node compatible testing tooling.

### Can I develop ElectronJS apps on StackBlitz?

No, since Electron is a native app, it is not supported by StackBlitz's browser-based compute model.

## Security

### I would like to use Stackblitz but I'm not sure if it's secure.

StackBlitz is regarded as more secure than local development as all code is executed entirely within the browser. If you have specific questions about StackBlitz's security design and practices, [contact us directly](mailto:hello@stackblitz.com).


## Plans and billing

### How do I view my invoice?

You can view your past invoices and other billing information in your [Billing settings](https://stackblitz.com/settings/billing).

::: tip
**StackBlitz Enterprise customers:** Contact your account manager for billing inquiries.
:::

### What is StackBlitz Personal?

StackBlitz Personal is StackBlitz's free tier. With a Personal plan, you can create unlimited public projects. Additionally, you can create private projects for your personal use. Personal users can access public GitHub repositories. 

When you log into StackBlitz for the first time using your GitHub account, you are automatically on a Personal plan.

### What is StackBlitz Personal+?

StackBlitz Personal+ (formerly known as the Astronaut Plan) includes all of the capabilities of the Personal plan and also includes:
- unlimited file uploads
- shareable private projects

This plan is ideal for individual contributors, students, or developers working on singular projects, or engineering candidates. 

### What is StackBlitz Teams?

[StackBlitz Teams](/teams/what-is-stackblitz-teams) allows users to share features amongst members of their GitHub organization. 

Features and highlights of this plan include:
- Collaborate on projects and collections
- Open and collaborate on your organization’s GitHub repositories
- Integrate with private NPM registries, Artifactory, and Nexus
- Sync user permissions from your GitHub organization
- Team management and billing console

To try StackBlitz Teams, [start a 14-day free trial](https://stackblitz.com/pricing). You will not be required to add a payment method until you are ready to upgrade.

### What is StackBlitz Enterprise Server?

Enterprise Server is a fully self-hosted build of StackBlitz, enabling organizations to run StackBlitz behind their firewall. 

StackBlitz Enteprise subscriptions include:
- Private NPM registry integration
- Custom SSO integration
- On-prem installation support
- Dedicated account manager

[Learn more about StackBlitz Enterprise](https://stackblitz.com/enterprise). For pricing information and details specific to your organization, set up a call with our team.

### I want to purchase the enterprise edition for WebContainers. Where can I do that?

Bringing WebContainers to Enterprise Server is in the works, but not currently available. You can reach out to enterprise@stackblitz.com for details.

We do offer [WebContainer API](https://webcontainers.io) licenses for organizations wanting to use WebContainer technology for production usage in a for-profit setting. Check out [webcontainers.io](https://webcontainers.io/enterprise) for more information!

## Technical FAQs

### How do I create code snippets?

Code snippets are available in our Classic Editor for both EngineBlock and WebContainer projects. Click on the Settings icon in the activity bar to the left of your screen. The Settings sidebar will pop open and you will see User snippets and Workspace snippets. User snippets are available for any of your projects. Workspace snippets are only available in the current project you create them in.

### Can I change the Node version in my project?

WebContainers currently runs Node 18. [In future, we plan to support multiple Node versions.](https://developer.stackblitz.com/platform/webcontainers/roadmap)

### Can I change the TypeScript version in my project?

The current TypeScript starter uses EngineBlock technology, which has a fixed TypeScript version. EngineBlock is great for lightweight frontends, but does not run Node.js itself and will be limited to things like TypeScript versioning.

WebContainers, however, do run Node.js itself in the browser and do not have this limitation. You can simply `npm install` any TypeScript version as you would locally.

### Does my code persist between sessions?

<!--@include: ./parts/persistance.md-->

### What is the StackBlitz SDK?

Our [JavaScript SDK (software development kit)](https://developer.stackblitz.com/platform/api/javascript-sdk) allows users to create Classic Editor projects to be opened in a new window or embedded in your docs, example pages, or blog posts. The SDK can be used to control the UI of an embedded StackBlitz project, change the currently open file(s), and read and write files from the project's virtual filesystem.

Details on embed options can be found [here](https://developer.stackblitz.com/platform/api/javascript-sdk).

## WebContainers

### What is the WebContainer API?

The [WebContainer API](https://webcontainers.io/api) allows developers to create fullstack Node.js environments in the browser.

### Can I use the WebContainers API for commercial purposes?

Using the WebContainers API for commercial purposes requires a paid StackBlitz subscription.

All StackBlitz Teams and Enterprise plans include 10,000 WebContainers API calls per month. Use in excess of this limit requires a dedicated WebContainers API license. For more information, refer to our [terms of service](https://stackblitz.com/terms-of-service).

If you are considering using the WebContainers API, [please reach out to our team](https://docs.google.com/forms/d/e/1FAIpQLSertiZLl-za0ZHxsWbd2IrISVft2OpPglykEHpEllPSfnZIUg/viewform) to discuss your project.


## Web Publisher

### What is Web Publisher?

Web Publisher is a single file editor and publishing tool that can be used for smaller or text-based changes such as editing documentation or blogs. Web Publisher uses Codeflow technology that allows users to create, push, and publish changes all in their browser. The GitHub integration creates a seamless workflow that's fit for developers and non-coding folks alike!

This environment is ideal for:
- No-tech or low-tech users
- Text or formatting changes in documentation or blogs
- Quick fixes that don't require dependency or compilation changes

You can learn more about Web Publisher [here](https://developer.stackblitz.com/guides/user-guide/content-updates-with-web-publisher).

### Which files can be opened in Web Publisher?

Any file type can be opened in Web Publisher.
