<script setup>
import Autocomplete from './components/Autocomplete.vue';
import source from "./source.json";
</script>

<template>
  <section>
    Autocomplete
    <Autocomplete :source="source" />
  </section>
</template>

<style scoped></style>
