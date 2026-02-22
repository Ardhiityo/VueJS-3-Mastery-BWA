import api from "./api.js";

const resource = "/tasks";

export const getTasks = () => api.get(resource);

export const createTask = (data) => api.post(resource, data);

export const updateTask = (id, data) => api.patch(`${resource}/${id}`, data);

export const completeTask = (id) => api.patch(`${resource}/${id}/complete`);

export const deleteTask = (id) => api.delete(`${resource}/${id}`, data);
