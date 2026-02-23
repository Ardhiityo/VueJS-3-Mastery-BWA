import {defineStore} from "pinia";
import {getTasks} from "../http/task-api";
import {compile, computed, ref} from "vue";

// Cara 1
/*
export const useTask = defineStore("useTask", {
  state: () => ({
    tasks: [],
  }),
  // Berperilaku seperti computed
  getters: {
    // Cara 1
    uncompletedTasks: function () {
      return this.tasks.filter((item) => !item.is_completed);
    },

    // Cara 2
    completedTasks() {
      return this.tasks.filter((item) => item.is_completed);
      },
      },
      actions: {
        fetchTasks: async function () {
          const response = await getTasks();
          if (response.status === 200) {
            this.tasks = response.data.data;
            }
            },
            },
            });
            */

export const useTask = defineStore("useTask", () => {
  const tasks = ref([]);

  const uncompletedTasks = computed(() =>
    tasks.value.filter((item) => !item.is_completed),
  );

  const completedTasks = computed(() =>
    tasks.value.filter((item) => item.is_completed),
  );

  const fetchTasks = async () => {
    const response = await getTasks();
    if (response.status === 200) {
      tasks.value = response.data.data;
    }
  };

  return {
    tasks,
    uncompletedTasks,
    completedTasks,
    fetchTasks,
  };
});
