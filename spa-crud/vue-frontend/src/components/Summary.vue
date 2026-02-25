<script setup>
import { defineProps } from "vue";

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div>
    <p class="lead">{{ title }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        [{{ task.created_at }}] {{ task.name }}
      </li>
    </ul>
  </div>
</template>