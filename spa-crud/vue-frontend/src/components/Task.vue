<script setup>
import { defineProps, computed, ref } from 'vue';
import TaskAction from './TaskAction.vue';
import { useTask } from '../stores/task';

const { task } = defineProps({
    task: {
        type: Object
    },
})

const isCompletedTask = computed(() => task.is_completed ? true : false);

const isEdit = ref(false);

const taskField = ref(task.name);

// Custom directive : Penamaan variabel bebas
const vFocus = {
    mounted: (el) => el.focus()
}

function undo() {
    isEdit.value = !isEdit.value;
    taskField.value = task.name;
}

const { handleUpdateTask, handleRemoveTask, handleCompleteTask } = useTask();
</script>

<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" type="checkbox" :checked="isCompletedTask"
                @click="handleCompleteTask(task)" />
            <div class="ms-2 flex-grow-1" :class="{ completed: isCompletedTask }"
                title="Double click the text to edit or remove" @dblclick="isEdit = !isEdit">
                <div class="relative" v-if="isEdit">
                    <input class="editable-task" type="text" @keyup.esc="undo" v-focus
                        @keyup.enter="handleUpdateTask(task.id, taskField)" v-model="taskField" />
                </div>
                <span v-else>{{ task.name }}</span>
            </div>
            <div class="task-date">24 Feb 12:00</div>
        </div>
        <TaskAction @edit="isEdit = !isEdit" @remove="handleRemoveTask(task.id)" v-if="!isEdit" />
    </li>
</template>