import React, { useState, useContext } from "react";

import Checklists from "./Checklists";
import MiniCalendar from "./MiniCalendar";
import Members from "./Members";
import Tags from "./Tags";
import UserStory from "./UserStory";
import TextareaAutosize from "react-autosize-textarea";
import KanbanContext from "../Kanban/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBell,
  faComments,
  faInfo,
  faTimes,
  faListUl,
  faArrowRight,
  faCheckSquare,
  faPlus,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  ListItem,
  List,
  WrapContent,
  PageContent,
  Header,
  Body,
  WrapCards,
  Title,
  Status,
  WrapMembers,
  Label,
  WrapCloseIcon,
  Comment,
  WrapComments,
  WrapActivity,
  Activity,
  NewComment,
  WrapLabels,
  AddButton,
} from "./style.js";
import { SwipeableDrawer } from "@material-ui/core";

const Anchors = [
  { icon: faInfo, content: "Geral" },
  { icon: faCheckSquare, content: "Checklists" },
];

const KanbanInsideCard = ({ data, show, toggleDrawer, setShow }) => {
  const [page, setPage] = useState("Geral");

  const HandlePage = () => {
    if (page === "Geral") {
      return <General toggleDrawer={toggleDrawer} data={data} />;
    } else if (page === "Checklists") {
      return <Checklists toggleDrawer={toggleDrawer} />;
    } else {
      return null;
    }
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={show}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
    >
      <WrapContent>
        {HandlePage()}
        <List>
          {Anchors.map((item, index) => {
            return (
              <ListItem
                onClick={() => setPage(item.content)}
                name={(page === item.content).toString()}
                key={index}
              >
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.content}</p>
              </ListItem>
            );
          })}
        </List>
      </WrapContent>
    </SwipeableDrawer>
  );
};

export default KanbanInsideCard;

