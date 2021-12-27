import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import { Button, Form, WrapLink, Input } from "../FormLogin/style";

import Logo from "../../Assets/Logo.png";
import { useHistory } from "react-router-dom";
import http from "../../Services/httpRequest";
import Alert from "@material-ui/lab/Alert";

const CustomBox = {
    bg: "var(--primary)",
    borderRadius: "20px",
    padding: "32px 40px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px",
  };


  
const FormResetPassword = () => {

    let [error, setError] = useState('');
    let [email, setEmail] = useState('');
    let [codigo, setCodigo] = useState('');
    let [password, setPassword] = useState('');
    let [password1, setPassword1] = useState('');
    var [senha, setSenha] = useState('');
    var [ spans, setSpans] = useState(false)
    const history = useHistory();

    const verificasenha = () => {
      if(password === password1){
          setSenha(password);
          setSpans(false);
      }else{
          setSpans(true)
      }
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        const body = {
            email: email,
            newpassword: senha,
            token: codigo
          }

        if (email && codigo && senha) {
          console.log(window.innerHeight);
          http
            .post("/user/resetpassword", body)
            .then((result) => {
              history.push("/login");
              console.log('go');
              console.log(result);
            })
            .catch((err) => {
              console.log(err.response.data.message);
              setError(err.response.data.message);
            });
        } else {
          setError("Preencha todos os dados corretamento!");
        }
        
      };

    return (
        <Flex direction="column" align="center" justify="center" marginBottom='50px'>
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
          Recupere sua senha
        </Text>
        {error ? 
        <Alert severity="error">{error}</Alert>
        : null}
        <Form onSubmit={HandleSubmit}>
         <Input>
                <p id="name-user" style={{ marginBottom: '10px' }}>Email</p>
                <input
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digitar e-mail"
                  type="text"
                  required
                />
              </Input>
              <Input>
                <p id="name-user" style={{marginBottom: '10px'}}>Código</p>
                <input
                  onChange={e => setCodigo(e.target.value)}
                  placeholder="Digitar o codigo"
                  type="text"
                  required
                />
              </Input>
              <Input>
                <p id="name-user" style={{marginBottom: '10px'}}>Nova Senha</p>
                <input
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digitar nova senha"
                  type="password"
                  required
                />
              </Input>
              <Input>
                <p id="name-user" style={{marginBottom: '10px'}}>Repetir Nova Senha</p>
                <input
                  onChange={e => setPassword1(e.target.value)}
                  placeholder="Repetir nova senha"
                  type="password"
                  required
                />
              </Input>
       
        {spans ?  <span style={{color: 'red'}}>Senhas diferentes</span> : null}
        
         <Button
            type="submit"
            c={"var(--secondary)"} 
            ch={"var(--tertiary)"}
            onClick={verificasenha}
          >
             <Text
              fontFamily="'Poppins',sans-serif"
              textAlign="center"
              color="#FFF"
              fontSize="18px"
            >
              Alterar
            </Text>
          </Button>
        </Form>
        <WrapLink>
        </WrapLink>
      </Box>
    </Flex>
    );
}

export default FormResetPassword;