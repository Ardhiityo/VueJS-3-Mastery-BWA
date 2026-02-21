<template>
    <div class="dropdown show">
        <slot name="trigger"></slot>
        <ul class="dropdown-menu show"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 40px, 0px);"
            data-popper-placement="bottom-start">
            <slot name="menu"></slot>
        </ul>
    </div>
</template>