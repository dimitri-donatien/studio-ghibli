<template>
  <div class="contact">
    <side-comp></side-comp>
    <banner-comp></banner-comp>
    <section class="contact__container">
    
    </section>
    <footer-comp></footer-comp>
 </div>
</template>

<script setup>
import SideComp from '@/components/layout/SideComp'
import BannerComp from '@/components/layout/BannerComp'
import FooterComp from '@/components/layout/FooterComp'

</script> 

<style lang="scss" scoped>
.contact {
 background-color: var(--background-color-primary);
 color: var(--text-primary-color);
 min-height: 100vh;
 width: 100%;
}
.contact__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow: hidden;
}
</style>