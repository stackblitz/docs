<script setup lang="ts">
import CardLink from './CardLink.vue';

defineProps<{ links: any[] }>();
</script>

<template>
  <ul class="GridLinks">
    <li
      v-for="link in links"
      :class="{ 'GridLinks-item': true, 'GridLinks-item--large': link.large }"
    >
      <CardLink v-bind="link" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '../styles/vars';

.GridLinks {
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 24px;
  list-style: none;

  @media (min-width: $bp-medium) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: $bp-large) {
    grid-template-columns: repeat(6, 1fr);
    .GridLinks-item {
      grid-column: span 2;
    }
    .GridLinks-item--large {
      grid-column: span 3;
    }
  }
}
</style>
