<script>
export default {
  data: function () {
    return {
      selectedTags: ['Vue.js', 'React.js', 'Svelte.js']
    }
  }
}
</script>

<template>
  <section>
    <h1>Hello World</h1>
    <!-- Via global import -->
    <TagInput :selectedTags="selectedTags" />
  </section>
</template>

<style scoped></style>
