import React, { useContext, useState } from "react";

import uuid from "react-uuid";

import KanbanCard from "../KanbanCard";
import KanbanContext from "../Kanban/context";
import TextareaAutosize from "react-autosize-textarea";

import { useDrop } from "react-dnd";
import { Container, AddCard, WrapCard, WrapButtons, Button } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const KanbanList = ({ data, index: listIndex }) => {
  const { move, setLists, lists } = useContext(KanbanContext);
  const [show, setShow] = useState(false);
  const [card, setCard] = useState("");

  const HandleChange = (e) => {
    setCard(e.target.value);
  };

  const CreateNewCard = (e) => {
    e.preventDefault();
    if (card === "") {
      alert("Preencha o campo para criar um Card");
      return;
    }

    let newlist = lists;
    newlist[listIndex].cards.push({
      id: uuid(),
      content: card,
      labels: [],
      members: [],
      user: [],
      comments: [],
      activity: [],
      dateTime: "",
    });
    setShow(false);
    setLists([...newlist]);
    setCard("");
    e.target.reset();
  };

  const HandleReset = (e) => {
    e.preventDefault();
    e.target.reset();
    setCard("");
  };

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const draggedIndex = item.index;

      if (data.cards.length === 0) {
        move(draggedIndex, 0, draggedListIndex, listIndex);
        item.index = 0;
        item.listIndex = listIndex;
      }
    },
  });

  return (
    <Container done={data.done} ref={dropRef}>
      <header>
        <h2>{data.title}</h2>
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <KanbanCard
            key={card.id}
            index={index}
            data={card}
            listIndex={listIndex}
          />
        ))}
        <WrapCard onReset={HandleReset} onSubmit={CreateNewCard} show={show}>
          <TextareaAutosize
            value={card}
            onChange={HandleChange}
            placeholder="Título do Card"
          />
          <WrapButtons>
            <Button color={"#03A47E"} type="submit">
              Salvar
            </Button>
            <Button
              color={"#E14444"}
              onClick={() => setShow(false)}
              type="reset"
            >
              Cancelar
            </Button>
          </WrapButtons>
        </WrapCard>
      </ul>
      <AddCard onClick={() => setShow(true)} done={data.done}>
        <FontAwesomeIcon icon={faPlus} />
        Adicionar cartão
      </AddCard>
    </Container>
  );
};

export default KanbanList;
