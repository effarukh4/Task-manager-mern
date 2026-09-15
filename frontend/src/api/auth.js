import API from "./axios";

export const registerRequest = async ({ name, email, password }) => {
  const { data } = await API.post("/auth/register", { name, email, password });
  return data.data;
};

export const loginRequest = async ({ email, password }) => {
  const { data } = await API.post("/auth/login", { email, password });
  return data.data;
};

export const meRequest = async () => {
  const { data } = await API.get("/auth/me");
  return data.data;
};
