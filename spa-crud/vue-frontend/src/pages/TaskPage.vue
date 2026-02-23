<script setup>

import { onMounted, ref, computed } from 'vue';
import { getTasks, createTask } from '../http/task-api';
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

const tasks = ref([]);

onMounted(async () => {
    const { data } = await getTasks();
    tasks.value = data.data;
})

const completedTasks = computed(() => tasks.value.filter(item => item.is_completed));
const uncompletedTasks = computed(() => tasks.value.filter(item => !item.is_completed));

const showUncompletedTask = ref(true);

const handleShowToggle = () => showUncompletedTask.value = !showUncompletedTask.value;

const titleToggle = computed(() => showUncompletedTask.value ? 'Show' : 'Hide');

const showToggle = computed(() => completedTasks.value.length);

async function handleAddTask(task) {
    const response = await createTask({ name: task });
    if (response.status === 201) {
        const value = await response.data.data;
        tasks.value.unshift(value);
    }
}
</script>

<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <AddTask @handleAddTask="handleAddTask" />
                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" />

                    <!--Toggle show tasks -->
                    <div class="my-3 d-flex" v-if="showToggle">
                        <button class="btn btn-primary mx-auto" @click="handleShowToggle">
                            {{ titleToggle }} completed tasks
                        </button>
                    </div>

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" v-if="showUncompletedTask" />
                </div>
            </div>
        </div>
    </main>
</template>