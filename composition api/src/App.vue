<script>
import { toRefs, reactive, ref, toRef } from 'vue';

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

    /**
     * toRef dan toRefs dipakai khusus untuk properti dalam object reactive, supaya tetap sinkron.
     */
    const toref = toRef(product, 'name');
    console.log(toref.value);

    product.name = 'Product B';
    console.log('Change toref :', toref.value);

    const torefs = toRefs(product);
    console.log(torefs.name.value);

    product.name = 'Product C';
    console.log('Change torefs :', torefs.name.value);

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
