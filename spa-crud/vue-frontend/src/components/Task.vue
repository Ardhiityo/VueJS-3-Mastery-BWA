<script setup>
import { defineProps } from 'vue';
import PencilIcon from './icons/PencilIcon.vue';
import TrashIcon from './icons/TrashIcon.vue'

const { task } = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0 completed" type="checkbox" />
            <div class="ms-2 flex-grow-1" title="Double click the text to edit or remove">
                <div class="relative">
                    <input class="editable-task" type="text" />
                </div>
                <span>{{ task.name }}</span>
            </div>
            <div class="task-date">24 Feb 12:00</div>
        </div>
        <div class="task-actions">
            <PencilIcon />
            <TrashIcon />
        </div>
    </li>
</template>