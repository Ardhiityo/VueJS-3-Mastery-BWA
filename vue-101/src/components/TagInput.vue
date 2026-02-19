<script>
export default {
    name: 'TagInput',
    data: () => ({
        value: 'tes',
        tags: ['vue', 'react', 'svelte']
    })
}
</script>

<template>
    <section>
        <div v-for="(tag, index) in tags" :key="index">
            {{ tag }}
        </div>

        <!-- Digunakan untuk menampilkan teks apa-adanya, apabila memiliki whitespace maka ditampilkan -->
        <pre>{{ value }}</pre>

        <!-- Tab.prevent untuk mencegah fokus ke element lain -->

        <!-- Event 1 -->
        <!-- <input type="text" :value="value" v-on:keydown.enter="tags.push($event.target.value)"
            v-on:keydown.tab.prevent="tags.push($event.target.value)"> -->

        <!-- Event 2 -->
        <!-- <input type="text" :value="value" @keydown.enter="tags.push($event.target.value)"
            @keydown.tab.prevent="tags.push($event.target.value)"> -->

        <!-- Cara lama : 2 flow data binding  -->
        <!-- @input digunakan untuk mengambil value terbaru apabila terjadi perubahan -->
        <!-- <input type="text" :value="value" @input="value = $event.target.value"
            @keydown.enter="tags.push($event.target.value)" @keydown.tab.prevent="tags.push($event.target.value)"> -->

        <!-- Cara baru : 2 flow data binding -->
        <!-- Trim untuk menghapus whitespace -->
        <input type="text" v-model.trim="value" @keydown.enter="tags.push($event.target.value)"
            @keydown.tab.prevent="tags.push($event.target.value)">
    </section>
</template>