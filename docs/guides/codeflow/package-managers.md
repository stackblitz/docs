---
title: Package Managers
---

# {{ $frontmatter.title }}

This page walks you through reviewing PRs on Codeflow.




1. Create `.stackblitz` folder in your root directory
2. Inside this folder, create two files: `stackblitz.json` and `codeflow.json`

stackblitz.json is a 1:1 replacement for .stackblitzrc so you no longer need the .rc file in your root dir. If you do, however, the .rc file takes precedence. However, the stackblitz.json is a recommended path moving forward.

codeflow.json
- bot
- pnpm


bot:
we enable the bot by default
if you install it in your repositories, it will be triggered by WHAT 

To disable it:
in the codeflow.json, you'll write

"bot": {
    "issues": {
        "enabled": false
    }
} 


pnpm:
pnpm has a cool feature where you can override existing packages
in the codeflow.json we allow users to say which packages they want to override in package.json and what folders they would be present

### `codeflow.json`


## Integrating StackBlitz Staging Bot
<!-- steps with screenshots -->

## Opting Out of StackBlitz Staging Bot
<!-- steps with screenshots -->