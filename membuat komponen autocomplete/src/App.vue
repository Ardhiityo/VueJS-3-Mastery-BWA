<script setup>
import { ref } from 'vue';
import Autocomplete from './components/Autocomplete.vue';
import source from "./source.json";

const keyword = ref('');
</script>

<template>
  <section class="w-1/2 mx-auto min-h-screen flex items-center">
    <Autocomplete :source="source" v-model:keyword="keyword">
      Selected : {{ keyword }}
    </Autocomplete>
  </section>
</template>

<style scoped></style>
