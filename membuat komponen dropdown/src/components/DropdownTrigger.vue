<script>
export default {
    props: {
        is: {
            type: String,
            default: 'a',
            validator: (value) => {
                return ['button', 'a'].includes(value)
            }
        },
        to: {
            type: String,
            default: '/'
        }
    }
}
</script>

<template>
    <component :is="is" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="true" :to="to">
        <slot></slot>
    </component>
</template>
