---
title: Codeflow FAQ
---

# {{ $frontmatter.title }}

На этой странице рассматриваются часто задаваемые вопросы: текущие возможности, безопасность, планируемые возможности, цены и доступ.

[[toc]]

## Общий

### Что такое Codeflow?

<!--@include: ./parts/codeflow.md--> Codeflow consists of four tools: 
- Codeflow IDE, 
- Web Publisher for content edits, 
- CodeflowApp bot for issues and PR, and 
- a short URL that chooses the right tool for you.

[Read more on Codeflow intro page.](./what-is-codeflow.md)

### Is StackBlitz editor the same as Codeflow IDE?

**StackBlitz editor** allows you for spinning up quick demos, embedding your projects in your docs, and building project starters. 

<!--@include: ./parts/codeflow-ide.md-->

[Learn more about the full potential of StackBlitz on StackBlitz intro page.](/guides/user-guide/what-is-stackblitz.md)

### Is Codeflow stable?
Codeflow is currently a beta version, however, general availability can be expected in early 2023.

## Capabilities & Limitations

### Can I run Vim?

This is perhaps the most frequently-asked question with regards to StackBlitz features - and [one of the oldest issues on our repository](https://github.com/stackblitz/core/issues/3). We have good news: you can run Vim in Codeflow IDE by enabling the extension! 🥳

### Does my code persist between sessions?

<!--@include: ./parts/persistance.md-->

### Which repos can/not be opened in Codeflow IDE?

Codeflow IDE should be able to open any repository. When it comes to *running* it, your toolchain needs to be compatible with WebContainers.

### Can I run private repositories?

Yes. Private repositories are available for free during beta through 2022. Starting Q1 '23 private repositories will require a subscription. Contact us if you’re interested in learning more about pricing.

### Can I run any Git repository?

At this moment we only support GitHub.com repositories.

### Which files can be opened in Web Publisher?

Any file type can be opened in Web Publisher.

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Which runtime does Codeflow support?

Codeflow runs on top of [WebContainers](/guides/user-guide/available-environments#webcontainers), which currently support **Node.js 16**.

### Does any company use Codeflow IDE for their daily development work?

At StackBlitz, we do! We use Codeflow IDE for our internal dev work, including PR reviews. In fact, this docs page has been built in Codeflow IDE.

It's a new product that has **just** been released so check back here in a few months.

## Security 

### I would like to use Codeflow but I'm not sure if it's secure.

Since we’re executing the code entirely in the browser's sandbox, Codeflow IDE is actually more secure than running locally. We also use expiring oAuth tokens for interactions with git.

## Pricing and access

### Is Codeflow free?

Codeflow IDE is free for Open Source projects and for public repositories and will remain this way forever. This includes private repositories. Please reach out to [devrel@stackblitz.com](mailto:devrel@stackblitz.com) and we’ll get your organization hooked up with free private repos!

If your company is interested in using Codeflow, reach out to our [Enterprise Team](https://stackblitz.com/beta-teams-signup).

### Do I have to be signed in to use Codeflow IDE? 

Yes, only during the beta. Starting Q1 2023, you'll be able to open public repos without being logged in.

### To open a repo in Codeflow IDE, do I need to be signed in both on StackBlitz and GitHub? Or only one of them?

You need to sign in to [StackBlitz](https://stackblitz.com) *using* GitHub.
