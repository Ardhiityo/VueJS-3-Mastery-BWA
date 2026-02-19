<script>
export default {
    name: 'TagInput',
    data: () => ({
        value: 'tes',
        tags: ['vue', 'react', 'svelte']
    })
}
</script>

<template>
    <section>
        <div v-for="(tag, index) in tags" :key="index">
            {{ tag }}
        </div>
        <input type="text" name="" id="" :value="value">
    </section>
</template>