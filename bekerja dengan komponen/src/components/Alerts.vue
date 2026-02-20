<template>
    <section>
        <!-- V-for loop dengan integer -->
        <!-- <Alert :message="message" type="danger" v-for="item in 3" :key="item" :show="true" /> -->

        <Alert :message="message" v-for="(type, index) in types" :type="type" :key="index" :show="true" />
    </section>
</template>

<script>
import Alert from './Alert.vue';

export default {
    // props: ['message', 'types'],

    // Props Validation
    props: {
        message: String,
        types: Array,
        items: Number
    },
    components: {
        Alert
    }
}
</script>