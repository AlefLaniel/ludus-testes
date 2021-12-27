import React, {useEffect, useState} from 'react';
import {Buttons, ButtonSave, Container, Edit, Input, Text, Password, ButtonRemove} from './style';
import CustomImageInput from '../CustomImage';
import { getId, getToken } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { BiUser } from "react-icons/bi";
import { useHistory } from 'react-router';

const ProfileEdit = () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState(users.name);
    const [phone, setPhone] = useState(users.phone);
    // eslint-disable-next-line
    const [display, setDisplay] = useState(true);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(users.avatar_url);
  
    let history = useHistory();

    function linkHistory(){
      history.push(`/editpass`)
  }

    
    useEffect(() => {
      (async () => {
        const response = await http.get(`/user/${getId()}`);
        console.log(response.data)
        setUsers(response.data);
        if(response.data.avatar_url){
          setUrl(response.data.avatar_url)
        }
      })();
    }, []);


 
    const alterarDados = (e) =>{
        e.preventDefault();
        const body = {
            name: name,
            phone: phone,
          }
          const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };

          if(body.name !== '' || body.phone !== ''){
            http
            .put(`/user`, body, config)
            .then((res) => {
              console.log(res);
              console.log('go');
              window.location.reload(); 
            })
            .catch((err) =>{
              console.log("Ocorreu algum erro");
              console.log(err.response);
              //setError(err.response.data.message);
              setDisplay(true)
            });
          }
          if (image) {
            //setOpenImg(false)
            const body = new FormData();
            body.append("file", image);
      
            http
            .put(`/user/sendavatar`, body, config)
            .then((res) => {
              console.log(res);
              console.log('go');
              window.location.reload(); 
            })
            .catch((err) =>{
              console.log("Ocorreu algum erro")
              console.log(err.response);
              //setError(err.response.data.message);
              setDisplay(true)
            });
          }
        };
        
        const removeImage = (e) =>{
          e.preventDefault();
      
          const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };
      
          if (image === null) {
            const body = new FormData();
            body.append("file", image);
      
            http
            .put(`/user/removeavatar`, body, config)
            .then((res) => {
              console.log(res);
              console.log('go');
              window.location.reload(); 
            })
            .catch((err) =>{
              console.log("Ocorreu algum erro")
              console.log(err.response);
              //setError(err.response.data.message);
              setDisplay(true)
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
            <CustomImageInput 
            id="file"
            name="file"
            url={url}
            onChange={([file]) => {
            setUrl(URL.createObjectURL(file));
            setImage(file);
            }}
            />
              <span>O tamanho máximo é de 2MB <br/> Recomendamos imagens com dimensão quadrada</span>
              <Buttons>
              <ButtonRemove onClick={removeImage}>Remover imagem</ButtonRemove>
              </Buttons>
            <Input>
                <p id="name-user">Nome</p>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={users.name}
                  type="text"
                />
              </Input>
              <Input>
                <p id="name-user">Telefone</p>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder={users.phone}
                  type="text"
                />
              </Input>
              <Password onClick={linkHistory}>
                Mudar senha
                </Password>
              <Buttons>
                <ButtonSave onClick={alterarDados} >Salvar</ButtonSave>
              </Buttons>
            </Edit>  
        </Container>
    )
}
export default ProfileEdit;