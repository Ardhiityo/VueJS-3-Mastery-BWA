<script>
export default {
    props: {
        item: {
            type: Object,
        }
    },
    emits: ['handleRemove'],
    setup() {
        return {
            //
        }
    }
}
</script>

<template>
    <section>
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <button @click="$emit('handleRemove', item.id)">Remove</button>
    </section>
</template>