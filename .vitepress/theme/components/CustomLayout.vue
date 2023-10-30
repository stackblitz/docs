<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;

import Feedback from '@theme/components/Feedback/Feedback.vue';
import { iconsUrlsStylesheet } from '@theme/icons';

const iconsStylesheet = iconsUrlsStylesheet();
</script>

<template>
  <component is="style">
    {{ iconsStylesheet }}
  </component>
  <Layout>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>
