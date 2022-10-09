---
title: Package Managers
---

# {{ $frontmatter.title }}

This page covers package managers supported in Codeflow IDE and configuration of pnpm overrides.

## Packages supported in Codeflow IDE

<!--@include: ./parts/supported-packages.md-->

## Enabling pnpm overrides

As per [pnpm documentation](https://pnpm.io/package_json#pnpmoverrides), this option "allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."

Codeflow IDE allows users to specify which packages they want to override in `package.json` and where the packages would be present. A pnpm override is what is going to be installed when you run pnpm i instead of what is defined in a package.json file.

Follow the following steps to configure pnpm overrides for your project.

### 1. In the project's root directory, create `.stackblitz` folder in your root directory.

### 2. Inside this folder, create a file called `codeflow.json`.

### 



## Integrating StackBlitz Staging Bot
<!-- steps with screenshots -->

## Opting Out of StackBlitz Staging Bot
<!-- steps with screenshots -->