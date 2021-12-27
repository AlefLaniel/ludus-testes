import React, { useState, useContext } from "react";
import http from "../../Services/httpRequest";
import { getId, idUser, login, logout } from "../../Services/auth";

import Logo from "../../Assets/Logo.png";

import { Image, Flex,Box, Text } from "@chakra-ui/core";
import { Form, Button, WrapLink, Input } from "./style.js";
import { Link, useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

import Alert from "@material-ui/lab/Alert";
import  { Context } from "../../Context/contextApi";


console.log(window.innerWidth)

var errorNow;



const CustomBox = {
  bg: "var(--primary)",
  borderRadius: "20px",
  padding: "32px 40px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px",
};

const FormLogin = () => {
  var { loga, auth }   = useContext(Context);
  let history = useHistory();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState();

  function loadingLogin() {
      if(auth && !error){
        return <CircularProgress size='20px'/>
      }
      if(!auth || error){
        return 'Continuar'
      }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      console.log(window.innerHeight);
      http
        .post("/login", {
          email,
          password,
        })
        .then((result) => {
          logout();
          login(result.data.token);
          console.log();
          idUser(result.data._id);
          loga();
          console.log(getId());
          http.defaults.headers.Authorization = `Bearer ${result.data.token}`;
          history.push("/salas");
        })
        .catch((err) => {
          console.log(err);

          setError(err.response.data.message);
        });
    } else {
      setError("Preencha todos os dados!");
    }
    console.log(errorNow)
    
  };
  
  return  (
    <Flex direction="column" align="center" justify="center">
      <Image src={Logo} alt="Ludusfy" margin="50px 0px" width="200px" />
      <Box {...CustomBox} width={[
         "90%", // base
         "70%", // 480px upwards
         "60%", // 768px upwards
         "40%", // 992px upwards
  ]}>
        <Text
          fontFamily="'oboto',sans-serif"
          textAlign="center"
          fontSize="24px"
          fontWeight="700"
          color="#FFF"
          marginBottom="10px"
        >
          Entre na sua conta
        </Text>
        {error ? 
        <Alert severity="error">{error}</Alert>
        : null}
        <Form onSubmit={HandleSubmit}>
        <Input>
                <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%"}}>Email</p>
                <input
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digitar e-mail"
                  type="text"
                  required
                />
              </Input>
              <Input>
                <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%" }}>Senha</p>
                <input
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digitar Senha"
                  type="password"
                  required
                />
              </Input>
         
         <Button
            type="submit"
            c={"var(--secondary)"} 
            ch={"var(--tertiary)"}
          >
             <Text
              fontFamily="'Poppins',sans-serif"
              textAlign="center"
              color="#FFF"
              fontSize="18px"
            >
               {loadingLogin()}
            </Text>
          </Button>
        </Form>
        <WrapLink>
          <Link to="/forgotpassword" style={{
            color: "#fff"
          }}>Esqueci minha senha</Link>
          <text>
            -
          </text>
          <Link to="/cadastro" style={{
            color: "#fff"
          }}> Criar conta</Link>
        </WrapLink>
      </Box>
    </Flex>
  );
};

export default FormLogin;

