<template>
  <div class="notfound">
    <section class="notfound__container">
    
    </section>
    <footer-comp></footer-comp>
 </div>
</template>

<script setup>
import FooterComp from '@/components/layout/FooterComp'

</script> 

<style lang="scss" scoped>
.notfound {
 background-color: var(--background-color-primary);
 color: var(--text-primary-color);
 min-height: 100vh;
 width: 100%;
}
.notfound__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow: hidden;
}
</style>