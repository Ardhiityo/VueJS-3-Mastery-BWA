<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="$emit('submit', email, password)">
      <div class="mb-3">
        <input
          type="email"
          :value="email"
          @input="handleInputEmail"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          :value="password"
          @input="$emit('update:password', $event.target.value)"
          class="form-control"
          placeholder="Password"
        />
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
      //
    };
  },
  props: {
    email: String,
    // emailModifiers digunakan untuk menerima modifier dari v-model
    // contoh: v-model.lowercase="email" -> emailModifiers = { lowercase: true }
    emailModifiers: {
      type: Object,
      default: () => ({}),
    },
    password: String,
  },
  methods: {
    handleInputEmail(event) {
      let value = event.target.value;
      if (this.emailModifiers.lowercase) {
        value = value.toLowerCase();
      }
      this.$emit("update:email", value);
    },
  },
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
    // Jika tidak memiliki validasi maka berikan null
    "update:email": null,
    "update:password": null,
  },
};
</script>