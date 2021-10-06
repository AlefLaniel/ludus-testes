import React, { useState } from "react";

import { Container, ConfirmModal, Confirm, Cancel } from "./style.js";

import Modal from "react-modal";

const ConsultorsCard = ({ data, type }) => {
  const [modalIsOpen, setOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      background: "#00a1ff",
    },
  };

  const HandleConfirm = () => {
    setOpen(false);
  };

  const HandleCancel = () => {
    setOpen(false);
  };

  return (
    <Container>
      <img
        alt={data.name}
        src={
          data.picture
            ? data.picture
            : "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        }
      />
      <h1>{data.name}</h1>
      <button onClick={() => setOpen(true)}>Convidar como consultor</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setOpen(false)}
      >
        <ConfirmModal>
          <h1>
            Deseja adicionar <p>{data.name}</p> como {type}?
          </h1>
          <div style={{ display: "flex" }}>
            <Confirm onClick={HandleConfirm}>Sim</Confirm>
            <Cancel onClick={HandleCancel}>Não</Cancel>
          </div>
        </ConfirmModal>
      </Modal>
    </Container>
  );
};

export default ConsultorsCard;
