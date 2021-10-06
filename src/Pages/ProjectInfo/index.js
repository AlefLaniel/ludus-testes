import React from "react";

import { Container } from "../Rooms/style";

import ProjectDocs from "../../Components/ProjectDocs";
import Menu from "../../Components/MenuInside";

const ProjectInfo = () => {
  return (
    <Container>
      <Menu page="salas" />
      <ProjectDocs />
    </Container>
  );
};

export default ProjectInfo;
