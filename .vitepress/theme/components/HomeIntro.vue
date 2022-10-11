<script setup lang="ts">
import BooksIcon from './BooksIcon.vue';
</script>

<template>
  <header>
    <BooksIcon class="icon" />
    <h1>StackBlitz Documentation</h1>
    <p>
      Discover how to use StackBlitz, an online development environment for frontend, Node.js and
      the JavaScript ecosystem.
    </p>
  </header>
</template>

<style scoped lang="scss">
@import '../styles/vars';

header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 20px 60px;
  text-align: center;

  @media (min-width: 960px) {
    padding-top: 40px;
    padding-bottom: 100px;
  }
}

$icon-mask: linear-gradient(to bottom, #fff9 10%, #fffa 30%, #fff0 74%);

header .icon {
  width: 160px;
  height: 160px;
  color: var(--sb-foreground-highlight);
  -webkit-mask-image: $icon-mask;
  mask-image: $icon-mask;

  @media (prefers-contrast: more) {
    display: none;
  }

  @media (min-width: $bp-medium) {
    width: 200px;
    height: 200px;
  }
}

header h1 {
  margin-top: -15px;
  margin-bottom: 0;
  font-family: Gilroy, var(--vp-font-family-base);
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;

  @media (min-width: 960px) {
    margin-top: -25px;
    font-size: 48px;
    line-height: 1;
  }
}

header p {
  margin: 0.75em 0 0;
  font-size: 16px;
  line-height: 1.4;

  @media (min-width: 960px) {
    font-size: 18px;
  }
}
</style>
