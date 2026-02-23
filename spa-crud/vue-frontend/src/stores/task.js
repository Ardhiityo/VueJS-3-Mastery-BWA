import {defineStore} from "pinia";

export const useTask = defineStore("useTask", {
  state: () => ({
    tasks: [],
    task: {
      name: "Pinia Task",
      is_completed: true,
    },
  }),
});
