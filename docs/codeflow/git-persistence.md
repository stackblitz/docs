---
title: Git projects and persistence
description: 'How persistence works in the StackBlitz editor for Git repositories'
og_image: what-is-codeflow.png
---

# {{ $frontmatter.title }}

The StackBlitz editor has some differences with respect to _persistence_ (whether and how we store your changes) between _projects_ and Git repositories.

## Default mode

In its default mode, the StackBlitz editor **does _not_ store your changes** when you open a Git repository (for instance, https://stackblitz.com/~/github.com/vitejs/vite). You can edit files, create new commits and push them to a remote. However, any intermediate changes that are not pushed will be lost after reloading the page. The editor shows a prominent warning to remind you when persistence is off.

 This is in constrast with _projects_, which always keep your changes stored in the StackBlitz backend. The rough rationale for this difference in behavior is that, for Git-based projects, the ultimate goal is to push some new changes into a remote that already exists. This remote ultimately acts as your storage.

## Persistence in Git repositories

As a convenience, the StackBlitz editor _does_ persist your changes in some scenarios, even when working on Git repositories. The "rules" are:

* You should be logged in, and
* You should have push permissions for the repository, and
* You should not be working on the default branch.

These conditions should enable you to leverage persistence in the commmon use case of working on a feature branch, either in a repository of yours or a fork of a project that you want to contribute to.

The last condition is not as strict as the others: when you are in the default branch, you can opt-in into persisting your changes.

We might relax these conditions on the future and enable persistence in more scenarios.

## Branching model

For Git-based projects, the StackBlitz editor establishes a one-to-one relation between your URL and the branch that you are working on. You can create new branches, push them to a remote, etc. But working on a different branch, that is, in Git parlance, _checking out_ a different branch requires you to **navigate to its corresponding URL**, in your current tab or a new one.

For instance, if you open the repository for these docs, you would go to

> https://stackblitz.com/~/github.com/stackblitz/docs.

If you change branches through the branch picker or the editor command `Checkout to...`, you will be prompted to navigate away to the corresponding URL, for instance

> https://stackblitz.com/~/github.com/stackblitz/docs/tree/foobar

for a branch named `foobar`.

## Merging conflicts

If you work on a certain branch and persistence is enabled (as described above), the StackBlitz editor stores your intermediate changes not yet pushed to a remote. If you open the same branch at a later point, new commits from the remote could conflict with your stored changes. When this happens, the editor presents several ways to deal with this situation:

* Discard your old changes and start working fresh again from the latest commit.
* Push your ongoing changes to an intermediate branch and create a pull request.

We are looking into enabling more sophisticated conflict resolution strategies.
