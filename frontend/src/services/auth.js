import api from "./api";

export const auth = async ({ login, senha }) => {
  const response = await api.post("/login", { login, senha });

  return response.data;
};
