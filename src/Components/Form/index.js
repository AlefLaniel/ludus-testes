import React, { useState, useEffect } from "react";

import AnswersForm from "./AnswersForm";

import {
  Container,
  WrapAnchor,
  WrapQuestions,
  Button,
  WrapPopUp,
  PopUp,
  WrapAnswer,
} from "./style.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Questions = ["First", "Second", "Third", "Fourth"];

const Form = (props) => {
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
    setActive(true);
  };

  const HandleActive = (e) => {
    setActive(false);
  };

  const HandleDisplay = (e) => {
    return e.index === props.index ? "flex" : "none";
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container>
      <WrapQuestions index={0} display={HandleDisplay}>
        <span>
          First Questions <p>*</p>
        </span>
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <textarea
          required
          onChange={HandleOnChange}
          type="text"
          placeholder="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          defaultValue={data[props.index]}
        />
      </WrapQuestions>
      <WrapQuestions index={1} display={HandleDisplay}>
        <span>
          Second Question<p>*</p>
        </span>
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <textarea
          required
          onChange={HandleOnChange}
          type="text"
          placeholder="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          defaultValue={data[props.index]}
        />
      </WrapQuestions>
      <WrapQuestions index={2} display={HandleDisplay}>
        <span>
          Third Question<p>*</p>
        </span>
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <textarea
          required
          onChange={HandleOnChange}
          type="text"
          placeholder="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          defaultValue={data[props.index]}
        />
      </WrapQuestions>
      <WrapQuestions index={3} display={HandleDisplay}>
        <span>
          Fourth Question<p>*</p>
        </span>
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <textarea
          required
          onChange={HandleOnChange}
          type="text"
          placeholder="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          defaultValue={data[props.index]}
        />
      </WrapQuestions>
      <WrapAnchor>
        <Button
          name="back"
          disabled={props.index === 0 ? true : false}
          onClick={HandleQuestions}
        >
          Anterior
        </Button>
        <Button
          name="next"
          display={props.index === 3 ? "none" : "flex"}
          onClick={HandleQuestions}
        >
          Próximo
        </Button>
        <Button
          name="next"
          display={props.index !== 3 ? "none" : "flex"}
          onClick={HandleSubmit}
        >
          Enviar
        </Button>
      </WrapAnchor>
      <WrapPopUp active={active ? "flex" : "none"} />
      <PopUp active={active ? "flex" : "none"}>
        <FontAwesomeIcon
          onClick={HandleActive}
          icon={faWindowClose}
          style={{
            fontSize: "40px",
            color: "white",
            position: "absolute",
            right: "22px",
            cursor: "pointer",
          }}
        ></FontAwesomeIcon>
        <h2>Suas respostas foram</h2>
        <WrapAnswer>
          <AnswersForm data={data[0]} questions={Questions[0]} />
          <AnswersForm data={data[1]} questions={Questions[1]} />
          <AnswersForm data={data[2]} questions={Questions[2]} />
          <AnswersForm data={data[3]} questions={Questions[3]} />
        </WrapAnswer>
        <h1>OBRIGADO POR ESCOLHER A LUDUS. ENTRAREMOS EM CONTATO EM BREVE!</h1>
      </PopUp>
    </Container>
  );
};

export default Form;
