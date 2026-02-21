<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = 'Hello Vue!';
    const quantity = ref(0);

    const increment = () => quantity.value++;
    const decrement = () => quantity.value--;

    return {
      message,
      quantity,
      increment,
      decrement
    }
  }
}
</script>

<template>
  <section>
    <h1>{{ message }}</h1>
    <h1>{{ quantity }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </section>
</template>

<style scoped></style>
