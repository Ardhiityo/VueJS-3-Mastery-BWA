<script>
export default {
  data: function () {
    return {
      jsFrameworks: ['Vue.js', 'React.js', 'Svelte.js'],
      otherFrameworks: ['Laravel', 'Flask']
    }
  },
  methods: {
    handleChange: function (tags) {
      this.jsFrameworks = [...tags];
    }
  }
}
</script>

<template>
  <section>
    <h1>Hello World</h1>

    <p>{{ jsFrameworks }}</p>
    <!-- Via global import -->
    <TagInput :selectedTags="jsFrameworks" @change="handleChange" />

    <p>{{ otherFrameworks }}</p>
    <!-- Via global import -->
    <TagInput :selectedTags="otherFrameworks" @change="otherFrameworks = [...$event]" />
  </section>
</template>

<style scoped></style>
