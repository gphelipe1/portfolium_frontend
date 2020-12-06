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
