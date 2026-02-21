<script>
import Dropdown from './components/Dropdown.vue';

export default {
  components: {
    Dropdown
  }
}
</script>

<template>
  <div class="container menu-center">
    <Dropdown>
      <template #trigger>
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
          Dropdown button
        </button>
      </template>
      <template #menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.menu-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
