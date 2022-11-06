<template>
  <div class="side__container">
    <span class="line"></span>
    <nav class="side">
      <div class="logo__container">
        <span class="logo">Anime Search</span>
      </div>
      <ul class="side__content">
        <router-link to="/" class="side__link side__link--hovered">
          Home
        </router-link>
        <router-link to="/about" class="side__link side__link--hovered">
          About
        </router-link>
        <router-link to="/contact" class="side__link side__link--hovered">
          Contact
        </router-link>
        <theme-comp></theme-comp>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import ThemeComp from "@/components/ThemeComp";

</script>

<style lang="scss" scoped>
.side__container {
  position: sticky;
  position: -webkit-sticky;
  border-bottom: 1px #242424 solid;
  top: 0;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
  width: 100%;
  padding: 1.5rem;
}
.line {
  position: absolute;
  top: 0;
  left: 0;
  animation: gradient 10s linear infinite;
  animation-direction: alternate-reverse;
  background-image: linear-gradient(45deg,  #9845E8 , #33D2FF , #DD5789, #6964DE, #FCA6E9, #D24074, #6518B4);
  background-size: 600% 100%;
  width: 100%;
  height: .3rem;
}
@keyframes gradient {
  0% {background-position: 0%}
  100% {background-position: 100%}
}
.logo__container {
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
}
.logo {
  background: -webkit-linear-gradient(45deg,  #9845E8 , #33D2FF , #DD5789, #6964DE, #FCA6E9, #D24074, #6518B4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.side__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .side__link {
    font-family: 'Roboto', sans-serif;
    margin: 0 .5rem;
    color: var(--text-primary-color);
  }
  .side__link--hovered {
    position: relative;

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      &:after {
        width: 100%;
      }
    }
    
    &:after {
      content: '';
      position: absolute;
      left: 0; bottom: -3px;
      height: 3px;
      background: $linearGradientFirst;
      width: 0;
      transition: width .4s;
    }
  }
}
</style>