<script setup>

import { onMounted, ref } from 'vue';
import { getTasks } from '../http/task-api';
import Task from '../components/Task.vue';

const tasks = ref([]);

onMounted(async () => {
    const { data } = await getTasks();
    tasks.value = data;
})

</script>

<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <div class="relative">
                        <input type="text" class="form-control form-control-lg padding-right-lg"
                            placeholder="+ Add new task. Press enter to save." />
                    </div>
                    <!-- List of tasks -->
                    <div class="card mt-2" v-for="task in tasks.data" :key="task.id">
                        <ul class="list-group list-group-flush">
                            <Task :task="task" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>