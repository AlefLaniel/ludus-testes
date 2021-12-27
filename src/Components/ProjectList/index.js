import React from "react";

import Card from "../Card";
import AddCard from "../AddCard";

import { Container, WrapList } from "./style.js";
import {
  faPlus,
  faCheckSquare,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import loadProjects from "../../Services/projectApi";

const data = loadProjects();

const Anchors = [
  {
    text: "Submeter uma ideia",
    link: "/formulario",
    icon: faPlus,
    color: "white",
  },
  {
    text: "Convidar Consultores",
    link: "/convidarconsultor",
    permissions: ["administrador", "consultor"],
    icon: faUserTie,
    color: "white",
  },
  {
    text: "Aprovar Projetos",
    link: "/selecaoprojetos",
    permissions: ["consultor"],
    icon: faCheckSquare,
    color: "white",
  },
];

const ProjectList = () => {
  return (
    <Container>
      <WrapList checkMockup={data[0]}>
        {data[0] ? (
          data.map((item, index) => (
            <Card
              _id={item._id}
              key={index}
              headerImage={item.headerImage}
              img={item.img}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
            />
          ))
        ) : (
          <AddCard link="/formulario" description="Submeter uma ideia" />
        )}
      </WrapList>
    </Container>
  );
};

export default ProjectList;
