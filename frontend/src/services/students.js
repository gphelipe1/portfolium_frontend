const fakeStudents = [];
const fakeStudentProjects = [];

for (let i = 0; i < 20; i++) {
  fakeStudents.push({
    id: `${i}`,
    nome: `Progamador ${i}`,
    descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida justo id diam dictum iaculis. Pellentesque malesuada dui eros, eu pretium purus ultrices a. Donec iaculis diam eget laoreet accumsan. Aenean felis nulla, consectetur eu ex quis, varius ullamcorper diam. Ut vitae congue elit. Ut nibh libero, tempor a est id, pretium volutpat erat. Proin rutrum, nibh in pellentesque rhoncus, urna neque ultrices neque, id convallis felis nibh id lectus. Nunc interdum, enim ac congue dictum, lorem mauris ullamcorper nisi, in imperdiet lorem velit et nibh. Aenean suscipit, urna ut euismod lobortis, quam arcu mattis enim, quis feugiat turpis turpis vitae lorem. Donec dignissim justo ipsum, sed accumsan justo porttitor quis. Nunc aliquet efficitur augue in imperdiet.

      Ut mattis ultricies scelerisque. Suspendisse quis consectetur libero. Maecenas interdum est vitae vulputate viverra. Vestibulum pretium cursus nisi id ornare. Praesent quis sem purus. Donec efficitur dolor at diam ultrices fringilla. Sed elementum quam in metus suscipit, sed ultrices nibh auctor.
      
      Aliquam dolor purus, suscipit nec est tincidunt, laoreet dictum lectus. Sed auctor sodales elit, eu venenatis nunc pretium ac. Ut euismod gravida aliquet. Donec id finibus ante. Aliquam eu risus orci. Duis fringilla viverra metus vitae iaculis. Mauris iaculis dolor eleifend lacus consectetur dapibus. Quisque vitae felis lacinia, pharetra enim convallis, consectetur est. Suspendisse potenti. Nulla facilisi. Quisque at tincidunt ipsum, sit amet egestas tellus. Vestibulum nec ante a velit dictum mollis.
      
      Quisque laoreet lorem magna, hendrerit commodo ante pulvinar ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque mollis arcu eu ultricies. Curabitur in interdum metus. Duis eleifend convallis dictum. Nunc id dolor et dolor congue tincidunt et ut urna. Pellentesque mattis, sapien eget mattis faucibus, nunc libero rutrum erat, vitae lobortis elit nisl in magna. Donec consectetur auctor purus id imperdiet. Suspendisse potenti. Curabitur aliquet nisi ac urna scelerisque, vel cursus magna hendrerit. Nulla tristique egestas lorem eu porttitor.
      
      Nulla blandit vestibulum mattis. Mauris faucibus justo eget lacus condimentum, facilisis tincidunt quam faucibus. Etiam vel viverra nibh, a dictum libero. Phasellus in ullamcorper neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus mi nibh, lobortis pharetra lorem condimentum sagittis. Maecenas consequat ornare varius. Curabitur placerat ultricies arcu, eu consequat arcu mollis at. Phasellus in sapien sit amet libero volutpat aliquet. Aenean et lorem eu massa posuere viverra ut in augue. Morbi ac tempus tellus, vel suscipit nulla. Cras lacus odio, egestas vel sapien a, condimentum molestie magna. Fusce eu orci consequat, venenatis dolor id, commodo sapien. Sed ipsum lectus, pulvinar nec sapien at, rutrum dapibus risus. Nullam ac condimentum mauris, nec rutrum sem.`,
    tecnologias: ["React", "Node", "Java", "JavaScript", "Python"],
  });

  fakeStudentProjects.push({
    aluno: {
      nome: "Dayvson",
      matricula: "12343",
    },
    nome: `Projeto Maneiro ${i}`,
    descricao: `Descrição top do projeto ${i}`,
    validado: i % 2 !== 0 ? null : i % 3 === 0 ? true : false,
    tecnologias: [
      {
        descricao: "Java",
      },
    ],
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
