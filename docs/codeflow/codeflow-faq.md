---
title: Codeflow FAQ
---

# {{ $frontmatter.title }}

This page addresses the frequently asked questions concerning: current features, security, planned features, pricing and access.

[[toc]]

## Features

### Can I run Vim?

This is perhaps the most frequently-asked question with regards to StackBlitz features - and [one of the oldest issues on our repository](https://github.com/stackblitz/core/issues/3). We have good news: you can run Vim in Codeflow IDE by enabling the extension! 🥳

### Which repos can/not be opened in Codeflow IDE?

Codeflow IDE should be able to open any repository. When it comes to *running* it, your toolchain needs to be compatible with WebContainers.

### Does any company use Codeflow IDE for their daily development work?

At StackBlitz, we do! We use Codeflow IDE for our internal dev work, including PR reviews. In fact, this docs page has been built in Codeflow IDE.

It's a new product that has just been released so check back here in a few months.

### Which files can be opened in Web Publisher?

Any file type can be opened in Web Publisher.

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Which runtime does Codeflow support?

Codeflow runs on top of [WebContainers](/guides/user-guide/available-environments#webcontainers), which are compatible with Node.js 16.

### Is Codeflow stable?
Codeflow is currently a beta version, however, general availability can be expected in early 2023.

### Do I have to be signed in to use Codeflow IDE? 

Yes, only during the beta. Starting Q1 2023, you'll be able to open public repos without being logged in.

### To open a repo in Codeflow IDE, do I need to be signed in both on StackBlitz and GitHub? Or only one of them?

You need to sign in to StackBlitz *using* GitHub.

### Does my code persist between sessions?

<!--@include: ./parts/persistance.md-->

### What features are you planning to implement?

In the following months, we will focus on implementing the following features:
- **Codeflow IDE:**
    - **change persistence between sessions** - you will be able to close the page, close the browser, and your changes will still be there when you reconvene,
    - **real-time collaboration** - the best setup for pair-programming,
    - **private registries** enabled on our team SaaS plans on stackblitz.com (initially, not on-prem)
- **Web Publisher:**
    - something,
- **CodeflowApp bot:**
    - something.

### Is multiplayer mode in the works?
Yes! Please check our list of [planned features](#what-features-are-you-planning-to-implement).

### Can I run private registries?

Not yet! Private registries are in the project roadmap for Q1/Q2 '23, initially not on-prem but instead enabled on our team SaaS plans on stackblitz.com.

### Can I run private repositories?

Yes. Private repositories are available for free during beta through 2022. Starting Q1 '23 private repositories will require a subscription. Contact us if you’re interested in learning more about pricing.

## Security 

### I would like to use Codeflow but I'm not sure if it's secure.

Since we’re executing the code entirely in the browser's sandbox, Codeflow IDE is actually more secure than running locally. We also use expiring oAuth tokens for interactions with git.

## Pricing and access

### Is Codeflow free?

Codeflow IDE is free for Open Source projects and public repositories and will remain this way forever. This includes private repositories. Please reach out to [devrel@stackblitz.com](mailto:devrel@stackblitz.com) and we’ll get your organization hooked up with free private repos! 

