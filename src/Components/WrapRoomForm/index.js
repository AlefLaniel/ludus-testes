import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { BookOpen } from 'react-feather';
import { getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import TextField from "@material-ui/core/TextField";

import {
  WrapForm,
  Container,
  WrapInput,
  FileInput,
  WrapCheckBox,
} from "./style";

var data;
const WrapRoomForm = () => {
  let history = useHistory();
const [error, setError] = useState();
const [display, setDisplay] = useState(true);
const [nameRoom, setNameRoom] = useState('');
const [isPublicRoom, setIsPublicRoom] = useState();
const [image_url, setImage_url] = useState('');
//Colocar a função Submit aqui↓
const handleAddRoomSubmit = (e) =>{
e.preventDefault();
//formatar json para requisição


if(image_url === ''){
  data = {
    name: nameRoom,
    isPublic: isPublicRoom,
    }
} else {
  
data = {
  name: nameRoom,
  isPublic: isPublicRoom,
  image_url: image_url
  }
}

const config = {
  headers: { Authorization: `Bearer ${getToken()}` }
};

//http.defaults.headers.authorization = `Bearer ${getToken}`;

if(data.name !== '' && data.isPublic !== ''){
  http
  .post("/room", data, config)
  .then((res) => {
    console.log(res);
    console.log('go')
    history.push("/salas");
  })
  .catch((err) =>{
    console.log("Ocorreu algum erro")
    console.log(err.response);
    //setError(err.response.data.message);
    setDisplay(true)
  });
  }else{
    setError("Preencha os dados obrigatórios!");
    setDisplay(true);
  }
};



  return (
    <Container>
      <WrapForm onSubmit={handleAddRoomSubmit}>
      
        <h1>
        <BookOpen color="white" size={24}/>
          Nova Sala</h1>
        <WrapInput>
        <p>Nome da Sala*</p>
        <TextField 
          value={nameRoom}
          onChange={e => setNameRoom(e.target.value)}
          id="outlined-error-helper-text"
          variant="outlined"
          placeholder="O nome da Sala"
          required
          size="small"
          type="text"
          style={{ backgroundColor: '#21302C' }}
          InputProps={{
            style: {
              fontFamily: 'nunito', color: 'white', borderColor: 'white'
            }}}
            label="Digite aqui"
        />
        </WrapInput>
        <WrapInput >
          <p id="tagroom">Imagem da Sala</p>
          <TextField 
          value={image_url}
          onChange={e => setImage_url(e.target.value)}
          id="outlined-error-helper-text"
          variant="outlined"
          placeholder="URL da Imagem"
          size="small"
          type="text"
          style={{ backgroundColor: '#21302C' }}
          InputProps={{
            style: {
              fontFamily: 'nunito', color: 'white', borderColor: 'white'
            }}}
            label="Digite aqui"
        />
        </WrapInput>
        <p>Tipo da sala*</p>
        <WrapCheckBox>
          <label>Pública</label>
          <input
            type="radio"
            id="Publica"
            name="RoomType"
            value={true}
            required
            onChange={e=>setIsPublicRoom(e.target.value)}
          />
        </WrapCheckBox>
        <WrapCheckBox>
          <label>Privada</label>
          <input
            type="radio"
            id="Privada"
            name="RoomType"
            value={false}
            required
            onChange={e=>setIsPublicRoom(e.target.value)}
          />
        
        </WrapCheckBox>
        <button type="submit">Criar Sala</button>
      </WrapForm>
    </Container>
  );
};

export default WrapRoomForm;
