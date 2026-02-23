import {defineStore} from "pinia";
import {getTasks} from "../http/task-api";

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