const General = ({ toggleDrawer, data }) => {
  const { lists, setLists } = useContext(KanbanContext);
  const [newComment, setNewComment] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [delivery, setDelivery] = useState("");
  const [hours, setHours] = useState("");
  const [showMembers, setShowMembers] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [dateTime, setDateTime] = useState(
    lists[data.listIndex].cards[data.index].dateTime
  );
  const [title, setTitle] = useState("");

  const HandleNewComment = (e) => {
    e.preventDefault();
    let newLists = lists;
    const comment = [
      {
        user: "Antonio H.",
        type: "notification",
        date: "25/08/2020",
        time: "14:00",
        content: newComment,
      },
      ...newLists[data.listIndex].cards[data.index].comments,
    ];
    const activity = [
      {
        user: "Antonio H.",
        date: "25/08/2020",
        time: "14:00",
        content: "um novo comentário foi feito",
      },
      ...newLists[data.listIndex].cards[data.index].activity,
    ];
    setNewComment("");

    newLists[data.listIndex].cards[data.index].comments = comment;
    newLists[data.listIndex].cards[data.index].activity = activity;

    setLists([...newLists]);
    setDisplay(false);
  };

  const HandleSaveTitle = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
    const newList = lists;
    newList[data.listIndex].cards[data.index].content = title;
    setLists([...newList]);
  };

  const HandleDateTime = (delivery) => {
    setDateTime(delivery);
    const newLists = lists;
    newLists[data.listIndex].cards[data.index].dateTime = delivery;
    setLists([...newLists]);
  };

  const HandleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const HandleChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <PageContent>
      <Header>
        <div style={{ width: "100%" }}>
          <TextareaAutosize
            onChange={HandleTitleChange}
            defaultValue={lists[data.listIndex].cards[data.index].content}
            className="title-input"
            spellCheck="false"
            onKeyDown={HandleSaveTitle}
          />
          <Status>
            <WrapLabels>
              <h1>Tags</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {data.labels && data.labels[0]
                  ? data.labels.map((item, index) => {
                      return item.status ? (
                        <Label key={index} color={item.color}>
                          {item.name}
                        </Label>
                      ) : null;
                    })
                  : null}
                <AddButton onClick={() => setShowTags(true)}>
                  <FontAwesomeIcon icon={faPlus} />
                </AddButton>
              </div>
            </WrapLabels>
            <Tags
              index={data.index}
              listIndex={data.listIndex}
              showTags={showTags}
              setShowTags={setShowTags}
              data={data}
            />
            <WrapLabels>
              <h1>Estórias de usuário</h1>
              <UserStory
                index={data.index}
                listIndex={data.listIndex}
                show={showUser}
                setShow={setShowUser}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                {data.story ? (
                  <Label color={data.story.theme.color}>
                    {data.story.theme.name}
                  </Label>
                ) : null}
                <AddButton onClick={() => setShowUser(true)}>
                  <FontAwesomeIcon icon={faPlus} />
                </AddButton>
              </div>
            </WrapLabels>
            <WrapLabels>
              <h1>Data de Entrega</h1>
              <MiniCalendar
                delivery={delivery}
                hours={hours}
                display={displayCalendar}
                setDisplay={setDisplayCalendar}
                setHours={setHours}
                setDelivery={setDelivery}
                setDateTime={HandleDateTime}
              />
              <div style={{ display: "flex" }}>
                <AddButton
                  style={{
                    padding: "8px 7px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={() => setDisplayCalendar(true)}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "14px", marginRight: "10px" }}
                    icon={faCalendarAlt}
                  />
                  <p style={{ fontSize: "14px", fontWeight: 400 }}>
                    {dateTime ? dateTime : "Definir"}
                  </p>
                </AddButton>
              </div>
            </WrapLabels>
          </Status>
          <h1>Membros</h1>
          <WrapMembers>
            {data.members
              ? data.members.map((item, index) => {
                  return (
                    <img alt="" key={index} title={item.name} src={item.img} />
                  );
                })
              : null}
            <AddButton onClick={() => setShowMembers(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </AddButton>
          </WrapMembers>
          <Members
            show={showMembers}
            members={data.members}
            setShow={setShowMembers}
            index={data.index}
            listIndex={data.listIndex}
          />
        </div>
        <WrapCloseIcon onClick={toggleDrawer(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </WrapCloseIcon>
      </Header>
      <Body>
        <WrapCards color={"#fff"}>
          <Title color={"#000"}>
            <p>
              <FontAwesomeIcon icon={faComments} />
              Comentários
            </p>
            <button onClick={() => setDisplay(true)}>Fazer comentário</button>
          </Title>
          <WrapComments>
            <NewComment
              onSubmit={HandleNewComment}
              display={display.toString()}
            >
              <TextareaAutosize
                value={newComment}
                onChange={HandleChange}
                placeholder="Faça seu comentário"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </NewComment>
            {lists[data.listIndex].cards[data.index].comments &&
            lists[data.listIndex].cards[data.index].comments[0]
              ? lists[data.listIndex].cards[data.index].comments.map(
                  (item, index) => {
                    return (
                      <Comment key={index}>
                        <div>
                          <img
                            alt={item.user}
                            src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
                          />
                          <h3>
                            {item.date}
                            &nbsp;&nbsp;&nbsp;&nbsp;às&nbsp;&nbsp;&nbsp;&nbsp;
                            {item.time}
                          </h3>
                        </div>
                        <h4>{item.user}</h4>
                        <p>{item.content}</p>
                      </Comment>
                    );
                  }
                )
              : null}
          </WrapComments>
        </WrapCards>
        <WrapCards color={"#19224d"}>
          <Title color={"#fff"}>
            <p>
              <FontAwesomeIcon icon={faListUl} />
              Atividade
            </p>
          </Title>
          <WrapActivity>
            {lists[data.listIndex].cards[data.index].activity &&
            lists[data.listIndex].cards[data.index].activity[0]
              ? lists[data.listIndex].cards[data.index].activity.map(
                  (item, index) => {
                    return (
                      <Activity key={index}>
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faBell} />{" "}
                          </span>
                          <h3>
                            {item.date}
                            &nbsp;&nbsp;&nbsp;&nbsp;às&nbsp;&nbsp;&nbsp;&nbsp;
                            {item.time}
                          </h3>
                        </div>
                        <h4>{item.user}</h4>
                        <p>{item.content}</p>
                      </Activity>
                    );
                  }
                )
              : null}
          </WrapActivity>
        </WrapCards>
      </Body>
    </PageContent>
  );
};
