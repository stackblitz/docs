---
title: Integrating CodeflowApp Bot
---

# {{ $frontmatter.title }}

This page covers integrating CodeflowApp Bot into your project.

## What is CodeflowApp Bot?

<!--@include: ./parts/codeflowapp-bot.md-->

## Integrating CodeflowApp Bot

To integrate CodeflowApp bot, you will install it using GitHub UI. Follow this step by step guide:

1. Visit [CodeflowApp profile on GitHub Apps](https://github.com/apps/codeflowapp)
2. Click ""
TBA



- SELECT THE REPOS YOU WANT TO GIVE ACCESS TO. This is what we recommend. If you choose “all in org”, the pr bot will install on all repos in your org.
- Installing bot ensures every commit to default branch and any pull request branches are pre-cloned for instant bootup times. (Note: this is something anyone integrating publisher should have installed on their repo).

## Disabling CodeflowApp Bot

Once installed, the bot will be enabled by default on the repository and will be triggered whenever there is a new PR or an issue.

To disable the bot:


1. Create `.stackblitz` folder in the root directory of the project.
2. Inside this folder, create a file called `codeflow.json`, specifying which actions you want disabled:

```json
// .stackblitz/codeflow.json

"bot": {
    "issues": {
        "enabled": false
    }
}
```

