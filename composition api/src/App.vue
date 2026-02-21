<script>
import { provide, reactive, ref } from 'vue';

export default {
  setup() {
    const message = 'Hello Vue!';
    const quantity = ref(0);

    const increment = () => quantity.value++;
    const decrement = () => quantity.value--;

    const product = reactive({
      name: 'Product A',
      price: 20000
    })

    const swapProduct = () => {
      product.name = 'Product B';
      product.price = 10000;
    }

    return {
      message,
      quantity,
      increment,
      decrement,
      product,
      swapProduct
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

    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="swapProduct">Swap</button>
  </section>
</template>

<style scoped></style>
