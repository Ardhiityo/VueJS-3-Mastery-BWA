<script setup>
import { computed, ref, watch } from 'vue';

const { source } = defineProps({
    source: {
        type: Array,
        default: []
    },
    modelValue: {
        type: String
    }
})

const keyword = ref('');
const emit = defineEmits(['selectedKeyword', 'update:modelValue']);
const keywordFound = ref(false);
const selectedKeyword = ref('');

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

const handleSelectedKeyword = (name) => {
    keyword.value = name
    keywordFound.value = true;
    selectedKeyword.value = name;
    emit('selectedKeyword', name);
};

watch(keyword, (newValue, oldValue) => {
    keywordFound.value && selectedKeyword.value != newValue ? keywordFound.value = false : '';
});
</script>

<template>
    <section>
        <input type="text" v-model="keyword">
        <ul>
            <li v-for="(item, index) in result" :key="index" @click="handleSelectedKeyword(item.name)">
                {{ item.name }}
            </li>
        </ul>
    </section>
</template>