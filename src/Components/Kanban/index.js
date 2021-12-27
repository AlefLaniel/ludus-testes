import React, { useState } from "react";

import produce from "immer";
import KanbanContext from "./context";
import KanbanList from "../KanbanList";
import loadLists from "../../Services/apiKanban";
import loadStory from "../../Services/userStory";
import StoryList from "../../Components/KanbanList/StoryList";
import Calendar from "../../Components/BigCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserFriends,
  faClipboardList,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Button } from "./style";
import loadProjects from "../../Services/projectApi";

let data = loadLists();
let storyData = loadStory();
let projects = loadProjects();

const Kanban = () => {
  let [show, setShow] = useState(false);
  let [lists, setLists] = useState(data);
  let [storys, setStorys] = useState(storyData);
  let [project, setProject] = useState(projects);

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

  const move = (from, to, fromList, toList) => {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  };


// eslint-disable-next-line
  const ButtonComponent = () => {
    return (
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon icon={faCalendarCheck} />
        Calendário
      </Button>
    );
  };

  return (
    <KanbanContext.Provider
      value={{ storys, setStorys, lists, setLists, move, project, setProject }}
    >
      <Calendar lists={lists} toggleDrawer={toggleDrawer} show={show} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Container>
          <StoryList />
          {lists.map((list, index) => (
            <KanbanList key={list.title} data={list} index={index} />
          ))}
          <div
            style={{
              width: "20px",
              height: "1px",
              background: "transparent",
              color: "transparent",
            }}
          >
            a
          </div>
        </Container>
      </div>
    </KanbanContext.Provider>
  );
};

export default Kanban;
