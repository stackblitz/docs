<script setup lang="ts">
import Footer from './Footer.vue';
import CardGrid from './CardGrid.vue';
import HomeIntro from './HomeIntro.vue';

import type { CardLink, FooterSection } from '@theme/data/types';

defineProps<{
  topLinks: CardLink[];
  externalLinks: CardLink[];
  footerSections: FooterSection[];
}>();
</script>

<template>
  <div class="top-section">
    <HomeIntro />
    <CardGrid :links="topLinks" />
  </div>
  <div class="external-links">
    <h2>Learn More</h2>
    <CardGrid :links="externalLinks" />
  </div>
  <Footer :sections="footerSections" />
</template>

<style scoped lang="scss">
.top-section {
  padding-bottom: 60px;
}

.external-links {
  padding-bottom: 60px;

  :root.dark & {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) 360px);
  }

  h2 {
    margin-bottom: 40px;
    padding: 0 24px;
    text-align: center;
    font-family: Gilroy, var(--vp-font-family-base);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
  }

  @media (min-width: 680px) {
    padding-top: 20px;
    padding-bottom: 80px;
    h2 {
      margin-bottom: 50px;
      font-size: 28px;
    }
  }
}
</style>
