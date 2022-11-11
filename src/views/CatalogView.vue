<template>
   <div class="catalog">
    <side-comp></side-comp>
    <main class="catalog__container">
      <banner-comp></banner-comp>
      <section class="catalog__content">
      
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
.catalog {
  display: flex;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.catalog__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  overflow-y: auto;
}
</style>