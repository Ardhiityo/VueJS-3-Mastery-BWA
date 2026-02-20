<template>
    <!-- <label class="form-label">{{ label }}</label>
    <input v-bind="$attrs" class="form-control" v-model="value"> -->

    <section>
        <label class="form-label">{{ label }}</label>

        <!-- 2 Flow data binding cara lama -->
        <!-- <input class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->

        <!-- 2 Flow data binding cara lama : menggunakan computed property -->
        <!-- <input class="form-control" v-model="value" /> -->

        <!-- Custom modifier dengan method -->
        <!-- <input class="form-control" :value="modelValue" @input="handleInput" /> -->

        <!-- Custom modifier dengan computed -->
        <!-- <input class="form-control" v-model="value" /> -->

        <!-- Fallthrgouh Attributes dibanyak element perlu menentukan spesifik element mana yang akan diterapkan dengan $attrs -->
        <input class="form-control" v-model="value" v-bind="$attrs" />
    </section>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            required: true,
        },
        modelModifiers: {
            type: Object,
            default: () => ({})
        }
    },
    // Custom modifier dengan method
    methods: {
        handleInput: function (event) {
            let value = event.target.value;
            if (this.modelModifiers.lowercase) {
                value = value.toLowerCase();
            }
            this.$emit('update:modelValue', value);
        }
    },
    emits: ["update:modelValue"],
    // Custom modifier dengan computed
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                if (this.modelModifiers.lowercase) {
                    value = value.toLowerCase();
                }
                this.$emit('update:modelValue', value);
            }
        }
    },
};
</script>