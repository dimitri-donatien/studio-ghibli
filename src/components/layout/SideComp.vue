<template>
  <aside class="side">
    <div class="logo__container">
      <div v-if="theme === 'dark-theme'" class="logo">
        <img
          :src="require('@/assets/svg/studio-ghibli-logo-light.svg')"
          alt=""
        />
      </div>
      <div v-else class="logo">
        <img
          :src="require('@/assets/svg/studio-ghibli-logo-dark.svg')"
          alt=""
        />
      </div>
    </div>
    <nav class="side__container">
      <ul class="side__content">
        <router-link to="/" class="side__link side__link--hovered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          Home
        </router-link>
        <router-link to="/about" class="side__link side__link--hovered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>

          About
        </router-link>
        <router-link to="/catalog" class="side__link side__link--hovered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          Catolog
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
  padding: 1.5rem;
}
.side__link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  transition: all 0.2s ease-in-out;

  & svg {
    width: 24px;
    margin-right: 0.5rem;
  }
}
.side__link--hovered {
  &:hover {
    background-color: var(--background-color-secondary);
    border-radius: 0.5rem;
  }
}
.router-link-active {
  background-color: var(--background-color-secondary);
  border-radius: 0.5rem;
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
