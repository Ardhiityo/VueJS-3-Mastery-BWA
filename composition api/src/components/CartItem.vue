<script setup>
import { onUnmounted, defineProps } from 'vue';

defineProps({
    item: {
        type: Object,
    }
})

defineEmits(['handleRemove'])
onUnmounted(() => console.log('Unmounted'));
</script>

<template>
    <section>
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <button @click="$emit('handleRemove', item.id)">Remove</button>
    </section>
</template>