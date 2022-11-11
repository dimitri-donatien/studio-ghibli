<template>
  <aside class="side">
    <div class="logo__container">
      <div v-if="theme === 'dark-theme'" class="logo">
        <img :src="require('@/assets/svg/studio-ghibli-logo-light.svg')" alt="">
      </div>
      <div v-else class="logo">
        <img :src="require('@/assets/svg/studio-ghibli-logo-dark.svg')" alt="">
      </div>
    </div>
    <nav class="side__container">
      <ul class="side__content">
        <router-link to="/" class="side__link side__link--hovered">
          Home
        </router-link>
        <router-link to="/about" class="side__link side__link--hovered">
          About
        </router-link>
        <router-link to="/catalog" class="side__link side__link--hovered">
          Catolog
        </router-link>
        <router-link to="/contact" class="side__link side__link--hovered">
          Contact
        </router-link>
      </ul>
    </nav>
    <footer class="foo__container">  
      <theme-comp @onToggleTheme="handleToggleTheme($event)"></theme-comp>
      <div class="foo__content">
        <small class="foo__text">© 2022 Studio Ghibli</small>
      </div>
    </footer>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import ThemeComp from "@/components/ThemeComp";

const theme = ref("");

function handleToggleTheme(data) {
  return (theme.value = data);
}
</script>

<style lang="scss" scoped>
.side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  height: 100vh;
  background: var(--background-color-primary);
}
.logo__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
}
.logo {
  width: 100%;
}
.side__container {
  height: 100%;
  width: 100%;
}
.side__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 1rem;
}
.side__link {
  padding: 1rem;
  width: 100%;
}
.foo__container {
  width: 100%;
  padding: 2rem;
  .foo__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>