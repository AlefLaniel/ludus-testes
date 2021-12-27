import React,  { useState } from "react";

import { getToken, getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";

import Modal from "react-modal";
import  CustomImageInput  from "../CustomImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
  } from "@fortawesome/free-solid-svg-icons";


  import { 
    ModalInfo,
    Header,
    InfoCapsule,
    NameRoom,
    ButtonsModal, 
    ButtonSave,
    ButtonRemove
  } from "./style.js";


const WrapModalImage = ({ data, customStylesImg, openModalImg, setOpenImg }) => {
    const [nameProject, setNameProject] = useState('');
    const [url, setUrl] = useState(data.avatar_url);
    const [image, setImage] = useState(null);
// eslint-disable-next-line
    const [display, setDisplay] = useState(true);
  
    
  
  
    const saveImage = (e) => {
      e.preventDefault();
      const idproject = getIdProject();
  
      //Alterar nome da sala 
      const bodyproject = {
        name: nameProject
      }
  
      const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
      };
  
      if (image) {
        setOpenImg(false)
        const body = new FormData();
        body.append("file", image);
  
        http
        .put(`/project/sendavatar/${idproject}`, body, config)
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
  
      if(bodyproject.name !== ''){
        http
        .put(`/project/${idproject}`, bodyproject, config)
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
      const idproject = getIdProject();
  
      const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
      };
  
      if (image === null) {
        setOpenImg(false)
        const body = new FormData();
        body.append("file", image);
  
        http
        .put(`/project/removeavatar/${idproject}`, body, config)
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
        style={customStylesImg}
        isOpen={openModalImg}
        onRequestClose={() => setOpenImg(false)}
      >
        <ModalInfo>
          <Header>
          <h1>{data.name}</h1>
            <FontAwesomeIcon
              onClick={() => setOpenImg(false)}
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
                <p id="name-room">Nome do Projeto</p>
                <input
                  value={nameProject}
                  onChange={e => setNameProject(e.target.value)}
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

  export default WrapModalImage;