import React from "react";

import Card from "../../Components/Card";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

import { Container, WrapCards } from "./style.js";

const MockedData = [
  {
    headerImage:
      "https://wallpaperboat.com/wp-content/uploads/2019/10/programming-02.jpg",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
    projectName: "Ludus1",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    headerImage: "https://wallpaperaccess.com/full/20585.jpg",
    img: "https://www.tomswallpapers.com/large/201503/22697.jpg",
    projectName: "Ludus2",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    headerImage:
      "https://previews.123rf.com/images/tolkachev/tolkachev1805/tolkachev180500286/102067161-abstract-glowing-colorful-digital-brain-wallpaper-ai-and-technology-concept-3d-rendering.jpg",
    img: "https://i.imgur.com/cDqspyH.png",
    projectName: "Ludus3",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    headerImage:
      "https://mullerimoveisrj.com.br/wp-content/uploads/2018/07/Corretores-de-Im%C3%B3veis-na-Barra-da-Tijuca.jpg",
    img: "https://ludii.co/images/person_2.png",
    projectName: "Breno Peixoto",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    headerImage: "https://ludii.co/images/ludus_3.png",
    img: "https://miro.medium.com/max/1280/1*12YAodJUNEf0-e2MwfBdyg.jpeg",
    projectName: "Hugo Barreto",
    projectDescription:
      "O Ludus é um processo com método de gestão criado para nortear o desenvolvimento de Mínimos Produtos Viáveis (MVPs) inovadores baseados em pesquisa científica. Sua concepção deveu-se, principalmente, a necessidade de gerar resultados em ambientes universitários nos quais não há dedicação exclusiva dos colaboradores ou reuniões físicas constantes entre os membros de uma equipe.",
  },
  {
    headerImage:
      "https://image.freepik.com/vetores-gratis/bate-papo-bot-free-wallpaper-o-robo-segura-o-telefone-responde-a-mensagens_80328-162.jpg",
    img:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHqws5KjrMXzQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=K3G-WC6XEHJymk7cuBdUKpLtdbgZoEdVBuvpfzxFQeU",
    projectName: "Chatbot",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Proposals = () => {
  return (
    <>
      <Menu />
      <Container>
        <WrapCards>
          {MockedData.map((item, index) => (
            <Card
              key={index}
              headerImage={item.headerImage}
              img={item.img}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
            />
          ))}
        </WrapCards>
      </Container>
      <Footer />
    </>
  );
};

export default Proposals;
