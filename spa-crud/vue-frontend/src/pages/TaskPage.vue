<script setup>
import { onMounted, ref, computed } from "vue";
import { useTask } from "../stores/task.js";
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import { storeToRefs } from "pinia";

const taskStore = useTask();

// storeToRefs: hanya untuk state dan computed properties → menghasilkan refs
const { completedTasks, uncompletedTasks, tasks } = storeToRefs(taskStore);

const { fetchTasks } = taskStore;

onMounted(async () => await fetchTasks());

const showCompletedTask = ref(true);

const handleShowToggle = () =>
  (showCompletedTask.value = !showCompletedTask.value);

const titleToggle = computed(() => (showCompletedTask.value ? "Hide" : "Show"));

const showToggle = computed(() => completedTasks.value.length);

/**
 onMounted(() => {
     // Define pinia without reactivity
     const taskPinia = useTask();
 
     // Define pinia with reactivity
     const taskPiniaToRefs = storeToRefs(useTask());
 
     // Update state pinia cara 1
     // taskPinia.task.name = 'Update task';
     // taskPinia.task.is_completed = false;
 
     // Update state pinia cara 2
     taskPinia.$patch({
         task: {
             name: 'Update from $patch',
             is_completed: false
         }
     })
 
     console.log(taskPiniaToRefs.task.value)
 })
 */
</script>

<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <AddTask />
          <!-- List of uncompleted tasks -->
          <Tasks :tasks="uncompletedTasks" />

          <!--Toggle show tasks -->
          <div class="my-3 d-flex" v-if="showToggle">
            <button class="btn btn-primary mx-auto" @click="handleShowToggle">
              {{ titleToggle }} completed tasks
            </button>
          </div>

          <!-- List of completed tasks -->
          <Tasks :tasks="completedTasks" v-if="showCompletedTask" />
        </div>
      </div>
    </div>
  </main>
</template>