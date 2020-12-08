import api from "./api";

export const findStudents = async () => {
  try {
    const response = await api.get("/alunos");
    const { data } = response;

    return data;
  } catch (err) {
    console.log(`Erro ao buscar Alunos`, err);
    return [];
  }
};

export const findStudentProjects = async (id) => {
  try {
    const response = await api.get(`/alunos/:id/projetos`);

    return response.data;
  } catch (err) {
    console.log(`Erro ao buscar projetos do Aluno`, err);
    return [];
  }
};
