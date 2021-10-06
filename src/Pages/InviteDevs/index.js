import React from "react";

import Menu from "../../Components/MenuInside";
import DevList from "../../Components/DevList";

import { Container } from "../Rooms/style";

const InviteDevs = () => {
  return (
    <Container>
      <Menu page="salas" />
      <DevList />
    </Container>
  );
};

export default InviteDevs;
