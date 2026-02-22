<script setup>
import { computed, ref } from 'vue';

const { source } = defineProps({
    source: {
        type: Array,
        default: []
    }
})

const keyword = ref('');
const keywordFound = ref(false);

const result = computed(() => {
    if (keywordFound.value) {
        return [];
    }
    return source.filter(data => {
        if (keyword.value.length) {
            return data.name.toLowerCase().includes(keyword.value.toLowerCase());
        }
    })
});

const selectedKeyword = (name) => {
    keyword.value = name
    keywordFound.value = true;
};
</script>

<template>
    <section>
        <input type="text" v-model="keyword">
        <ul>
            <li v-for="(item, index) in result" :key="index" @click="selectedKeyword(item.name)">
                {{ item.name }}
            </li>
        </ul>
    </section>
</template>