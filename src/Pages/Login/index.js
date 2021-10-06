import React from "react";

import bgImg from "../../Assets/backgroundLoginCadastro.jpg";

import { Container } from "./style.js";
import FormLogin from "../../Components/FormLogin";

const Login = () => {
  return (
    <Container backgroundImg={bgImg}>
      <FormLogin />
    </Container>
  );
};

export default Login;
