import { fakeStudents, fakeStudentProjects } from "./data";

export const findStudents = async () => {
  try {
    // const response = await api.get("/alunos");
    // const { data } = response;
    const data = fakeStudents;

    return data;
  } catch (err) {
    console.log(`Erro ao buscar Alunos`, err);
    return [];
  }
};

export const findStudentProjects = async (id) => {
  try {
    // const response = await api.get(`/alunos/${id}/projetos`);
    const data = fakeStudentProjects;

    return data;
  } catch (err) {
    console.log(`Erro ao buscar projetos do Aluno`, err);
    return [];
  }
};
