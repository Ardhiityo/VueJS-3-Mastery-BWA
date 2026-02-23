import {defineStore} from "pinia";

import {
  getTasks,
  createTask,
  updateTask,
  completeTask,
  deleteTask,
} from "../http/task-api";

import {computed, ref} from "vue";

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

  async function handleAddTask(task) {
    const response = await createTask({name: task});
    if (response.status === 201) {
      const value = await response.data.data;
      tasks.value.unshift(value);
    }
  }

  async function handleUpdateTask(id, newTask) {
    const response = await updateTask(id, {name: newTask});
    if (response.status === 200) {
      const oldTask = tasks.value.find((item) => item.id === id);
      oldTask.name = newTask;
    }
  }

  async function handleCompleteTask(task) {
    const response = await completeTask(task.id, {
      is_completed: !task.is_completed,
    });
    if (response.status === 200) {
      const currentTask = tasks.value.find((item) => item.id === task.id);
      currentTask.is_completed = !task.is_completed;
    }
  }

  async function handleRemoveTask(id) {
    if (confirm("Are you sure?")) {
      const response = await deleteTask(id);
      if (response.status === 204) {
        const index = tasks.value.findIndex((item) => item.id === id);
        tasks.value.splice(index, 1);
      }
    }
  }

  return {
    tasks,
    uncompletedTasks,
    completedTasks,
    fetchTasks,
    handleAddTask,
    handleUpdateTask,
    handleRemoveTask,
    handleCompleteTask,
  };
});
