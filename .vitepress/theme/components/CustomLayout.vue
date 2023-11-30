<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import MaintenanceBanner from './MaintenanceBanner.vue';

const { Layout } = DefaultTheme;

import Feedback from '@theme/components/Feedback/Feedback.vue';
</script>

<template>
  <Layout>
    <template #layout-top>
      <MaintenanceBanner />
    </template>
    <template #doc-footer-before>
      <ClientOnly>
        <Feedback />
      </ClientOnly>
    </template>
  </Layout>
</template>
