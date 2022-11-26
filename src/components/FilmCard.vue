<template>
  <div class="film">
    <img :src="image" alt="" />
    <div class="overlay">
      <div class="film__times">
        <span class="film__date">
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          {{ date }}
        </span>
        <span class="film__time">
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
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ time }}
        </span>
      </div>
      <div class="film__content">
        <h2 class="film__title">{{ title }}</h2>
        <router-link
          :to="{ name: 'details', params: { id } }"
          class="film__link"
          >More info</router-link
        >
      </div>
      <p class="film__score">
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
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
          />
        </svg>
        {{ score }} %
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  id: String,
  image: String,
  title: String,
  date: String,
  time: String,
  score: String,
});
</script>

<style lang="scss" scoped>
.film {
  width: 250px;
  height: auto;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
}
.film:hover .overlay {
  opacity: 1;
  transform: scale(1);
}
.film img {
  transition: transform 0.8s ease;
}
.film:hover img {
  transform: scale(1.1);
}
.overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(1.3);
  opacity: 0;
  transition: transform 0.4s ease 0s;
  padding: 1rem;
}
.overlay span {
  color: #fff;
}

.film__times {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.film__date,
.film__time,
.film__score {
  display: flex;
  align-items: center;
  color: $white;
  svg {
    width: 24px;
  }
}

.film__score {
  justify-content: flex-start;
  width: 100%;
}

.film__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.film__title {
  text-align: center;
  color: $white;
}

.film__link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.1s ease-in-out;
  color: $white;

  &:hover {
    color: var(--text-primary-color);
    background-color: var(--background-color-primary);
  }
}
</style>
