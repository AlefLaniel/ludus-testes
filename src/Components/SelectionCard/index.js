import React, { useState } from "react";

import ideia from "../../Assets/ideia.png";
import economy from "../../Assets/economy.png";
import professional from "../../Assets/professional.png";
import conclusion from "../../Assets/conclusion.png";

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
  Image,
  Header,
} from "./style.js";
import {
  faArchive,
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";

const ProjectCard = ({ data }) => {
  const [openModal, setOpen] = useState(false);

  const wordArray = data.projectDescription.split(" ");
  const description = wordArray.splice(0, 30).join(" ");

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
    <Container>
      <img alt={data.projectName} src={data.headerImage} />
      <WrapInfo>
        <h1>{data.projectName}</h1>
        <p>{description}</p>
        <Details onClick={() => setOpen(true)}>Ver mais detalhes</Details>
        <div>
          <Button color={"#00ff95"}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faCheckCircle}
              style={{
                color: `white`,
                marginRight: "10px",
                fontSize: "1.25em",
              }}
            />{" "}
            Aprovar
          </Button>
          <Button color={"#ffa31a"}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faArchive}
              style={{
                color: `white`,
                marginRight: "10px",
                fontSize: "1.25em",
              }}
            />{" "}
            Arquivar
          </Button>
          <Button color={"#f74242"}>
            <FontAwesomeIcon
              className="awesome-icon"
              icon={faTimesCircle}
              style={{
                color: `white`,
                marginRight: "10px",
                fontSize: "1.25em",
              }}
            />{" "}
            Recusar
          </Button>
        </div>
      </WrapInfo>
      <WrapModal
        data={data}
        customStyles={customStyles}
        openModal={openModal}
        setOpen={setOpen}
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
          <h1>{data.projectName}</h1>
          <FontAwesomeIcon
            onClick={() => setOpen(false)}
            icon={faTimes}
            style={{
              color: "white",
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
              <h2>Descrição</h2>
              <p>{data.projectDescription}</p>
            </Description>
            <Image alt="" src={ideia} />
          </WrapDescription>
          <WrapDescription columnType={"column-reverse"}>
            <Image alt="" src={economy} />
            <Description>
              <h2>Modelo de Negócio</h2>
              <p>{data.projectDescription}</p>
            </Description>
          </WrapDescription>
          <WrapDescription columnType={"column"}>
            <Description>
              <h2>Resumo Profissional</h2>
              <p>{data.projectDescription}</p>
            </Description>
            <Image alt="" src={professional} />
          </WrapDescription>
          <WrapDescription columnType={"column-reverse"}>
            <Image alt="" src={conclusion} />
            <Description>
              <h2>Diferencial</h2>
              <p>{data.projectDescription}</p>
            </Description>
          </WrapDescription>
        </InfoCapsule>
      </ModalInfo>
    </Modal>
  );
};
