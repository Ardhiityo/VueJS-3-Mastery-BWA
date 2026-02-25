<script setup>
import { reactive } from "vue";
import { useAuth } from "../stores/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const router = useRouter();

const authStore = useAuth();

const { handleLogin } = authStore;

const { errors } = storeToRefs(authStore);

const form = reactive({
  email: "",
  password: "",
});

async function handleSubmit() {
  if (await handleLogin(form)) {
    return router.push({ name: "task" });
  }
}
</script>

<template>
  <main class="auth-wrapper">
    <form class="auth-form" @submit.prevent="handleSubmit">
      <h1>
        <span>ToeDoe</span>
        <strong>List</strong>
      </h1>
      <h2 class="h3 mb-4 fw-normal">Please sign in</h2>
      <div class="form-floating mb-2">
        <input
          type="email"
          class="form-control"
          v-model="form.email"
          id="email"
          placeholder="name@example.com"
          required
        />
        <label for="email">Email</label>
        <p class="fw-semibold text-start text-danger" v-if="errors.email">
          {{ errors.email[0] }}
        </p>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="form.password"
          placeholder="Password"
        />
        <label for="password">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </main>
</template>