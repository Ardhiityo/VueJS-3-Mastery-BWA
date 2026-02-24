<script setup>
import { reactive } from "vue";
import { useAuth } from "../stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const { handleLogin } = useAuth();

const form = reactive({
  email: "",
  password: "",
});

async function handleSubmit() {
  if (await handleLogin(form)) {
    return router.push({ name: "task" });
  }
  alert("Ups, something wrong!");
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
        />
        <label for="email">Email</label>
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