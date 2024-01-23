<template>
    <div class="container">
        <a href="https://stackblitz.com/sign_in" class="link light">Sign in</a>
        <a href="https://stackblitz.com/register" class="link accent">Register</a>
    </div>
</template>

<style scoped lang="scss">
@import './linkStyles.scss';

.container {
    margin-inline-start: 40px;
    display: flex;
    gap: 8px;
    @media screen and (max-width: 768px) {
      margin-inline-start: 0px;
    }
    @media screen and (max-width: 375px) {
      display: none;
    }
}

.link {
    @media screen and (max-width: 500px) {
      height: 30px;
      padding: 0 10px;
    }
  
    // We show the buttons inside the hamburger menu
    @media screen and (max-width: 400px) {
      display: none;
    }
}
</style>