import { fakeProjects } from "./data";

export const addProject = async ({ alunoId, name, description, techs }) => {
  const body = {
    aluno: { id: alunoId },
    nome: name,
    descricao: description,
    tecnologias: techs,
  };

  console.log(body);
};

export const validateProject = async ({ id, validate }) => {
  const body = { validado: validate };

  console.log(body, id);
};

export const getProjects = async () => {
  return fakeProjects;
};
