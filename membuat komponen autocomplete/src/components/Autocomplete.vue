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

const keyword = defineModel('keyword');

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
    keyword.value = name.charAt(0).toUpperCase() + name.slice(1);
    keywordFound.value = true;
    selectedKeyword.value = name;
};

watch(keyword, (newValue, oldValue) => {
    keywordFound.value && selectedKeyword.value != newValue ? keywordFound.value = false : '';
});
</script>

<template>
    <div class="w-full">
        <label for="price" class="block text-sm/6 font-medium text-gray-900">
            <slot></slot>
        </label>
        <div class="mt-2">
            <div
                class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input id="price" type="text" name="price" placeholder="Search..."
                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    v-model="keyword" />
            </div>
            <div>
                <ul>
                    <li v-for="(item, index) in result" :key="index" @click="handleSelectedKeyword(item.name)">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>