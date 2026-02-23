<script setup>
import Navbar from './components/Navbar.vue';
import TaskPage from './pages/TaskPage.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <section>
    <Navbar />
    <RouterView />
    <Footer />
  </section>
</template>

<style scoped></style>
