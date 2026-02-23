<script setup>

import { onMounted, ref, computed } from 'vue';
import { getTasks, createTask, updateTask, completeTask } from '../http/task-api';
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

async function handleUpdateTask(task) {
    const response = await updateTask(task.id, { name: task.newTask })
    if (response.status === 200) {
        const oldTask = tasks.value.find(item => item.id === task.id);
        oldTask.name = task.newTask;
    }
}

async function handleCompleteTask(task) {
    const response = await completeTask(task.id, { is_completed: !task.is_completed });
    if (response.status === 200) {
        const currentTask = tasks.value.find(item => item.id === task.id);
        currentTask.is_completed = !task.is_completed;
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
                    <Tasks :tasks="uncompletedTasks" @updateTask="handleUpdateTask"
                        @completeTask="handleCompleteTask" />

                    <!--Toggle show tasks -->
                    <div class="my-3 d-flex" v-if="showToggle">
                        <button class="btn btn-primary mx-auto" @click="handleShowToggle">
                            {{ titleToggle }} completed tasks
                        </button>
                    </div>

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" v-if="showUncompletedTask" @updateTask="handleUpdateTask"
                        @completeTask="handleCompleteTask" />
                </div>
            </div>
        </div>
    </main>
</template>