import React, {useContext, useEffect} from "react";

import bgImg from "../../Assets/background.png";

import { Container } from "./style.js";
import FormLogin from "../../Components/FormLogin";
import  { Context } from "../../Context/contextApi";

const Login = () => {
  const {desloga} = useContext(Context);
  useEffect(() => {
    (async () => {
      desloga();
    })();
  }, []);
  return (
    <Container backgroundImg={bgImg}>
      <FormLogin />
    </Container>
  );
};

export default Login;
