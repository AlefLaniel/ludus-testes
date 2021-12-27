import React from "react";

import bgImg from "../../Assets/background.png";
import FormCadastro from "../../Components/FormCadastro";

import { Container } from "../Login/style.js";

const Cadastro = () => {
  return (
    <Container backgroundImg={bgImg}>
      <FormCadastro />
    </Container>
  );
};

export default Cadastro;
