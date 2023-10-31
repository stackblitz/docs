<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;

import Feedback from '@theme/components/Feedback/Feedback.vue';
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>
