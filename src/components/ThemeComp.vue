<template>
  <div>
    <div v-if="userTheme === 'dark-theme'" @click="toggleTheme" class="sun-dark">
      <img :src="require('@/assets/svg/sun-dark.svg')" alt="">
    </div>

    <div v-else @click="toggleTheme" class="sun-light">
      <img :src="require('@/assets/svg/sun-light.svg')" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const userTheme = ref("light-theme");

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});

function toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
}

function getTheme() {
  return localStorage.getItem("user-theme");
}

function setTheme(theme) {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
}

function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}
</script>

<style scoped>
  .sun-light, .sun-dark {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin: 0 .5rem;
  }
  .sun-light {
    color: var(--text-primary-color);
  }
  .sun-dark {
    color: var(--text-primary-color);
  }
</style>
