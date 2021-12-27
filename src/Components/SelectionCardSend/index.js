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
  Edit,
  WrapQuestions,
  ButtonModal,
  CountCaract
} from "./style.js";
import {
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import http from "../../Services/httpRequest";
import { getId, getToken, idProject } from "../../Services/auth";
import WrapModalImage from "../ModalImageProject/index.js";
import { Edit2 } from 'react-feather';

const ProjectCardStudent = ({ data }) => {

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

 function aprovaProject() {
  const body = '';
   
  if(getToken()){
    http
    .put(`/project/${data._id}/status/Analise`, body,config)
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
    http.put(`/project/${data._id}/status/Recusado`);
    console.log(data)
    
  }


  const [openModal, setOpen] = useState(false);
  var descriptionProject;
  if(!data.modelo_negocio){
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
        <Details onClick={() => setOpen(true)}>Editar </Details>
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
            Enviar
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

export default ProjectCardStudent;

const WrapModal = ({ data, customStyles, openModal, setOpen }) => {
    var problema;
    var solucao;
    var motivacao;
    const [problem, setProblem] = useState(data.modelo_negocio);
    const [solution, setSolution] = useState(data.description);
    const [motivation, setMotivation] = useState(data.resumo_profissional);

if(!problem){
  problema = 0;
}else{
  problema = problem.length;
}

if(!solution){
  solucao = 0;
}else{
  solucao = solution.length;
}

if(!motivation){
  motivacao = 0;
}else{
  motivacao = motivation.length;
}

      const alterarDados = (e) =>{
        e.preventDefault();
        const body = {
            description: solution,
            modelo_negocio: problem,
            resumo_profissional: motivation
          }
          const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };

          if(body.description !== '' || body.modelo_negocio !== '' || body.resumo_profissional !== ''){
            http
            .put(`/project/${data._id}`, body, config)
            .then((res) => {
              console.log(res);
              console.log('go');
              window.location.reload(); 
            })
            .catch((err) =>{
              console.log("Ocorreu algum erro");
              console.log(err.response);
            });
          }
          
        };
   
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
              <WrapQuestions index={1} 
            >
          <h3>O Problema</h3>
          <p>
            Então vamos lá! Agora conte-nos um pouco sobre que problema(s) sua ideia pretende
            solucionar.Destaque as oportunidades que existem no mercado para a introdução de
            sua ideia inovadora de produto, processo ou serviço.
          </p>
          <CountCaract>Total digitado: {problema} / 500</CountCaract>
          <textarea
            required
            maxLength="500"
            value={problem}
            onChange={e => setProblem(e.target.value)} 
            type="text"
            placeholder="responda aqui"
          />
        </WrapQuestions>
            </Description>
          </WrapDescription>
          <WrapDescription columnType={"column-reverse"}>
            <Description>
            <WrapQuestions
             >
          <h3>A solução</h3>
          <p>
            Ótimo. Estamos quase lá. Agora vamos a sua ideia. Descreva o
            produto/serviço/processo/modelo de negócio inovador que está sendo idealizado e
            que será objeto central deste projeto. Que diferenciais inovadores e tecnológicos seu
            projeto possui? E finalmente, fale sobre os mercados que poderão ser atingidos bem
            como os possíveis clientes e concorrentes.
          </p>
          <CountCaract>Total digitado: {solucao} / 500</CountCaract>
          <textarea
            required
            maxLength="500"
            value={solution}
            onChange={e => setSolution(e.target.value)}
            type="text"
            placeholder="responda aqui"
          />
        </WrapQuestions>
            </Description>
          </WrapDescription>
          <WrapDescription columnType={"column"}>
            <Description>
            <WrapQuestions index={3}>
          <h3>Motivação</h3>
          <p>
            Para terminar vamos falar um pouco sobre você. Quais foram os fatores que
            motivaram a fazer esse projeto? Conte-nos em que você é mais proficiente? Possui
            algum conhecimento prático na área da solução que está propondo?
          </p>
          <CountCaract>Total digitado: {motivacao}  / 500</CountCaract>
          <textarea
            required
            maxLength="500"
            value={motivation}
            onChange={e => setMotivation(e.target.value)}
            type="text"
            placeholder="responda aqui"
          />
        </WrapQuestions>
            </Description>
          </WrapDescription>
          <ButtonModal color={"#367469"} rover={'#367469'} onClick={alterarDados}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faCheckCircle}
              style={{
                color: `white`,
                marginRight: "2px",
                fontSize: "1.25em",
              }}
            />{" "}
            Salvar
          </ButtonModal>
        </InfoCapsule>
      </ModalInfo>
    </Modal>
  );
};
