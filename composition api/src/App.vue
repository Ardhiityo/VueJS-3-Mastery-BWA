<script>
import { toRefs, reactive, ref, toRef, computed, watch, watchEffect, onMounted, onUpdated, onUnmounted } from 'vue';
import CartItem from './components/CartItem.vue';

export default {
  components: {
    CartItem
  },
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
    // watch(total, () => console.log('total change from watch: ', total.value), {
    //   immediate: true
    // })

    // Secara default beraksi dimulai ketika compoent dimuat
    // watchEffect(() => console.log('total change from watchEffect:', total.value));

    onMounted(() => console.log('Mounted'));
    onUpdated(() => console.log('Updated'));

    const items = reactive([
      {
        id: 1,
        name: 'Abcde',
        price: 12000
      }
    ]);

    const handleRemove = (id) => {
      let index = null;
      items.forEach((data, key) => {
        if (data.id === id) {
          index = key;
        }
        items.splice(index, 1)
      });
    }

    return {
      message,
      increment,
      decrement,
      product,
      swapProduct,
      total,
      items,
      handleRemove
    }
  }
}
</script>

<template>
  <section>
    <!-- <h1>{{ message }}</h1> -->
    <button @click="increment">Increment</button>
    <!-- <button @click="decrement">Decrement</button> -->

    <!-- <p>{{ product.name }}</p>
    <p>{{ product.price }}</p>
    <button @click="swapProduct">Swap</button> -->

    Quantity : {{ product.quantity }}
    Total : {{ total }}

    <div v-for="(item, index) in items" :key="index">
      <CartItem :item="item" @handle-remove="handleRemove" />
    </div>

  </section>
</template>

<style scoped></style>
