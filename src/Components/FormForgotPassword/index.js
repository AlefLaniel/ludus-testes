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


  
const FormforgotPassword = () => {
    let [error, setError] = useState();
    let [email, setEmail] = useState('');
    const history = useHistory();

    const HandleSubmit = (e) => {
        e.preventDefault();


        if (email) {
          console.log(window.innerHeight);
          http
            .post("/user/forgot_password", {
              email,
            })
            .then((result) => {
              history.push("/resetpassword");
              console.log('go');
              console.log(result);
            })
            .catch((err) => {
              console.log(err.response.data.message);
              setError(err.response.data.message);
            });
           
        } else {
          setError("Preencha todos os dados!");
        }
      };

    return (
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
              Enviar
            </Text>
          </Button>
        </Form>
        <WrapLink>
        </WrapLink>
      </Box>
    </Flex>
    );
}

export default FormforgotPassword;