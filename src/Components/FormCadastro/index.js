import React, { useState} from "react";

import Logo from "../../Assets/Logo.png";


import { Link, useHistory } from "react-router-dom";
import { Image, Flex, Box, Text } from "@chakra-ui/core";
import { Form, Button, WrapLink, Input } from "../FormLogin/style";
import InputMask from "react-input-mask";
import http from "../../Services/httpRequest";
import Alert from "@material-ui/lab/Alert";

const CustomBox = {
  bg: "var(--primary)",
  borderRadius: "20px",
  padding: "32px 40px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px",
};

var data;

const FormCadastro = () => {
// eslint-disable-next-line
  const [display, setDisplay] = useState(true);
  const [error, setError] = useState();
  const history = useHistory();


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

 
  const HandleSubmit = (e) => {
    e.preventDefault();
  if(phone === ''){
     data = {
      name: name,
      email: email,
      password: password 
    } 
  }else {
     data = {
      name: name,
      email: email,
      password: password,
      phone: phone  
    } 
  }
    if (data.name !== '' && data.password !== '' && data.email !== '') {
      http
        .post("/user", data)
        .then((res) => {
          console.log(res);
          console.log('go')
          history.push("/login");

          http.post("/user/registerEmail", {email}).then((resp) => {
            console.log(resp);
          }).catch((erro) => {
            console.log(erro.response);
          })
        })
        .catch((err) => {
          console.log(err.response);
          setError(err.response.data.message);
          setDisplay(true);
        });
    } else {
      setError("Preencha os dados obrigatórios!");
      setDisplay(true);
    }


  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Image src={Logo} alt="Ludusfy" margin="30px 0px" width="200px"/>
      <Box {...CustomBox} width={[
         "85%", // base
         "70%", // 480px upwards
         "50%", // 768px upwards
         "40%", // 992px upwards
  ]}>
        <Text
          fontFamily="'Nunito',sans-serif"
          textAlign="center"
          fontSize="20px"
          fontWeight="700"
          color='#fff'
        >
          Se cadastre agora no Ludus
        </Text>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <Form onSubmit={HandleSubmit}>
        <Input>
                <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%" }}>Nome</p>
                <input
                  onChange={e => setName(e.target.value)}
                  placeholder="Digitar Nome"
                  type="text"
                  required
                  value={name}
                />
              </Input>

              <Input>
                <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%" }}>Email</p>
                <input
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digitar e-mail"
                  type="text"
                  required
                  value={email}
                />
              </Input>
       
          
              <Input>
                <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%" }}>Senha</p>
                <input
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digitar Senha"
                  type="password"
                  required
                  value={password}
                />
              </Input>
         
          <InputMask  mask="(99) 99999-9999"  onChange={e => setPhone(e.target.value)}>
            {() => (
               <Input>
               <p id="name-user" style={{ marginBottom: '10px', fontSize: "100%" }}>Telefone</p>
               <input
                 onChange={e => setEmail(e.target.value)}
                 placeholder="Digitar Telefone"
                 type="text"
                 value={phone}
               />
             </Input>
            )}
          </InputMask>
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
               Continuar
            </Text>
          </Button>
        </Form>
        
        <WrapLink>
        <Link to="/login" style={{
            color: "#fff"
          }}>
             Já tem conta? Faça o login
             </Link>
        </WrapLink>
      </Box>
    </Flex>
  );
};

export default FormCadastro;
