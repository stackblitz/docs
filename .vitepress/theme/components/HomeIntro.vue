<template>
  <header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" fill="currentColor" class="icon">
      <path
        fill-rule="evenodd"
        d="M573.44 215.84a8.26 8.26 0 0 1 3.66 14.36l-26.31 22.48v44.37l3.43.71a8.27 8.27 0 0 1 3.67 14.36L365.63 476.35a8.35 8.35 0 0 1-7.04 1.8l-10.45-2.2h-.05a.2.2 0 0 0-.04-.02L55.5 414.55c-1.17-.27-2.55-1-3.24-1.47-.8-.56-19.12-14.65-19.43-45.62-.3-28.47 14.63-38.75 18.73-41.04l9.89-6.89c-4.68-7.45-9.25-18.64-9.4-33.99-.1-8.87 1.3-15.92 3.38-21.55l-12.76-2.68a8.57 8.57 0 0 1-3.25-1.46c-.78-.6-19.1-14.65-19.43-45.62-.28-28.52 14.67-38.78 18.75-41.04l216.08-150.7a8.18 8.18 0 0 1 6.19-1.35l278.86 50.31a8.26 8.26 0 0 1 3.9 14.4l-6.36 5.42.02.92-.02 44.32 34.51 6.27a8.25 8.25 0 0 1 3.9 14.38l-6.15 5.25v52.65l3.76.78Zm-221.93 34.24a8.25 8.25 0 0 1-5.36 1.98c-.5 0-1-.07-1.52-.16v55.84l176.4-150.03v-52.43L351.5 250.08Zm-23.4-1.62L51.51 190.42v55.93l276.58 57.92v-55.81ZM64.35 343.65v55.89l276.57 58.04V401.7L64.36 343.65Zm19.35-73.72v47.75l276.44 57.97v-55.87l-2.76-.58-4.58 3.92a8.31 8.31 0 0 1-7.05 1.8l-10.45-2.2-.09-.02-251.51-52.77Zm273.81 191.14 176.77-150.49v-43.86L384.84 394.44a8.3 8.3 0 0 1-5.36 1.97c-1.44 0-2.89-.35-4.31-.7-.5-.12-1-.24-1.5-.34l-9.33 7.96a8.24 8.24 0 0 1-6.88 1.82l.06 55.92Zm19.22-81.94 176.74-150.44.03-52.46-169.96 145.19a8.3 8.3 0 0 1-6.88 1.81l.06 55.9Zm-96.35-245.07-33.55-26.95 119.4-17.26-58.42 32.3 33.55 26.95-119.4 17.26 58.42-32.3Z"
      />
    </svg>
    <h1>StackBlitz Documentation</h1>
    <p>
      Discover how to use StackBlitz, an online development environment for frontend, Node.js and
      the JavaScript ecosystem.
    </p>
  </header>
</template>

<style scoped lang="scss">
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

  @media (min-width: 680px) {
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
