<template>
   <div class="home">
    <side-comp></side-comp>
    <main class="home__container">
      <banner-comp></banner-comp>
      <section class="home__content">
        
      </section>
      <footer-comp></footer-comp>
    </main>
  </div>
</template>

<script setup>
import SideComp from '@/components/layout/SideComp'
import BannerComp from '@/components/layout/BannerComp'
import FooterComp from '@/components/layout/FooterComp'

</script> 

<style lang="scss" scoped>
.home {
  display: flex;
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.home__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  overflow-y: auto;
}
</style>