<template>
  <div class="notfound">
    <side-comp></side-comp>
    <main class="notfound__container">
      <img
        class="notfound__img"
        :src="require('@/assets/img/TotoroFriends.webp')"
        alt="Studio Ghibli - Totoro and Friends"
      />
      <h1 class="notfound__title">404</h1>
      <p class="notfound__text">Page not found</p>
      <router-link to="/" class="back__link"> Go to home </router-link>
    </main>
  </div>
</template>

<script setup>
import SideComp from "@/components/layout/SideComp.vue";
</script>

<style lang="scss" scoped>
.notfound {
  display: flex;
  background-color: var(--background-color-secondary);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.notfound__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.notfound__img {
  height: auto;
  width: 100%;
  @include for-size(tablet-portrait-up) {
    width: 80%;
  }
  @include for-size(desktop-up) {
    width: 70%;
  }
  @include for-size(big-desktop-up) {
    width: 50%;
  }
}
.back__link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: var(--text-primary-color);
    background-color: var(--background-color-primary);
  }
}
</style>
