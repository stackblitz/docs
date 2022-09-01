<script setup lang="ts">
import { reactive } from 'vue';
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

const style = reactive({
  '--bg-img-dark': props.bgImgDark ? `url(${props.bgImgDark})` : undefined,
  '--bg-img-light': props.bgImgLight ? `url(${props.bgImgLight})` : undefined,
});
</script>

<template>
  <a
    :class="{
      GridLink: true,
      'GridLink--large': props.large,
      'GridLink--invert': props.invert,
    }"
    :style="style"
    :href="props.url"
  >
    <strong class="GridLink-title" :data-icon="props.icon">
      {{ props.title }}
    </strong>
    <span class="GridLink-description">
      {{ props.description }}
    </span>
  </a>
</template>
