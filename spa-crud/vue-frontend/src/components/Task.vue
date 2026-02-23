<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue';
import TaskAction from './TaskAction.vue';
import { updateTask } from '../http/task-api';

const { task } = defineProps({
    task: {
        type: Object
    },
})

const emit = defineEmits(['updateTask']);

const isCompletedTask = computed(() => task.is_completed ? true : false);

const isEdit = ref(false);

// Custom directive : Penamaan variabel bebas
const vFocus = {
    mounted: (el) => el.focus()
}

function handleUpdateTask(newTask) {
    emit('updateTask', { ...task, newTask });
}
</script>

<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" type="checkbox" :checked="isCompletedTask" />
            <div class="ms-2 flex-grow-1" :class="{ completed: isCompletedTask }"
                title="Double click the text to edit or remove" @dblclick="isEdit = !isEdit">
                <div class="relative" v-if="isEdit">
                    <input class="editable-task" type="text" @keyup.esc="isEdit = !isEdit" v-focus
                        @keyup.enter="handleUpdateTask($event.target.value)" />
                </div>
                <span v-else>{{ task.name }}</span>
            </div>
            <div class="task-date">24 Feb 12:00</div>
        </div>
        <TaskAction @edit="isEdit = !isEdit" v-if="!isEdit" />
    </li>
</template>