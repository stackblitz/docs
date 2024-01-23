<template>
    <div class="container">
        <a href="https://stackblitz.com/sign_in" class="link light">Sign in</a>
        <a href="https://stackblitz.com/sign_in" class="link accent">Register</a>
    </div>
</template>

<style scoped lang="scss">
@import './linkStyles.scss';

.container {
    // We show the buttons on nav bar when there is enough space
    display: none;
    @media screen and (max-width: 400px) {
      display: flex;
      gap: 8px;
      margin-block-start: 24px;
    }
}

.link {
  flex: 1;
  justify-content: center;
}
</style>