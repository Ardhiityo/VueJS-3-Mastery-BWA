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

        <!-- Tab.prevent untuk mencegah fokus ke element lain -->

        <!-- Event 1 -->
        <!-- <input type="text" :value="value" v-on:keydown.enter="tags.push($event.target.value)"
            v-on:keydown.tab.prevent="tags.push($event.target.value)"> -->

        <!-- Event 2 -->
        <input type="text" :value="value" @keydown.enter="tags.push($event.target.value)"
            @keydown.tab.prevent="tags.push($event.target.value)">
    </section>
</template>