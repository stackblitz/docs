---
layout: page
title: StackBlitz Docs
og_image: index
---

<script setup lang="ts">
import Home from '@theme/components/Home.vue';

import { homeTopLinks, homeExternalLinks, footerSections } from './links';
</script>

<Home
  :topLinks="homeTopLinks"
  :externalLinks="homeExternalLinks"
  :footerSections="footerSections"
/>
