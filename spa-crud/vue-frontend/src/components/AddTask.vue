<script setup>
import { ref, computed } from "vue";
import { useTask } from "../stores/task";

const { handleAddTask } = useTask();

const task = ref('');

const addTask = computed(() => {
    if (task.value.trim().length) {
        handleAddTask(task.value)
        task.value = '';
    }
});
</script>

<template>
    <div class="relative">
        <input type="text" v-model="task" class="form-control form-control-lg padding-right-lg"
            placeholder="+ Add new task. Press enter to save." @keydown.enter="addTask" />
    </div>
</template>