import api from "./api";

export const addProject = async ({ alunoId, name, description, techs }) => {
  const body = {
    aluno: { id: alunoId },
    nome: name,
    descricao: description,
    tecnologias: techs,
  };

  const response = await api.post("/projetos", body);

  return response.data;
};

export const validateProject = async ({ id, validate }) => {
  const body = { validado: validate };

  const response = await api.put("/projetos/:id", body);

  return response.data;
};

export const getProjects = async () => {
  const response = await api.get("/projetos");

  return response.data;
};
