import API from "./axios";

export const fetchTasks = async (status) => {
  const params = status ? { status } : {};
  const { data } = await API.get("/tasks", { params });
  return data.data;
};

export const fetchTask = async (id) => {
  const { data } = await API.get(`/tasks/${id}`);
  return data.data;
};

export const createTask = async (payload) => {
  const { data } = await API.post("/tasks", payload);
  return data.data;
};

export const updateTask = async (id, payload) => {
  const { data } = await API.put(`/tasks/${id}`, payload);
  return data.data;
};

export const deleteTask = async (id) => {
  await API.delete(`/tasks/${id}`);
  return id;
};
