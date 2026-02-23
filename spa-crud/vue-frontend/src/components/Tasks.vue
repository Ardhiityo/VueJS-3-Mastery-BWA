<script setup>
import Task from "../components/Task.vue"
import { defineProps, defineEmits } from "vue";

const { tasks } = defineProps({
    tasks: {
        type: Array,
    }
})

const emit = defineEmits(['updateTask', 'completeTask', 'removeTask']);
</script>

<template>
    <section>
        <div class="card mt-2" v-for="task in tasks" :key="task.id">
            <ul class="list-group list-group-flush">
                <Task :task="task" @updateTask="$emit('updateTask', $event)" @remove-task="$emit('removeTask', $event)"
                    @completeTask="$emit('completeTask', $event)" />
            </ul>
        </div>
    </section>
</template>