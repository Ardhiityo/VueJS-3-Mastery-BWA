<template>
    <section>
        <h1>Login</h1>
        <form @submit.prevent="$emit('submit', email, password)">
            <div class="mb-3">
                <input type="email" v-model="email" class="form-control" placeholder="Email">
            </div>
            <div class="mb-3">
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <div class="mb-3">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data: function () {
        return {
            email: '',
            password: ''
        }
    },
    // props: {
    //     email: String,
    //     emailModifiers: {
    //         type: Object,
    //         default: () => ({})
    //     },
    //     password: String
    // },
    // methods: {
    //     handleInputEmail(event) {
    //         let value = event.target.value;
    //         if (this.emailModifiers.lowercase) {
    //             value = value.toLowerCase();
    //         }
    //         this.$emit('update:email', value);
    //     }
    // },
    emits: {
        // Emit Validation
        submit: (email, password) => {
            if (email && password) {
                return true;
            } else {
                console.warn("Invalid submit event payload.");
                return false;
            }
        },
        'update:email': null,
        'update:password': null,
    }
}
</script>