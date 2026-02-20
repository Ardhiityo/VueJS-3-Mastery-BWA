<template>
    <!-- <label class="form-label">{{ label }}</label>
    <input v-bind="$attrs" class="form-control" v-model="value"> -->

    <section>
        <label class="form-label">{{ label }}</label>

        <!-- 2 Flow data binding cara lama -->
        <!-- <input class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->

        <!-- 2 Flow data binding cara lama : menggunakan computed property -->
        <input class="form-control" v-model="value" />
    </section>
</template>

<script>
export default {
    // inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            required: true,
        },
        // modelModifiers: {
        //     type: Object,
        //     default: () => ({})
        // }
    },
    emits: ["update:modelValue"],
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                // if (this.modelModifiers.lowercase) {
                //     value = value.toLowerCase();
                // }
                this.$emit('update:modelValue', value);
            }
        }
    },
};
</script>