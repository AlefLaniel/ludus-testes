import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { getToken, getTdRoom } from "../../Services/auth";
import http from "../../Services/httpRequest";


import Stepper from "../Stepper";

import {
  Container,
  WrapAnchor,
  WrapQuestions,
  Button,
  ButtonBefore,
  WrapContainer,
  CountCaract
} from "./style.js";

var body;
var MaximoDeCaracteres
const Form = (props) => {
  let history = useHistory();
  const [display, setDisplay] = useState(true);
  let [data, setData] = useState(["", "", "", ""]);
  const [contador, setContador] = useState(MaximoDeCaracteres);



  const HandleOnChange = (e) => {
    let newData = data;

    newData[props.index] = e.target.value;
    countCaracteres(e);
    return setData(newData);
  };

  const countCaracteres = (e) => {
    MaximoDeCaracteres = e.target.maxLength;
    setContador(MaximoDeCaracteres);
    let qtsCaracteresTemNoMomento = e.target.value.length;
    let contadorState = (MaximoDeCaracteres - qtsCaracteresTemNoMomento);
    
    return setContador(contadorState);
  }


  const HandleQuestions = (e) => {
    
      if (e.target.name === "next") {
        return props.setIndex(props.index + 1);
      } else {
        return props.setIndex(props.index - 1);
      }
    

  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const idroom = getTdRoom();

    if(data[0] !== '' && data[1] !== '' && data[2] !== '' && data[3] !== ''){
      body = {
        "name": data[0],
        "room": idroom,
        "description": data[1],
        "modelo_negocio": data[2],
        "resumo_profissional": data[3]
      }
    }
    if(data[0] !== '' && data[1] !== '' && data[2] !== ''){
      body = {
        "name": data[0],
        "room": idroom,
        "description": data[1],
        "modelo_negocio": data[2]
      }
    }
    if(data[0] !== '' && data[1] !== ''){
      body = {
        "name": data[0],
        "room": idroom,
        "description": data[1]
      }
    }
    if(data[0] !== ''){
      body = {
        "name": data[0],
        "room": idroom
      }
    }else{
      body = {
        "room": idroom
      }
    }
    

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

      http
      .post("/project", body, config)
      .then((res) => {
        console.log(res);
        console.log('go')
        history.push("/sala");
      })
      .catch((err) =>{
        console.log("Ocorreu algum erro")
        console.log(err.response);
        setDisplay(true)
      });

    console.log(data);
    console.log(body);
    
  };

  const HandleDisplay = (e) => {
    return e.index === props.index ? "flex" : "none";
  };

  return (
    <Container>
      <Stepper index={props.index} />
      <WrapContainer>
        <WrapQuestions index={0} display={HandleDisplay}>
          <h3>Nome do Projeto *</h3>
          <p>
            Primeiro de tudo gostariamos de saber qual ser?? o nome do Projeto/Ideia
          </p>
          <CountCaract>Total digitado: {data[0].length} / 500</CountCaract>
          <textarea
            name="textoarea"
            required
            maxLength="500"
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            value={data[0]}
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={1} display={HandleDisplay}>
          <h3>O Problema</h3>
          <p>
            Ent??o vamos l??! Agora conte-nos um pouco sobre que problema(s) sua ideia pretende
            solucionar.Destaque as oportunidades que existem no mercado para a introdu????o de
            sua ideia inovadora de produto, processo ou servi??o.
          </p>
          <CountCaract>Total digitado: {data[1].length} / 500</CountCaract>
          <textarea
            required
            maxLength="500"
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={2} display={HandleDisplay}>
          <h3>A solu????o</h3>
          <p>
            ??timo. Estamos quase l??. Agora vamos a sua ideia. Descreva o
            produto/servi??o/processo/modelo de neg??cio inovador que est?? sendo idealizado e
            que ser?? objeto central deste projeto. Que diferenciais inovadores e tecnol??gicos seu
            projeto possui? E finalmente, fale sobre os mercados que poder??o ser atingidos bem
            como os poss??veis clientes e concorrentes.
          </p>
          <CountCaract>Total digitado: {data[2].length} / 500</CountCaract>
          <textarea
            required
            maxLength="500"
            onChange={HandleOnChange}
            type="text"
            placeholder="responda aqui"
            defaultValue={data[props.index]}
          />
        </WrapQuestions>
        <WrapQuestions index={3} display={HandleDisplay}>
          <h3>Motiva????o</h3>
          <p>
            Para terminar vamos falar um pouco sobre voc??. Quais foram os fatores que
            motivaram a fazer esse projeto? Conte-nos em que voc?? ?? mais proficiente? Possui
            algum conhecimento pr??tico na ??rea da solu????o que est?? propondo?
          </p>
          <CountCaract>Total digitado: {data[3].length}  / 500</CountCaract>
          <textarea
            required
            maxLength="500"
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
            Pr??ximo
          </Button>
          <Button
            name="next"
            type="submit"
            display={props.index !== 3 ? "none" : "flex"}
            onClick={HandleSubmit}
          >
            Salvar e Sair
          </Button>
        </WrapAnchor>
      </WrapContainer>
    </Container>
  );
};

export default Form;
