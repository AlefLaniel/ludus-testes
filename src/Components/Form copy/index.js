import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

//import AnswersForm from "./AnswersForm";
import Stepper from "../Stepper";
//import Modal from "react-modal";

//import ideia from "../../Assets/ideia.png";
//import economy from "../../Assets/economy.png";
//import professional from "../../Assets/professional.png";
//import conclusion from "../../Assets/conclusion.png";

import {
  Container,
  WrapAnchor,
  WrapQuestions,
  Button,
  ButtonBefore,
  PopUp,
  WrapAnswer,
  WrapContainer,
  Header,
  ModalButton,
  WrapButtons,
} from "./style.js";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";

/*
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
    padding: "0",
    background: "#fff",
  },
};

const Questions = [
  "Descrição",
  "Modelo de Negócio",
  "Resumo Profissional",
  "Diferencial",
];
*/
const Form = (props) => {
  let history = useHistory();
  let [active, setActive] = useState(false);
  let [data, setData] = useState(["", "", "", ""]);



  const HandleOnChange = (e) => {
    let newData = data;
    newData[props.index] = e.target.value;
    
    return setData(newData);
  };

  const HandleQuestions = (e) => {
    if (e.target.name === "next") {
      return props.setIndex(props.index + 1);
    } else {
      return props.setIndex(props.index - 1);
    }
  };

  const HandleSubmit = (e) => {
    history.push('/sala');
  
  };

  const HandleActive = (e) => {
    setActive(false);
  };

  const HandleDisplay = (e) => {
    return e.index === props.index ? "flex" : "none";
  };

  /*
  useEffect(() => {
    localStorage.clear();
  }, []);
*/

  return (
    <Container>
      <Stepper index={props.index} />
      <WrapContainer>
        <WrapQuestions index={0} display={HandleDisplay}>
          <span>
            1 - Descrição <p>*</p>
          </span>
          <p>
            Descreva, de forma objetiva, que problema(s) sua ideia pretende
            solucionar. Destaque as oportunidades que existem no mercado para a
            introdução de sua ideia inovadora de produto, serviço ou processo.
          </p>
          <textarea
            required
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={1} display={HandleDisplay}>
          <span>
            2 - Modelo de Negócio<p>*</p>
          </span>
          <p>
            Descreva o produto/serviço/processo/modelo de negócio inovador que
            está sendo idealizado e que será objeto central de negócio de seu
            empreendimento. Cite mercados que poderão ser atingidos e apresente
            potenciais clientes e concorrentes.
          </p>
          <textarea
            required
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={2} display={HandleDisplay}>
          <span>
            3 - Resumo Profissional<p>*</p>
          </span>
          <p>
            Conte-nos em qual área você atua profissionalmente e se possui
            conhecimento prático sobre a área da solução que está propondo,
            conhecer sobre a área de atuação da futura.
          </p>
          <textarea
            required
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={3} display={HandleDisplay}>
          <span>
            4 - Diferencial<p>*</p>
          </span>
          <p>
            O que a solução que você está propondo possui de diferente em
            relação às soluções existentes no mercado?
          </p>
          <textarea
            required
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapAnchor>
          <ButtonBefore
            name="back"
            disabled={props.index === 0 ? true : false}
            onClick={HandleQuestions}
          >
            Anterior
          </ButtonBefore>
          <Button
            name="next"
            display={props.index === 3 ? "none" : "flex"}
            onClick={HandleQuestions}
          >
            Próximo
          </Button>
          <Button
            name="next"
            type="submit"
            display={props.index !== 3 ? "none" : "flex"}
            onClick={HandleSubmit}
          >
            Enviar
          </Button>
        </WrapAnchor>
      </WrapContainer>
    </Container>
  );
};

export default Form;
