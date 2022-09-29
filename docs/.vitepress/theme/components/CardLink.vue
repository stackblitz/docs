<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  bgImgLight?: string;
  bgImgDark?: string;
  description: string;
  icon?: 'embed' | 'import' | 'sdk';
  large?: boolean;
  title: string;
  url: string;
}>();

const hasBackgroundImage = computed(() => Boolean(props.bgImgDark && props.bgImgLight));
const backgroundStyle = computed(() => ({
  '--bg-img-dark': `url(${props.bgImgDark})`,
  '--bg-img-light': `url(${props.bgImgLight})`,
}));
</script>

<template>
  <a
    :class="{ CardLink: true, 'CardLink--large': large, 'CardLink--bg': hasBackgroundImage }"
    :style="hasBackgroundImage ? backgroundStyle : undefined"
    :href="url"
  >
    <strong class="CardLink-title" :data-icon="icon">
      {{ title }}
    </strong>
    <span class="CardLink-description">
      {{ description }}
    </span>
  </a>
</template>

<style scoped lang="scss">
@import './vars';

.CardLink {
  --icon-color: var(--vp-c-brand-lighter);
  --icon-color: var(--sb-foreground-highlight);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  border-radius: 8px;
  border: solid 2px hsl(200 30% 40% / 0.15);
  padding: 20px 24px 24px;
  // Bit of a specificity battle going on with theme styles
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transform: translateZ(0); // fixes opacity flicker when other elements are hovered :|

  @media (min-width: $bp-medium) {
    padding: 32px 40px 36px;
  }
  @media (min-width: $bp-large) {
    padding: 32px 48px 36px;
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

.CardLink--bg {
  background-origin: border-box;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  :root:not(.dark) & {
    background-image: var(--bg-img-light);
  }
  :root.dark & {
    background-image: var(--bg-img-dark);
  }
}

.CardLink-title {
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

  &[data-icon='embed'] {
    --icon-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 14 18"><path d="M5.4651 12.2742L5.45781 12.2671L4.26198 11.2513L5.45781 10.2355C5.58906 10.123 5.60365 9.92619 5.48698 9.79965L5.47969 9.79262L4.84531 9.13884C4.72135 9.0123 4.51719 9.00879 4.39323 9.12478L2.28958 11.0264C2.15469 11.1494 2.15469 11.3568 2.28958 11.4763L4.39323 13.3779C4.45156 13.4306 4.53177 13.4622 4.61198 13.4622C4.69948 13.4622 4.78698 13.4271 4.84531 13.3638L5.47969 12.71C5.6 12.587 5.59271 12.3902 5.4651 12.2742ZM13.4859 3.44464L10.4271 0.495606C10.099 0.179262 9.65417 0 9.19115 0H1.75C0.783854 0.00351494 0 0.759227 0 1.69069V16.3128C0 17.2443 0.783854 18 1.75 18H12.25C13.2161 18 14 17.2443 14 16.3128V4.63972C14 4.19332 13.8141 3.76098 13.4859 3.44464ZM9.33333 1.82777L12.1078 4.50264H9.33333V1.82777ZM12.25 16.3128H1.75V1.69069H7.58333V5.34622C7.58333 5.81371 7.97344 6.18981 8.45833 6.18981H12.25V16.3128ZM7.64167 7.52548C7.47031 7.47627 7.29531 7.57118 7.24427 7.73638L5.25 14.348C5.19896 14.5132 5.2974 14.6854 5.46875 14.7311L6.35833 14.9807C6.52969 15.0299 6.70833 14.9315 6.75573 14.7698L8.75 8.15466C8.80104 7.98946 8.7026 7.81722 8.53125 7.77153L7.64167 7.52548ZM8.5349 10.2285L8.54219 10.2355L9.73802 11.2513L8.54219 12.2671C8.41094 12.3796 8.39635 12.5765 8.51302 12.703L8.52031 12.71L9.15469 13.3638C9.275 13.4868 9.47917 13.4939 9.60677 13.3779L11.7104 11.4763C11.8453 11.3533 11.8453 11.1459 11.7104 11.0264L9.60677 9.12478C9.47917 9.00879 9.275 9.0123 9.15469 9.13884L8.52031 9.79262C8.4 9.91564 8.40729 10.1125 8.5349 10.2285Z"/></svg>');
  }
  &[data-icon='import'] {
    --icon-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 18 18"><path d="M17.5018 3.44461L14.5526 0.495703C14.2362 0.179297 13.8073 0 13.3611 0H6.18715C5.25586 0.00351563 4.5 0.759375 4.5 1.69066V9.28371H0.421875C0.188789 9.28371 0 9.4725 0 9.70559V10.5493C0 10.7824 0.188789 10.9712 0.421875 10.9712H10.125V12.6896C10.125 13.0662 10.581 13.2539 10.8464 12.9867L13.3696 10.4446C13.5436 10.2691 13.5436 9.98613 13.3696 9.8107L10.8464 7.26855C10.581 7.00137 10.125 7.1891 10.125 7.56562V9.28406H6.18715V1.69066H11.8111V5.34621C11.8111 5.81379 12.1873 6.18961 12.6548 6.18961H16.3125V16.3129H6.18715V12.6587H4.5V16.3129C4.5 17.2441 5.25586 18 6.18715 18H16.31C17.2417 18 18 17.2441 18 16.3129V4.63957C18 4.19344 17.8182 3.76102 17.5018 3.44461ZM13.4982 4.50246V1.82777L16.1733 4.50246H13.4982Z"/></svg>');
  }
  &[data-icon='sdk'] {
    --icon-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"  viewBox="0 0 19 13"><path d="M7.65882 6.91563L1.88927 12.6272C1.61101 12.9026 1.15988 12.9026 0.881644 12.6272L0.208689 11.961C-0.0690971 11.686 -0.0696315 11.2403 0.207501 10.9647L4.78003 6.41687L0.207531 1.86907C-0.0696018 1.59343 -0.0690674 1.14775 0.208718 0.872757L0.881644 0.206597C1.15991 -0.0688657 1.61104 -0.0688657 1.88927 0.206597L7.65882 5.91814C7.93708 6.19357 7.93708 6.64017 7.65882 6.91563ZM19 12.2947V11.3542C19 10.9647 18.681 10.6489 18.2875 10.6489H9.26251C8.869 10.6489 8.55001 10.9647 8.55001 11.3542V12.2947C8.55001 12.6842 8.869 13 9.26251 13H18.2875C18.681 13 19 12.6842 19 12.2947Z"/></svg>');
  }
  &[data-icon]::before {
    content: '';
    display: block;
    flex: none;
    width: 18px;
    height: 18px;
    margin-left: -2px;
    margin-right: 14px;
    background-color: var(--icon-color, currentColor);
    transition: background-color 0.1s ease, opacity 0.1s ease;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    -webkit-mask-image: var(--icon-image);
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-image: var(--icon-image);
  }
}

.CardLink-description {
  display: block;
  max-width: 20em;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.52;
  color: var(--vp-c-text-2);
  transition: color 0.1s ease;

  .CardLink:hover &,
  .CardLink:focus & {
    color: var(--vp-c-text-1);
  }
}

// Specific style for large cards,
// on large screens only
@media (min-width: $bp-large) {
  .CardLink--large {
    padding: 60px 72px;

    .CardLink-title {
      margin-bottom: 22px;
      padding-bottom: 5px;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0;
    }
    .CardLink-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--vp-c-brand-light);
      transition: width 0.1s ease;
    }
    &:hover .CardLink-title::after,
    &:focus .CardLink-title::after {
      width: 100%;
    }
    .CardLink-description {
      // Reserve 4 lines
      min-height: calc(1.6 * 4em);
      font-size: 14px;
      line-height: 1.6;
    }
  }
}
</style>
