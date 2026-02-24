<template>
    <section>
        <h1>Not Found</h1>
        <!-- <p>Sorry, the page you're looking for {{ $route.fullPath }} its not found!</p> -->
        <!-- result : /sdkjfbdjfi -->

        <p>Sorry, the page you're looking for {{ $route.params.pathMatch }} its not found!</p>
        <!-- result : sdkjfbdjf -->
    </section>
</template>