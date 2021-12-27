import React,  { useEffect, useState } from "react";

import { 
  CardModel, 
  WrapHeader,
  ModalInfo,
  Header,
  InfoCapsule,
  NameRoom,
  ButtonsModal, 
  ButtonSave,
  ButtonRemove,
  Author, 
  Room, 
  Projects, 
  Edit, 
} from "./style.js";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Edit2 } from 'react-feather';

import { getToken, getTdRoom, idRoom, idProject, getId } from "../../Services/auth";
import http from "../../Services/httpRequest";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  CustomImageInput  from "../CustomImage";

import Modal from "react-modal";

const RoomCard = ({ data }) => {
  
  const [openModal, setOpen] = useState(false);
  const [users, setUsers] = useState([]);


  function id_room(){
    idRoom(data._id)
    idProject('')
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    content: {
      padding: "0",
      top: "50%",
      left: "50%",
      right: "auto",
      borderRadius: 20,
      bottom: "auto",
      marginRight: "-35%",
      transform: "translate(-50%, -50%)",
      color: "#000",
      background: "#fff",
      overflowX: "hidden"
      
    },
  };

  function alterarImage(){
    setOpen(true);
    id_room();

  }

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${data.owner}`);
      console.log(response.data)
      setUsers(response.data);
    })();
  }, [data.owner]);

  

  return (
    <CardModel>
      <WrapHeader>
        <h2>{data.name}</h2>
        <Author>Criado por: {users.name}</Author>
        <Room>
        <img src={data.avatar_url} alt="imagem da sala"/>
        {data.owner === getId() ?
                <Edit onClick={alterarImage}>
                  <Edit2 color="black" size={13}/>
                </Edit> : null
        }
        </Room>
        <Projects>
          <h3>Projetos</h3>
          <h1>{data.projects.length}</h1>
        </Projects>
        <Link to={`/sala/${data._id}`} onClick={id_room}>Entrar na sala</Link>
      </WrapHeader>
      <WrapModal
        data={data}
        customStyles={customStyles}
        openModal={openModal}
        setOpen={setOpen}
      />
    </CardModel>
    
  );
};


//Função Modal para alterar imagem
const WrapModal = ({ data, customStyles, openModal, setOpen }) => {
  const [nameRoom, setNameRoom] = useState('');
  const [url, setUrl] = useState(data.avatar_url);
  const [image, setImage] = useState(null);
// eslint-disable-next-line
  const [display, setDisplay] = useState(true);

  


  const saveImage = (e) => {
    e.preventDefault();
    const idroom = getTdRoom();

    //Alterar nome da sala 
    const bodyroom = {
      name: nameRoom
    }

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

    if (image) {
      setOpen(false)
      const body = new FormData();
      body.append("file", image);

      http
      .put(`/room/sendavatar/${idroom}`, body, config)
      .then((res) => {
        console.log(res);
        console.log('go');
        refreshPage();
      })
      .catch((err) =>{
        console.log("Ocorreu algum erro")
        console.log(err.response);
        //setError(err.response.data.message);
        setDisplay(true)
      });
      
    }

    if(bodyroom.name !== ''){
      http
      .put(`/room/${idroom}`, bodyroom, config)
      .then((res) => {
        console.log(res);
        console.log('go');
        refreshPage();
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
    const idroom = getTdRoom();

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

    if (image === null) {
      setOpen(false)
      const body = new FormData();
      body.append("file", image);

      http
      .put(`/room/removeavatar/${idroom}`, body, config)
      .then((res) => {
        console.log(res);
        console.log('go');
        refreshPage();
      })
      .catch((err) =>{
        console.log("Ocorreu algum erro")
        console.log(err.response);
        //setError(err.response.data.message);
        setDisplay(true)
      });
      
    }

  };

  function refreshPage(){ 
    window.location.reload(); 
}


  
  return (
    <Modal
      style={customStyles}
      isOpen={openModal}
      onRequestClose={() => setOpen(false)}
    >
      <ModalInfo>
        <Header>
        <h1>{data.name}</h1>
          <FontAwesomeIcon
            onClick={() => setOpen(false)}
            icon={faTimes}
            style={{
              color: "black",
              position: "absolute",
              right: "2vw",
              cursor: "pointer",
              fontSize: "25px",
            }}
          />
        </Header>
        <InfoCapsule>
            
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
            <NameRoom>
              <p id="name-room">Nome da Sala</p>
              <input
                value={nameRoom}
                onChange={e => setNameRoom(e.target.value)}
                placeholder="altera o nome aqui"
                type="text"
              />
            </NameRoom>
            <ButtonsModal>
              <ButtonRemove onClick={removeImage}>Remover</ButtonRemove>
              <ButtonSave onClick={saveImage}>Salvar</ButtonSave>
            </ButtonsModal>
        </InfoCapsule>    
      </ModalInfo>
    </Modal>
  );
}

export default RoomCard;

