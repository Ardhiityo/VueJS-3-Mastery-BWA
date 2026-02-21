<script>
import Dropdown from './components/Dropdown.vue';
import DropdownItem from './components/DropdownItem.vue';
import DropdownTrigger from './components/DropdownTrigger.vue';

export default {
  components: {
    Dropdown,
    DropdownItem,
    DropdownTrigger
  },
  data: () => ({
    isOpen: false
  }),
}
</script>

<template>
  <div class="container menu-center">
    <Dropdown :class="{ show: isOpen }" @click="isOpen = !isOpen">
      <template #trigger>
        <DropdownTrigger>Dropdown button</DropdownTrigger>
      </template>
      <template #menu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
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
