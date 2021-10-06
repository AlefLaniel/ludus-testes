import React, { useContext, useState } from "react";

import KanbanContext from "../../Kanban/context";

import TextareaAutosize from "react-autosize-textarea";

import { Container, NewStory, Card, Button, NewCardButton } from "./style";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { CirclePicker } from "react-color";

const StoryList = () => {
  const { storys, setStorys } = useContext(KanbanContext);
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");

  const HandleSave = (e) => {
    e.preventDefault();

    if (!first || !second || !third) {
      alert("Preencha todos os dados para criar uma estória");
      return;
    }

    let newStorys = storys;
    newStorys.push({
      id: uuid(),
      content: `Eu como ${first} quero ${second} para ${third}`,
      theme: {
        name: fourth,
        color: fifth,
      },
    });
    e.target.reset();
    setShow(false);
    setFirst("");
    setSecond("");
    setThird("");
    setFourth("");
    setFifth("");
    setStorys([...newStorys]);
  };

  const HandleReset = (e) => {
    e.preventDefault();
    e.target.reset();
    setFirst("");
    setSecond("");
    setThird("");
    setFourth("");
    setFifth("");
  };

  const HandleDeleteCard = (index) => {
    let newList = storys;
    newList.splice(index, 1);
    setStorys([...newList]);
  };

  return (
    <Container>
      <header>Histórias de Usuário</header>
      <ul>
        {storys.map((item, index) => {
          return (
            <Card key={index} background={item.theme.color}>
              <header>
                <FontAwesomeIcon
                  onClick={() => HandleDeleteCard(index)}
                  icon={faTrash}
                />
              </header>
              {item.content}
            </Card>
          );
        })}
        <NewStory show={show} onReset={HandleReset} onSubmit={HandleSave}>
          <label>Eu como</label>
          <TextareaAutosize
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="ex: usuário"
          />
          <label>Quero</label>
          <TextareaAutosize
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            placeholder="ex: fazer algo"
          />
          <label>Para</label>
          <TextareaAutosize
            value={third}
            onChange={(e) => setThird(e.target.value)}
            placeholder="ex: ter melhores avaliações"
          />
          <label>Resumo</label>
          <TextareaAutosize
            value={fourth}
            onChange={(e) => setFourth(e.target.value)}
            placeholder="Uma ou mais palavras chave"
          />
          <label style={{ marginBottom: "5px" }}>Escolher uma cor</label>
          <CirclePicker onChangeComplete={(color) => setFifth(color.hex)} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button color={"#5ee462"} type="submit">
              Salvar
            </Button>
            <Button
              type="reset"
              onClick={() => setShow(false)}
              color={"#f53939"}
            >
              Cancelar
            </Button>
          </div>
        </NewStory>
      </ul>
      <NewCardButton onClick={() => setShow(true)}>
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPlus} />
        Criar história de usuário
      </NewCardButton>
    </Container>
  );
};

export default StoryList;
