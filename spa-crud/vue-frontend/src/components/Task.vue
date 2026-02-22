<script setup>
import { defineProps, computed } from 'vue';
import PencilIcon from './icons/PencilIcon.vue';
import TrashIcon from './icons/TrashIcon.vue'

const { task } = defineProps({
    task: {
        type: Object
    }
})

const isCompletedTask = computed(() => task.is_completed ? true : false);
</script>

<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" type="checkbox" :checked="isCompletedTask" />
            <div class="ms-2 flex-grow-1" :class="{ completed: isCompletedTask }"
                title="Double click the text to edit or remove">
                <div class="relative">
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