<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <section>
    <Navbar />
    <Transition>
      <RouterView v-slot="{ Component }">
        <component :is="Component"></component>
      </RouterView>
    </Transition>
    <Footer />
  </section>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
