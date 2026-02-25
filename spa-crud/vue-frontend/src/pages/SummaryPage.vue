<script setup>
import Summary from "../components/Summary.vue";
import { storeToRefs } from "pinia";
import { useTask } from "../stores/task";
import { onMounted } from "vue";

const taskStore = useTask();

onMounted(async () => taskStore.fetchTasks());

const { uncompletedTasks, completedTasks } = storeToRefs(taskStore);
</script>

<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="mb-4">
            Summary <small class="text-muted">(Tasks this week)</small>
          </h1>
          <Summary :tasks="uncompletedTasks" title="Uncompleted" />
          <Summary :tasks="completedTasks" title="Completed" />
        </div>
      </div>
    </div>
  </main>
</template>