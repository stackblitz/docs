---
layout: page
---

<script setup lang="ts">
import { footerSections, homeLinks } from './.vitepress/links';
import Footer from './.vitepress/theme/components/Footer.vue';
import GridLink from './.vitepress/theme/components/GridLink.vue';
</script>

<ul class="GridLinkGrid">
  <li v-for="link in homeLinks" :class="{ 'GridLinkItem': true, 'GridLinkItem--large': link.large }">
    <GridLink v-bind="link as any"></GridLink>
  </li>
</ul>

<Footer :sections="footerSections"></Footer>
