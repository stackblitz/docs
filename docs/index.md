---
layout: page
---

<script setup lang="ts">
import { homeLinks } from './.vitepress/links';
import GridLink from './.vitepress/theme/components/GridLink.vue';
</script>

<ul class="GridLinkGrid">
  <li v-for="link in homeLinks" :class="{ 'GridLinkItem': true, 'GridLinkItem--large': link.large }">
    <GridLink v-bind="link as any" />
  </li>
</ul>
