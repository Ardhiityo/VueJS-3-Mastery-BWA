<script>
export default {
    name: 'TagInput',
    props: {
        selectedTags: {
            type: Array,
            default: []
        }
    },
    data: function () {
        return {
            value: 'tes',
            tags: this.selectedTags
        }
    },
    watch: {
        value(newVal, olVal) {
            if (newVal.includes(',')) {
                this.value = newVal.slice(0, -1);
                this.addNewTag();
            }
        }
    },
    computed: {
        isTagExists: function () {
            return this.tags.includes(this.value);
        }
    },
    methods: {
        addNewTag: function () {
            if (!this.isTagExists && this.value.length) {
                this.tags.push(this.value);
            }
        },
        removeTag: function (index) {
            this.tags.splice(index, 1);
        },
        removeLastTag: function () {
            if (this.value.length === 0) {
                this.tags.pop()
            }
        }
    }
}
</script>

<template>
    <section>
        <div v-for="(tag, index) in tags" :key="index">
            {{ tag }} <span @click="removeTag(index)">&times;</span>
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
        <!-- <input type="text" v-model.trim="value" @keydown.backspace="removeLastTags" @keydown.enter="addTags"
            @keydown.tab.prevent="addTags" :class="{ 'tag-exists': isTagExists }"> -->

        <div class="tags-input-wrapper">
            <span class="tag-item" v-for="(tag, index) in tags" :key="index">
                {{ tag }}
                <a class="remove-tag" @click.prevent="removeTag(index)" href="#">&times;</a>
            </span>
            <input class="tag-input" type="text" v-model.trim="value" @keydown.enter="addNewTag"
                @keydown.delete="removeLastTag" @keydown.tab.prevent="addNewTag"
                :class="{ 'tag-exists': isTagExists }" />
        </div>

    </section>
</template>

<style scoped>
.tag-input.tag-exists {
    color: red;
    text-decoration: line-through;
}

.tags-input-wrapper {
    background: #fff;
    padding: 0.5em;
    border: 1px solid #dbdbdb;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 36px;
    box-sizing: border-box;
}

.tag-item {
    color: #212529;
    background-color: #eee;
    margin-right: 0.3em;
    padding: 0.25em 0.4em;
    font-size: 75%;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 1.25em;
    padding-left: 0.6em;
}

.tag-input {
    color: #495057;
    flex: 1;
    background: transparent;
    border: none;
}

.tag-input:focus {
    outline: none;
}

a.remove-tag {
    text-decoration: none;
}
</style>
