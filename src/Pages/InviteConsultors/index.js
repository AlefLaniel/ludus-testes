import React from "react";

import Menu from "../../Components/MenuInside";
import ConsultorsList from "../../Components/ConsultorsList";

import { Container } from "../Rooms/style";

const InviteConsultors = () => {
  return (
    <Container>
      <Menu page="salas" />
      <ConsultorsList />
    </Container>
  );
};

export default InviteConsultors;
