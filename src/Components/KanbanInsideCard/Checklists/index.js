import React, { useState } from "react";

import { WrapCloseIcon } from "../style";
import {
  Header,
  Button,
  WrapChecklist,
  WrapItems,
  PageContent,
  ItemContainer,
  Body,
  Title,
  Paragraph,
  WrapListHeader,
  WrapInputItem,
  NewItemButton,
} from "./style";

import {
  faTimes,
  faTrash,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Checkbox from "@material-ui/core/Checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const checklistApi = [
  {
    name: "list1",
    show: false,
    items: [
      {
        task: "fazer a página de checklist",
        status: false,
      },
      {
        task: "fazer o calendário",
        status: false,
      },
      {
        task: "deixar o menu lateral mais bonito",
        status: false,
      },
      {
        task: "fazer a responsividade da página",
        status: false,
      },
    ],
  },
  {
    name: "list2",
    show: false,
    items: [
      {
        task: "fazer a página de checklist",
        status: false,
      },
      {
        task: "fazer o calendário",
        status: false,
      },
      {
        task: "deixar o menu lateral mais bonito",
        status: false,
      },
      {
        task: "fazer a responsividade da página",
        status: false,
      },
    ],
  },
];

const Checklist = ({ toggleDrawer }) => {
  let [checklists, setChecklists] = useState(checklistApi);
  let [newItem, setNewItem] = useState("");

  const HandleNewList = () => {
    const newChecklist = checklists;
    newChecklist.push({
      name: `list ${checklists.length + 1}`,
      show: false,
      items: [],
    });
    setChecklists([...newChecklist]);
  };

  const HandleDeleteItem = (index, listindex) => {
    let newchecklists = checklists;
    newchecklists[listindex].items.splice(index, 1);
    setChecklists([...newchecklists]);
  };

  const HandleDeleteList = (index) => {
    let newchecklists = checklists;
    newchecklists.splice(index, 1);
    setChecklists([...newchecklists]);
  };

  const HandleCheckbox = (index, listindex) => {
    let newChecklist = checklists;
    newChecklist[listindex].items[index].status = !newChecklist[listindex]
      .items[index].status;
    setChecklists([...newChecklist]);
  };

  const HandleDisplayItem = (index) => {
    let newShow = checklists;
    newShow[index].show = true;
    setChecklists([...newShow]);
  };

  const HandleNewItem = (e, index) => {
    e.preventDefault();

    if (newItem === "") {
      alert("O campo está vazio, por favor preencha-o");
      return null;
    }

    let newChecklist = checklists;
    newChecklist[index].show = false;
    newChecklist[index].items.push({
      task: newItem,
      status: false,
    });
    setNewItem("");
    setChecklists([...newChecklist]);
    e.target.reset();
  };

  const HandleChangeItem = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <PageContent>
      <Header>
        <div style={{ width: "100%" }}>
          <h1>Checklists</h1>
          <Button onClick={HandleNewList}>novo checklist</Button>
        </div>
        <WrapCloseIcon
          style={{ padding: "2.5px 9px" }}
          onClick={toggleDrawer(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </WrapCloseIcon>
      </Header>
      <Body>
        {checklists.map((list, listindex) => {
          return (
            <WrapChecklist key={listindex}>
              <WrapListHeader>
                <Title>{list.name}</Title>
                <FontAwesomeIcon
                  onClick={() => HandleDeleteList(listindex)}
                  icon={faTrash}
                  style={{ cursor: "pointer", color: "#58595B" }}
                />
              </WrapListHeader>
              <WrapItems>
                {list.items.map((item, index) => {
                  return (
                    <ItemContainer key={index}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Checkbox
                          onChange={() => HandleCheckbox(index, listindex)}
                          color="#58595B"
                          style={{ padding: "0px" }}
                          checked={item.status}
                        />
                        <Paragraph decoration={item.status.toString()}>
                          {item.task}
                        </Paragraph>
                      </div>
                      <FontAwesomeIcon
                        onClick={() => HandleDeleteItem(index, listindex)}
                        style={{ cursor: "pointer", color: "#58595B" }}
                        icon={faTimes}
                      />
                    </ItemContainer>
                  );
                })}
                <WrapInputItem
                  onSubmit={(e) => HandleNewItem(e, listindex)}
                  display={list.show.toString()}
                >
                  <input
                    className="new-item-input"
                    onChange={HandleChangeItem}
                    placeholder="Adicione um novo item"
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </WrapInputItem>
                <NewItemButton
                  display={(!list.show).toString()}
                  onClick={() => HandleDisplayItem(listindex)}
                >
                  Adicionar novo item
                </NewItemButton>
              </WrapItems>
            </WrapChecklist>
          );
        })}
      </Body>
    </PageContent>
  );
};

export default Checklist;
