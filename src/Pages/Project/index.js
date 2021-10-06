import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Kanban from "../../Components/Kanban";
import Menu from "../../Components/MenuInside";
import { Container } from "../Rooms/style";

const Project = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container color="ecf1f8">
        <Menu page="salas" />
        <Kanban />
      </Container>
    </DndProvider>
  );
};

export default Project;
