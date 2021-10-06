import React, { useContext } from "react";

import contextApi from "../../Kanban/context";

import { Modal } from "@material-ui/core";

import { Container, Label, Title, WrapSVG } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Tags = ({ index, listIndex, showTags, setShowTags, data }) => {
  const { lists, setLists, project } = useContext(contextApi);

  const HandleNewTag = (labelIndex) => {
    let newLists = lists;

    let validate = lists[listIndex].cards[index].labels.some((itemCard) => {
      return project[0].labels[labelIndex] === itemCard;
    });

    if (validate) {
      let i = newLists[listIndex].cards[index].labels.map((item, indexCard) => {
        if (item._id === project[0].labels[labelIndex]._id) {
          return indexCard;
        }
        return "";
      });
      i = i.join("");
      newLists[listIndex].cards[index].labels.splice(i, 1);
      setLists([...newLists]);
      return;
    }

    newLists[listIndex].cards[index].labels = [
      ...newLists[listIndex].cards[index].labels,
      project[0].labels[labelIndex],
    ];
    setLists([...newLists]);
  };

  return (
    <Modal
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      open={showTags}
      onClose={() => setShowTags(false)}
    >
      <Container>
        <Title>Tags</Title>
        {project[0].labels.map((item, indexLabel) => {
          return (
            <Label
              color={item.color}
              key={indexLabel}
              onClick={() => HandleNewTag(indexLabel)}
            >
              {item.name}
              <WrapSVG
                display={
                  lists[listIndex].cards[index].labels
                    ? lists[listIndex].cards[index].labels.some(
                        (itemCard, indexCard) => {
                          return itemCard === project[0].labels[indexLabel];
                        }
                      )
                    : null
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </WrapSVG>
            </Label>
          );
        })}
      </Container>
    </Modal>
  );
};

export default Tags;
