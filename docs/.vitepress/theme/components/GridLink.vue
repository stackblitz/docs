<script setup lang="ts">
import { computed } from 'vue';
import './GridLink.scss';

const props = defineProps<{
  bgImgLight?: string;
  bgImgDark?: string;
  description: string;
  icon?: 'embed' | 'import' | 'sdk';
  large?: boolean;
  invert?: boolean;
  title: string;
  url: string;
}>();

const style = computed(() => ({
  '--bg-img-dark': props.bgImgDark ? `url(${props.bgImgDark})` : undefined,
  '--bg-img-light': props.bgImgLight ? `url(${props.bgImgLight})` : undefined,
}));
</script>

<template>
  <a
    :class="{
      GridLink: true,
      'GridLink--large': large,
      'GridLink--invert': invert,
    }"
    :style="style"
    :href="url"
  >
    <strong class="GridLink-title" :data-icon="icon">
      {{ title }}
    </strong>
    <span class="GridLink-description">
      {{ description }}
    </span>
  </a>
</template>
