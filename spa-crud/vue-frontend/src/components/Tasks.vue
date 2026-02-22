<script setup>
import Task from "../components/Task.vue"

const { tasks } = defineProps({
    tasks: {
        type: Array,
    }
})
</script>

<template>
    <section>
        <div class="card mt-2" v-for="task in tasks" :key="task.id">
            <ul class="list-group list-group-flush">
                <Task :task="task" />
            </ul>
        </div>
    </section>
</template>