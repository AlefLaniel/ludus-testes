import React, { useState} from "react";

import Logo from "../../Assets/Logo.PNG";


import { Link, useHistory } from "react-router-dom";
import { TextField} from "@material-ui/core";
import { Image, Flex, Box, Text } from "@chakra-ui/core";
import { Form, Button, WrapLink } from "../FormLogin/style";
import InputMask from "react-input-mask";
import http from "../../Services/httpRequest";
import Alert from "@material-ui/lab/Alert";

const CustomBox = {
  bg: "#263B37",
  borderRadius: "10px",
  padding: "32px 40px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px",
};


// const professions = [
//   {
//     value: "Estudante",
//     label: "Estudante",
//   },
//   {
//     value: "Professor",
//     label: "Professor",
//   },
//   {
//     value: "Empresário",
//     label: "Empresário",
//   },
//   {
//     value: "Desenvolvedor Front-end",
//     label: "Desenvolvedor Front-end",
//   },
//   {
//     value: "Desenvolvedor Back-end",
//     label: "Desenvolvedor Back-end",
//   },
//   {
//     value: "Desenvolvedor Mobile",
//     label: "Desenvolvedor Mobile",
//   },
//   {
//     value: "Gerente",
//     label: "Gerente",
//   },
// ];


var data;

const FormCadastro = () => {
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
      <Image src={Logo} alt="Ludusfy" margin="30px 0px" />
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
          {(error && name === '') ? 
            <TextField 
            error
            onChange={e => setName(e.target.value)}
            id="outlined-error-helper-text"
            variant="outlined"
            required
            style={{ backgroundColor: '#21302C' }}
            InputProps={{
              style: {
                fontFamily: 'nunito', color: 'white', borderColor: 'white'
              }}}
              label="Digitar Nome"
        />
          :
          <TextField
            name="name"
            style={{ background: '#21302C'}}
            InputLabelProps={{
              style: {color: "#FFF"},
            }}
            InputProps={{
              style: {
                fontFamily: 'nunito', color: 'white', borderColor: 'white'
              }
              
            }}
            id="outlined-basic"
            label="Digitar Nome"
            variant="outlined"
            required
            onChange={e => setName(e.target.value)}
          />
          }
        {(error && email === '') ?
          <TextField 
            error
            onChange={e => setEmail(e.target.value)}
            id="outlined-error-helper-text"
            variant="outlined"
            required
            type="email"
            style={{ backgroundColor: '#21302C' }}
            InputProps={{
              style: {
                fontFamily: 'nunito', color: 'white', borderColor: 'white'
              }}}
              label="Digitar e-mail"
          />
          :
          <TextField
            name="email"
            style={{ 
              background: '#21302C',
            }}
            InputLabelProps={{
              style: {color: "#FFF"},
            }}
            InputProps={{
              style: {
                fontFamily: 'nunito', color: 'white'
              }
            }}
            id="outlined-basic"
            label="Digitar e-mail"
            variant="outlined"
            required
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          }
          
          {(error && password === '') ?
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
              name="password"
              style={{ background: '#21302C', color: '#fff', borderColor: '#fff !important'}}
              InputLabelProps={{
                style: {color: "#FFF"},
              }}
              InputProps={{
                style: {
                  fontFamily: 'nunito', color: 'white', borderColor: 'white'
                }
              }}
              required
              type="password"
              id="outlined-basic"
              label="Digitar Senha"
              variant="outlined"
              onChange={e => setPassword(e.target.value)}
          />
           }
         
          <InputMask  mask="(99) 99999-9999"  onChange={e => setPhone(e.target.value)}>
            {() => (
              <TextField
                name="phone"
                style={{ background: '#21302C', color: '#fff'}}
            InputLabelProps={{
              style: {color: "#FFF"},
            }}
            InputProps={{
              style: {
                fontFamily: 'nunito', color: 'white', borderColor: 'white'
              }
            }}
                id="outlined-basic"
                label="Digitar Telefone"
                variant="outlined"
              />
            )}
          </InputMask>
          <Button
            type="submit"
            c={"#03A47E"} 
            ch={"#048466"}
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
          <p>Já tem conta?</p>
          &bull;
          <Link to="/login" style={{
            color: "#fff"
          }}>Faça o login</Link>
        </WrapLink>
      </Box>
    </Flex>
  );
};

// const Form1 = ({ data, handleChange, setDisplay, display }) => {
//   return (
//     <>
//       {display ? (
//         <React.Fragment>
        
//         </React.Fragment>
//       ) : null}
//     </>
//   );
// };

// const Form2 = ({ handleChange, profession, display }) => {
//   return (
//     <>
//       {!display ? (
//         <React.Fragment>
//           <Text
//             fontFamily="'Nunito',sans-serif"
//             textAlign="center"
//             fontSize="15px"
//             fontWeight="600"
//             margin="10px 0px"
//           >
//             Informações Opcionais
//           </Text>
//           <TextField
//             id="outlined-basic"
//             label="Coloque a url da imagem"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             id="standard-select-currency"
//             select
//             name="profession"
//             label="Profissão"
//             value={profession}
//             helperText="selecione sua profissão"
//           >
//             {professions.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             onChange={handleChange}
//             name="find"
//             id="outlined-basic"
//             label="Onde conheceu o Ludus?"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             name="interest"
//             id="outlined-basic"
//             label="Qual o seu interesse dentro do Ludus?"
//             variant="outlined"
//           />
//           <Button type="submit" c={"#0072ff"} ch={"#004eff"}>
//             enviar
//           </Button>
//         </React.Fragment>
//       ) : null}
//     </>
//   );
// };

export default FormCadastro;
