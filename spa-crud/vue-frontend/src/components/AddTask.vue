<script setup>
import { ref, defineEmits, computed } from "vue";

const emit = defineEmits(['handleAddTask'])

const task = ref('');

const handleAddTask = computed(() => {
    if (task.value.trim().length) {
        emit('handleAddTask', task.value)
        task.value = '';
    }
});
</script>

<template>
    <div class="relative">
        <input type="text" v-model="task" class="form-control form-control-lg padding-right-lg"
            placeholder="+ Add new task. Press enter to save." @keydown.enter="handleAddTask" />
    </div>
</template>