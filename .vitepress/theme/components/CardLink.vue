<script setup lang="ts">
import { computed } from 'vue';

import SvgIcon from '@theme/components/Icons/SvgIcon.vue';

const props = defineProps<{
  bgImgLight?: string;
  bgImgDark?: string;
  description: string;
  icon?: string;
  large?: boolean;
  title: string;
  url: string;
}>();

const hasBackgroundImage = computed(() => Boolean(props.bgImgDark && props.bgImgLight));

const imageStyle = computed(() => ({
  '--bg-dark': props.bgImgDark ? `url(${props.bgImgDark})` : undefined,
  '--bg-light': props.bgImgLight ? `url(${props.bgImgLight})` : undefined,
}));
</script>

<template>
  <a
    :class="{ link: true, link_large: large, link_bg: hasBackgroundImage }"
    :style="hasBackgroundImage ? imageStyle : undefined"
    :href="url"
  >
    <strong class="title">
      <SvgIcon v-if="icon" :icon="icon" class="icon" />
      {{ title }}
    </strong>
    <span class="description">
      {{ description }}
    </span>
  </a>
</template>

<style scoped lang="scss">
.link {
  --icon-color: var(--sb-foreground-highlight);
  --card-padding-base: 20px 24px 24px;
  --card-padding-large: 20px 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 144px;
  border-radius: 8px;
  border: solid 2px hsl(200 30% 40% / 0.15);
  padding: var(--card-padding-base);
  // Bit of a specificity battle going on with theme styles
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transform: translateZ(0); // fixes opacity flicker when other elements are hovered :|

  @media (min-width: 680px) {
    --card-padding-base: 28px 36px 32px;
    --card-padding-large: 28px 36px 32px;
  }
  @media (min-width: 960px) {
    --card-padding-large: 44px 60px;
  }
  @media (min-width: 1200px) {
    --card-padding-base: 32px 48px 36px;
    --card-padding-large: 60px 72px;
    border-radius: 12px;
  }

  &:hover {
    --icon-color: currentColor !important;
    border-color: var(--sb-foreground-highlight-high);
    transform: translateY(-2px);
  }

  &:focus-visible {
    --icon-color: currentColor !important;
    outline: solid 2px var(--sb-foreground-highlight-high);
    outline-offset: -2px;
  }
}

.link_bg {
  background-origin: border-box;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  :root:not(.dark) & {
    background-image: var(--bg-light);
  }
  :root.dark & {
    background-image: var(--bg-dark);
  }
}

.title {
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  margin-bottom: 14px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: var(--vp-c-text-1);
}

.icon {
  margin-left: -2px;
  margin-right: 12px;
  color: var(--icon-color, currentColor);
  transition: color 0.1s ease;
}

.description {
  display: block;
  max-width: 20em;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.52;
  color: var(--vp-c-text-2);
  transition: color 0.1s ease;

  .link:hover &,
  .link:focus & {
    color: var(--vp-c-text-1);
  }
}

// Specific style for large cards,
// on large screens only
@media (min-width: 960px) {
  .link_large {
    padding: var(--card-padding-large);

    .title {
      margin-bottom: 22px;
      padding-bottom: 5px;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0;
    }
    .title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--sb-foreground-highlight-high);
      transition: width 0.1s ease;
    }
    &:hover .title::after,
    &:focus .title::after {
      width: 100%;
    }
    .description {
      // Reserve 4 lines
      min-height: calc(1.6 * 4em);
      font-size: 14px;
      line-height: 1.6;
    }
  }
}
</style>
