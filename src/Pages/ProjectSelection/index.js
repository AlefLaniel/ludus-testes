import React from "react";

import Menu from "../../Components/MenuInside";
import SelectionList from "../../Components/SelectionList";

import { Container } from "../Rooms/style";

const ProjectSelection = () => {
  return (
    <Container>
      <Menu page="salas" />
      <SelectionList />
    </Container>
  );
};

export default ProjectSelection;
