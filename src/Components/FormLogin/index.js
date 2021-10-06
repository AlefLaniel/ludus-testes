import React, { useState, useContext } from "react";
import http from "../../Services/httpRequest";
import { getId, idUser, login, logout } from "../../Services/auth";

import Logo from "../../Assets/Logo.PNG";

import { Image, Flex,Box, Text } from "@chakra-ui/core";
import { Form, Button, WrapButtons, WrapLink } from "./style.js";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Accordion from '@material-ui/core/Accordion';
import Alert from "@material-ui/lab/Alert";
import { width } from "dom-helpers";
import Password from "antd/lib/input/Password";
import  { Context } from "../../Context/contextApi";


console.log(window.innerWidth)

var auth = false;

var errorNow;



const CustomBox = {
  bg: "#263B37",
  borderRadius: "3px",
  padding: "32px 40px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px",
  
};
const FormLogin = () => {
  var { loga, set_iD, id }   = useContext(Context);
  let history = useHistory();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState();


  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      console.log(window.localStorage);
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
          console.log(getId());
          http.defaults.headers.Authorization = `Bearer ${result.data.token}`;
          history.push("/salas");
        })
        .catch((err) => {
          console.log(err);

          errorNow = err.response.status;
          setError(err.response.data.message);
        });
    } else {
      setError("Preencha todos os dados!");
    }
    console.log(errorNow)
    
  };
  
  return  (
    <Flex direction="column" align="center" justify="center">
      <Image src={Logo} alt="Ludusfy" margin="50px 0px" />
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
        >
          Entre na sua conta
        </Text>
        {error ? 
        <Alert severity="error">{error}</Alert>
        : null}
        <Form onSubmit={HandleSubmit}>
          {(error && email === '') || (error === 'Usuário ou Senha inválidos')  || (error === 'Esse email não existe')  ?
          <TextField 
          error
          onChange={e => setEmail(e.target.value)}
          id="outlined-error-helper-text"
          variant="outlined"
          required
          style={{ backgroundColor: '#21302C' }}
          InputProps={{
            style: {
              fontFamily: 'nunito', color: 'white', borderColor: 'white'
            }}}
            label="Digitar e-mail"
        />
          :
          <TextField
           onChange={(e) => setEmail(e.target.value)}
            style={{ background: '#21302C'}}
           InputLabelProps={{
             style: {color: "#FFF"},
           }}
           InputProps={{
             style: {
               fontFamily: 'nunito', color: 'white', borderColor: 'white'
             }}}
            id="outlined-basic"
           label="Digitar e-mail"
            variant="outlined"
        />
        }
        {(error && password === '') || error ? 
          <TextField 
          error
          onChange={e => setPassword(e.target.value)}
          id="outlined-error-helper-text"
          variant="outlined"
          required
          type="password"
          style={{ backgroundColor: '#21302C' }}
          InputProps={{
            style: {
              fontFamily: 'nunito', color: 'white', borderColor: 'white'
            }}}
            label="Digitar Senha"
        />
        : 
          <TextField
          onChange={(e) => setPassword(e.target.value)}
          style={{ background: '#21302C'}}
          InputLabelProps={{
            style: {color: "#FFF"},
          }}
          InputProps={{
            style: {
              fontFamily: 'nunito', color: 'white', borderColor: 'white'
            }}}
          id="outlined-basic"
          type="password"
          label="Digitar Senha"
          variant="outlined"
        />
        }
         
         <Button
            type="submit"
            c={"#03A47E"} 
            ch={"#048466"}
            onClick={loga}
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
          <Link to="/salas" style={{
            color: "#fff"
          }}>Não consegue entrar?</Link>
          &bull;
          <Link to="/cadastro" style={{
            color: "#03A47E"
          }}> Criar conta</Link>
        </WrapLink>
      </Box>
    </Flex>
  );
};

export default FormLogin;

