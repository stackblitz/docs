<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import Feedback from './Feedback/Feedback.vue';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <ClientOnly>
        <Feedback />
      </ClientOnly>
    </template>
  </Layout>
</template>
