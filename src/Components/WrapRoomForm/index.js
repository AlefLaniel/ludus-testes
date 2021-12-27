import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { BookOpen } from 'react-feather';
import { getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import TextField from "@material-ui/core/TextField";

import logoCaVerde from "../../Assets/Camaleão.png";

import {
  WrapForm,
  Container,
  WrapInput,
  WrapCheckBox,
  ImageRoom
} from "./style";

var data;
const WrapRoomForm = () => {
  let history = useHistory();
// eslint-disable-next-line
const [error, setError] = useState(); 
// eslint-disable-next-line
const [display, setDisplay] = useState(true); //no-unused-vars
const [nameRoom, setNameRoom] = useState('');
const [isPublicRoom, setIsPublicRoom] = useState();
// eslint-disable-next-line
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
        <BookOpen color="black" size={24} style={{marginRight: '10px'}}/>
          Nova Sala</h1>
        <WrapInput >
          <ImageRoom>
            <img src={logoCaVerde} alt="logo" />
          </ImageRoom>
        </WrapInput>
        <WrapInput>
        <p id="name-room">Nome da Sala*</p>
        <TextField 
          value={nameRoom}
          onChange={e => setNameRoom(e.target.value)}
          id="outlined-error-helper-text"
          variant="outlined"
          placeholder="O nome da Sala"
          required
          size="small"
          type="text"
          style={{ backgroundColor: '#C2D2CA', borderRadius: '10px' }}
          InputProps={{
            style: {
              fontFamily: 'Renogare, sans-serif', color: 'black', borderColor: 'white', background: '#C2D2CA'
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
