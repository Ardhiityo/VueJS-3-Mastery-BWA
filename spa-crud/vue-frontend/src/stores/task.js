import {defineStore} from "pinia";

export const useTask = defineStore("useTask", {
  state: () => ({
    tasks: [
      {
        name: "Task A",
        is_completed: true,
      },
      {
        name: "Task B",
        is_completed: false,
      },
    ],
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
});
