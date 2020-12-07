export const addProject = async ({ alunoId, name, description, techs }) => {
  const body = {
    aluno: { id: alunoId },
    nome: name,
    descricao: description,
    tecnologias: techs,
  };

  console.log(body);
};
