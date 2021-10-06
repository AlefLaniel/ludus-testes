import uuid from "react-uuid";

const loadProjects = () => {
  return [
    {
      _id: uuid(),
      headerImage:
        "https://wallpaperboat.com/wp-content/uploads/2019/10/programming-02.jpg",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
      projectName: "Ludus1",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      status: "Em análise",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
    {
      _id: uuid(),
      headerImage: "https://wallpaperaccess.com/full/20585.jpg",
      img: "https://www.tomswallpapers.com/large/201503/22697.jpg",
      projectName: "Ludus2",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "Arquivado",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
    {
      _id: uuid(),
      headerImage:
        "https://previews.123rf.com/images/tolkachev/tolkachev1805/tolkachev180500286/102067161-abstract-glowing-colorful-digital-brain-wallpaper-ai-and-technology-concept-3d-rendering.jpg",
      img: "https://i.imgur.com/cDqspyH.png",
      projectName: "Ludus3",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "Em análise",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
    {
      _id: uuid(),
      headerImage:
        "https://mullerimoveisrj.com.br/wp-content/uploads/2018/07/Corretores-de-Im%C3%B3veis-na-Barra-da-Tijuca.jpg",
      img: "https://ludii.co/images/person_2.png",
      projectName: "Breno Peixoto",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "Aprovado",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
    {
      _id: uuid(),
      headerImage: "https://ludii.co/images/ludus_3.png",
      img: "https://miro.medium.com/max/1280/1*12YAodJUNEf0-e2MwfBdyg.jpeg",
      projectName: "Hugo Barreto",
      projectDescription:
        "O Ludus é um processo com método de gestão criado para nortear o desenvolvimento de Mínimos Produtos Viáveis (MVPs) inovadores baseados em pesquisa científica. Sua concepção deveu-se, principalmente, a necessidade de gerar resultados em ambientes universitários nos quais não há dedicação exclusiva dos colaboradores ou reuniões físicas constantes entre os membros de uma equipe.",
      status: "Aprovado",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
    {
      _id: uuid(),
      headerImage:
        "https://image.freepik.com/vetores-gratis/bate-papo-bot-free-wallpaper-o-robo-segura-o-telefone-responde-a-mensagens_80328-162.jpg",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D35AQFohaE_981YXA/profile-framedphoto-shrink_200_200/0?e=1597417200&v=beta&t=MdP40YYm2lC8UaFuqF-bnz9NA_aIIHRTD7yYX32YpBE",
      projectName: "Chatbot",
      projectDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "Aprovado",
      links: [],
      imagens: [],
      pdfs: [],
      labels: [
        { _id: uuid(), name: "Urgente", color: "#f73232", status: true },
        { _id: uuid(), name: "Front-end", color: "#e0cf0b", status: true },
        { _id: uuid(), name: "Back-end", color: "#07e603", status: true },
      ],
      members: [
        {
          _id: uuid(),
          name: "Antonio",
          img: "https://api.adorable.io/avatars/285/abott@adorable.png",
        },
        {
          _id: uuid(),
          name: "Teste",
          img:
            "https://s2.glbimg.com/8o0Ms_9oweqcvvTUVmllIjzfAZo=/780x440/e.glbimg.com/og/ed/f/original/2019/06/13/gettyimages-947694978.jpg",
        },
      ],
    },
  ];
};

export default loadProjects;
