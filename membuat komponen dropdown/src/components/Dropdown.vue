<script>
export default {
    inheritAttrs: false,
    computed: {
        menuStyles: function () {
            return {
                position: 'absolute',
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: 'translate3d(0px, 40px, 0px)'
            }
        }
    }
}
</script>

<template>
    <div class="dropdown" v-bind="$attrs">
        <slot name="trigger"></slot>
        <ul class="dropdown-menu" :style="menuStyles" v-bind="$attrs" data-popper-placement="bottom-start">
            <slot name="menu"></slot>
        </ul>
    </div>
</template>