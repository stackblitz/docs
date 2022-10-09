---
title: Package Managers
---

# {{ $frontmatter.title }}

This page covers package managers supported in Codeflow IDE and configuration of pnpm overrides.

## Packages supported in Codeflow IDE

<!--@include: ./parts/supported-packages.md-->

## pnpm overrides

Codeflow IDE allows users to specify which packages they want to override in `package.json` and where the packages are located. A pnpm override is what is going to be installed when you run pnpm i instead of what is defined in a package.json file.

:::info pnpm override
A [pnpm override](https://pnpm.io/package_json#pnpmoverrides) "instructs pnpm to override a dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."
:::

### pnpm override use case scenario

For example, an issue is submitted to Vite with a StackBlitz reproduction.
1. A maintainer opens the issue in Codeflow IDE. Codeflow IDE pulls the reproduction that is defined in the issue, puts it in a reproduction folder, and
reads the `codeflow.json` file. 
2. If that file defines an override, Codeflow adds them to the repro’s `package.json` file. So, for example, instead of pulling Vite from npm, it will link the local vite project into that reproduction instead.
3. The maintainer can then run `pnpm i` in the repro and pnpm will install the dependencies defined in the override.

:::tip TL;DR
Using pnpm override, you can fix a bug and immediately try it out in the reproduction the user provided.
:::

### Enabling pnpm overrides

To set up pnpm overrides, follow these steps:

1. In the project's root directory, create `.stackblitz` folder in your root directory.

2. Inside this folder, create a file called `codeflow.json`.

3. In the file, specify the overrides by providing a key-vaue pair of the dependency to override and the folder where it is located.

```json
// .stackblitz/codeflow.json

{
    "pnpm": {
        "overrides": {
            "vite": "./packages/vite"
        }
    }
}
```