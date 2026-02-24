import api from "./api.js";

const resource = "/tasks";

const apiVersion = import.meta.env.VITE_API_VERSION;

export const getTasks = () => api.get(`${apiVersion}${resource}`);

export const createTask = (data) => api.post(`${apiVersion}${resource}`, data);

export const updateTask = (id, data) =>
  api.patch(`${apiVersion}${resource}/${id}`, data);

export const completeTask = (id, data) =>
  api.patch(`${apiVersion}${resource}/${id}/complete`, data);

export const deleteTask = (id) => api.delete(`${apiVersion}${resource}/${id}`);
