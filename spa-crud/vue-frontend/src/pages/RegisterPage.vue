<script setup>
import { reactive } from "vue";
import { useAuth } from "../stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const authStore = useAuth();
const { errors } = storeToRefs(authStore);
const { handleRegister } = authStore;

const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const router = useRouter();

const handleSubmit = async () => {
  if (await handleRegister(form)) {
    return router.push({ name: "task" });
  }
};
</script>

<template>
  <main class="auth-wrapper">
    <form class="auth-form" @submit.prevent="handleSubmit">
      <h1>
        <span>ToeDoe</span>
        <strong>List</strong>
      </h1>
      <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
      <div class="form-floating mb-2">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter Your name"
          v-model="form.name"
        />
        <label for="name">Name</label>
        <p class="fw-semibold text-start text-danger" v-if="errors.name">
          {{ errors.name[0] }}
        </p>
      </div>
      <div class="form-floating mb-2">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="form.email"
        />
        <label for="email">Email</label>
        <p class="fw-semibold text-start text-danger" v-if="errors.email">
          {{ errors.email[0] }}
        </p>
      </div>
      <div class="form-floating mb-2">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="form.password"
        />
        <label for="password">Password</label>
        <p class="fw-semibold text-start text-danger" v-if="errors.password">
          {{ errors.password[0] }}
        </p>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="password_confirmation"
          placeholder="Password Confirmation"
          v-model="form.password_confirmation"
        />
        <label for="password_confirmation">Password Confirmation</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign up
      </button>
    </form>
  </main>
</template>