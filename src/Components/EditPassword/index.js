import React, {useState} from 'react';

import {Container, Edit, Text, Input, ButtonSave, Buttons} from './style';
import { BiUser } from "react-icons/bi";
import { getToken } from '../../Services/auth';
import http from '../../Services/httpRequest';

const EditPassword = () =>{
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const alterarSenha = (e) =>{
        e.preventDefault();
        const body = {
            password: password,
            newpassword: newPassword,
          }
          const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };

          if(body.password !== '' && body.newpassword !== ''){
            http
            .put(`/user/changepass`, body, config)
            .then((res) => {
              console.log(res);
              console.log('go');
              window.location.reload(); 
            })
            .catch((err) =>{
              console.log("Ocorreu algum erro");
              console.log(err.response);
              //setError(err.response.data.message);
              
            });
          }
          
        };

    return(
       <Container>
           <Edit>
           <Text>
               <BiUser size={30}/>
                   Conta
               </Text>
               <Input>
                <p id="name-user">Senha Atual</p>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Digite sua senha atual'
                  type="password"
                />
              </Input>
              <Input>
                <p id="name-user">Nova Senha</p>
                <input
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder='Digite sua nova senha'
                  type="password"
                />
              </Input>
              <Buttons>
                <ButtonSave onClick={alterarSenha}>Salvar</ButtonSave>
              </Buttons>
           </Edit>
       </Container>
    )
}

export default EditPassword;