---
title: Getting started
description: Starter projects are online playgrounds, typically built by the core team of a given project and run on StackBlitz.
og_image: starter-projects.png
---

<script setup lang="ts">
import StarterGrid from '@theme/components/StarterGrid.vue';
import { dotNewLinks } from './starters';
</script>

# {{ $frontmatter.title }}

<!-- @include: ./parts/stackblitz-description.md -->

<hr >

### Framework-specific starters
Open source projects that provide a custom URL as a convenient starting point for your next projects.

<StarterGrid :links="dotNewLinks" />

## What are starter projects?

Great question! Starter projects are online playgrounds, typically built by the core team of a given project and run on StackBlitz. They are used in project documentation or found under [a custom link](#framework-specific-starter). You can find some of them on our dashboard. Some open source projects provide a custom URL as a convenient starting point for their starter projects.

![Project Starter Dashboard](./assets/new-project.png)

## Adding a new starter project

If you'd like to see a new starter, please follow the directions on [this page in the integration guide](/guides/integration/open-from-github#set-up-the-main-starter-url).