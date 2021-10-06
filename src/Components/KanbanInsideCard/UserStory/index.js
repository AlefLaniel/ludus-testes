import React, { useContext } from "react";

import KanbanContext from "../../Kanban/context";

import { Container, WrapStorys, Label, Confirm } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@material-ui/core";

const UserStory = ({ show, setShow, index, listIndex }) => {
  const { storys, lists, setLists } = useContext(KanbanContext);

  const HandleNewStory = (storyIndex) => {
    const newList = lists;

    if (newList[listIndex].cards[index].story === storys[storyIndex]) {
      newList[listIndex].cards[index].story = null;
      setLists([...newList]);
      return;
    }

    newList[listIndex].cards[index].story = storys[storyIndex];
    setLists([...newList]);
  };

  return (
    <Modal
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      open={show}
      onClose={() => setShow(false)}
    >
      <Container>
        {storys.map((item, storyIndex) => {
          return (
            <WrapStorys
              onClick={() => HandleNewStory(storyIndex)}
              key={storyIndex}
            >
              <Label color={item.theme.color}>
                {item.theme.name}{" "}
                <Confirm
                  display={
                    lists[listIndex].cards[index].story === storys[storyIndex]
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Confirm>
              </Label>
            </WrapStorys>
          );
        })}
      </Container>
    </Modal>
  );
};

export default UserStory;
