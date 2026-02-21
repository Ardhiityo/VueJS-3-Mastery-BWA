<script>
import { toRefs, reactive, ref, toRef, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
    const message = 'Hello Vue!';

    const product = reactive({
      name: 'Product A',
      price: 20000,
      quantity: 0
    })

    const swapProduct = () => {
      product.name = 'Product B';
      product.price = 10000;
    }

    const increment = () => product.quantity++;
    const decrement = () => product.quantity--;
    const total = computed(() => product.quantity * product.price);

    /**
     * toRef dan toRefs dipakai khusus untuk properti dalam object reactive, supaya tetap sinkron.
     */
    // const toref = toRef(product, 'name');
    // console.log(toref.value);

    // product.name = 'Product B';
    // console.log('Change toref :', toref.value);

    // const torefs = toRefs(product);
    // console.log(torefs.name.value);

    // product.name = 'Product C';
    // console.log('Change torefs :', torefs.name.value);

    // Immediate membuat rekasi dimulai dari component dimuat
    // Secara default hanya bereaksi ketika property berubah saja
    watch(total, () => console.log('total change from watch: ', total.value), {
      immediate: true
    })

    // Secara default beraksi dimulai ketika compoent dimuat
    watchEffect(() => console.log('total change from watchEffect:', total.value));

    return {
      message,
      increment,
      decrement,
      product,
      swapProduct,
      total
    }
  }
}
</script>

<template>
  <section>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="swapProduct">Swap</button>

    Quantity : {{ product.quantity }}
    Total : {{ total }}
  </section>
</template>

<style scoped></style>
