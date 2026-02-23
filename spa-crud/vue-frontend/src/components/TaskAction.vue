<script setup>
import PencilIcon from './icons/PencilIcon.vue';
import TrashIcon from './icons/TrashIcon.vue'

import { defineEmits } from 'vue';

defineEmits(['edit', 'remove']);
</script>

<template>
    <div class="task-actions">
        <PencilIcon @click="$emit('edit')" />
        <TrashIcon @click="$emit('remove')" />
    </div>
</template>