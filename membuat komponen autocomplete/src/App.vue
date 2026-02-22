<script setup>
import { ref } from 'vue';
import Autocomplete from './components/Autocomplete.vue';
import source from "./source.json";

const selectedKeyword = ref('');
const handleSelectedKeyword = (name) => selectedKeyword.value = name; 
</script>

<template>
  <section>
    <h1>Selected : {{ selectedKeyword }}</h1>
    <Autocomplete :source="source" @selected-keyword="handleSelectedKeyword" />
  </section>
</template>

<style scoped></style>
