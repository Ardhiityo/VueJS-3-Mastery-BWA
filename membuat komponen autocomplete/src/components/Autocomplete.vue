<script setup>
const { source } = defineProps({
    source: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <section>
        <input type="text">
        <ul>
            <li v-for="(item, index) in source" :key="index">
                {{ item.name }}
            </li>
        </ul>
    </section>
</template>