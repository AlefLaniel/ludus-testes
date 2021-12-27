import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Button,
  Details,
  WrapInfo,
  ModalInfo,
  WrapDescription,
  Description,
  InfoCapsule,
  Header,
  ImageProject,
  InitialName,
  Edit
} from "./style.js";
import {
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import http from "../../Services/httpRequest";
import { getId, getToken,  idProject } from "../../Services/auth";
import WrapModalImage from "../ModalImageProject/index.js";
import { Edit2 } from 'react-feather';

const ProjectCard = ({ data }) => {

  //Codigo para edição da imagem
  const [openModalImg, setOpenImg] = useState(false);
  function id_project(){
    idProject(data._id)
  }

const customStylesImg = {
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
    setOpenImg(true);
    id_project();

  }

  /* fim do código de edição de imagem */

  const [users, setUsers] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
  };

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${getId()}`);
      setUsers(response.data);
    })();
  }, []);

  const body = '';

 function aprovaProject() {
   
      if(getToken()){
        http
        .put(`/project/${data._id}/status/Aprovado`, body,config)
        .then((res)=> {
          console.log(res);
          console.log('go')
          window.location.reload();
        }).catch((err) =>{
          console.log("Ocorreu algum erro")
          console.log(err.response);
        });
        
        console.log(getToken())
        console.log(data)
      }else{
        console.log('erroooooooorrrrr')
      }
  }
  function recusaProject() {
    http.put(`/project/${data._id}/status/Recusado`, body,config)
    .then((res)=> {
      console.log(res);
      console.log('go')
      window.location.reload();
    }).catch((err) =>{
      console.log("Ocorreu algum erro")
      console.log(err.response);
    });
    console.log(data)
  }


  const [openModal, setOpen] = useState(false);
  var descriptionProject;
  if(!data.description){
    descriptionProject = "Sem descrição"
  }else{
    descriptionProject = data.description;
  }

  const wordArray = descriptionProject.split(" ");
  const descrip = wordArray.splice(0, 100).join(" ");

  
  let names = `${data.name}`;
  var initialName = names.substring(0,2);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    content: {
      padding: "0",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "#000",
      background: "#fff",
    },
  };

  return (
    <Container style={{marginBottom: '10px'}}>
      {data.avatar_url === "" ? 
      <ImageProject> 
        <InitialName>
         {initialName}
        </InitialName>
        <Edit onClick={alterarImage}>
          <Edit2 color="black" size={15}/>
        </Edit>
      </ImageProject>
      : 
      <ImageProject> 
      <img alt={data.name} src={data.avatar_url} />
      <Edit onClick={alterarImage}>
        <Edit2 color="black" size={15}/>
      </Edit>
      </ImageProject>
      }
      
      <WrapInfo>
        <h1>{data.name}</h1>
        <h2 style={{textAlign: 'start', paddingTop: '7%'}}>Descrição</h2>
        <p>{descrip}</p>
        <Details onClick={() => setOpen(true)}>Ver mais detalhes</Details>
        <div>
          <Button color={"#367469"} onClick={aprovaProject} rover={'#367469'}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faCheckCircle}
              style={{
                color: `white`,
                marginRight: "2px",
                fontSize: "1.25em",
              }}
            />{" "}
            Aprovar
          </Button>
          <Button color={"#E14444"} onClick={recusaProject} rover={"#E14444"}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faTimesCircle}
              style={{
                color: `white`,
                marginRight: "2px",
                fontSize: "1.25em",
              }}
            />{" "}
            Recusar
          </Button>
        </div>
          <text style={{
            textAlign: "right",
            marginBottom: "10px", 
            marginTop: "10px", 
            marginRight: "10px",
            fontSize: "18px",
            }}>{users.name}</text>
        
      </WrapInfo>
      <WrapModal
        data={data}
        customStyles={customStyles}
        openModal={openModal}
         setOpen={setOpen}
      />
      <WrapModalImage
        data={data}
        customStylesImg={customStylesImg}
        openModalImg={openModalImg}
         setOpenImg={setOpenImg}
      />
    </Container>
  );
};

export default ProjectCard;

const WrapModal = ({ data, customStyles, openModal, setOpen }) => {
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
          <WrapDescription columnType={"column"}>
            <Description>
              <h2>Problema</h2>
              <p>{data.description}</p>
            </Description>
          </WrapDescription>
          <WrapDescription columnType={"column-reverse"}>
            <Description>
              <h2>Solução</h2>
              <p>{data.modelo_negocio}</p>
            </Description>
          </WrapDescription>
          <WrapDescription columnType={"column"}>
            <Description>
              <h2>Motivação</h2>
              <p>{data.resumo_profissional}</p>
            </Description>
          </WrapDescription>
        </InfoCapsule>
      </ModalInfo>
    </Modal>
  );
};
