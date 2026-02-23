<script setup>
import PencilIcon from './icons/PencilIcon.vue';
import TrashIcon from './icons/TrashIcon.vue'

import { defineEmits } from 'vue';

defineEmits(['edit']);
</script>

<template>
    <div class="task-actions">
        <PencilIcon @click="$emit('edit')" />
        <TrashIcon />
    </div>
</template>