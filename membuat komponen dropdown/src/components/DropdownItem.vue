<script>
export default {
    props: {
        to: {
            type: String,
            default: '/'
        }
    }
}
</script>

<template>
    <li>
        <a class="dropdown-item" :to="to">
            <slot></slot>
        </a>
    </li>
</template>