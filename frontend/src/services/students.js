import api from "./api";

const fakeStudents = [];

for (let i = 0; i < 200; i++) {
  fakeStudents.push({
    id: `${i}`,
    nome: `Progamador ${i}`,
    descricao: "Programador Maneiro",
    tecnologias: ["React", "Node", "Java", "JavaScript"],
  });
}

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
