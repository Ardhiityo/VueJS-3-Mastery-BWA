<script setup>
import { useAuth } from "../stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const useAuthStore = useAuth();

const { isLogged } = storeToRefs(useAuthStore);

const router = useRouter();

const handleLogout = () => {
  useAuthStore.handleLogout();
  router.push({ name: "login" });
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container py-2">
      <RouterLink :to="{ name: 'homepage' }" class="navbar-brand">
        <span>Toedoe</span>
        <strong>List</strong>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- Cara 1 -->
            <RouterLink :to="{ name: 'task' }" class="nav-link"
              >Tasks</RouterLink
            >
            <!-- Cara 2 -->
            <!-- <a href="#" @click="$router.push({ name: 'task' })" class="nav-link">Tasks</a> -->
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'summary' }" class="nav-link"
              >Summary</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <template v-if="!isLogged">
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'login' }"
                class="btn btn-outline-secondary ms-2"
                >Login</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'register' }" class="btn btn-danger ms-2"
                >Register</RouterLink
              >
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a
                href="#"
                @click="handleLogout"
                class="btn btn-outline-secondary ms-2"
                >Logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Hanya diterapkan pada element yang punya 2 class berikut, apabila hanya 1 element memiliki salahsatu dari class berikut maka tidak akan diterpkan */
.nav-link.router-link-exact-active {
  color: rgba(0, 0, 0, 0.9);
}
</style>