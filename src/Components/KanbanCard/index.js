import React, { useRef, useContext } from "react";

import KanbanContext from "../Kanban/context";

import KanbanInsideCard from "../KanbanInsideCard";

import { useDrag, useDrop } from "react-dnd";
import { Container, Label, StoryLine, DateTime } from "./style";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faClock } from "@fortawesome/free-solid-svg-icons";

const KabanCard = ({ data, index, listIndex }) => {
  const ref = useRef();
  const { move, lists, setLists } = useContext(KanbanContext);
  const [show, setShow] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShow(open);
  };

  const HandleDeleteCard = () => {
    let newList = lists;
    newList[listIndex].cards.splice(index, 1);
    setLists([...newList]);
  };

  const [{ isDragging, isDragged }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      isDragged: monitor.didDrop(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = targetSize.height / 2;

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = draggedOffSet.y - targetSize.top;

      if (lists[listIndex].length === 0) return;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedIndex, targetIndex, draggedListIndex, targetListIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <>
      <Container
        onClick={toggleDrawer(true)}
        ref={ref}
        isDragging={isDragging}
        isDragged={isDragged}
      >
        <header>
          <div>
            {data.labels
              ? data.labels.map((label, index) => (
                  <Label key={index} color={label.color} />
                ))
              : null}
          </div>
          <FontAwesomeIcon icon={faTrash} onClick={() => HandleDeleteCard()} />
        </header>
        <p>{data.content}</p>
        <div style={{ display: "flex" }}>
          {data.members.map((item, index) => {
            return (
              <img
                alt=""
                style={{ marginRight: "5px" }}
                key={index}
                title={item.name}
                src={item.img}
              />
            );
          })}
        </div>
        {data.dateTime ? (
          <DateTime>
            <FontAwesomeIcon icon={faClock} />
            {data.dateTime}
          </DateTime>
        ) : null}
        {data.story ? (
          <StoryLine background={data.story.theme.color}></StoryLine>
        ) : null}
      </Container>
      <KanbanInsideCard
        show={show}
        toggleDrawer={toggleDrawer}
        setShow={setShow}
        data={{
          story: data.story,
          title: data.content,
          comments: data.comments,
          labels: data.labels,
          members: data.members,
          activity: data.activity,
          listIndex: listIndex,
          index: index,
        }}
      />
    </>
  );
};

export default KabanCard;
