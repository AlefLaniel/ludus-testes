import React, { useContext } from "react";

import dataApi from "../../Kanban/context";

import { Modal } from "@material-ui/core";
import { Container, WrapMember, WrapIcon, EasterEgg } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Members = ({ members, show, setShow, index, listIndex }) => {
  const { lists, setLists, project } = useContext(dataApi);

  const HandleDisplay = (indexMembers) => {
    let show = lists[listIndex].cards[index].members
      ? lists[listIndex].cards[index].members.some((itemCard, indexCard) => {
          return itemCard === project[0].members[indexMembers];
        })
      : null;
    return show ? "initial" : "none";
  };

  const HandleNewMember = (userIndex) => {
    let newList = lists;
    let validate = lists[listIndex].cards[index].members.some((member) => {
      return project[0].members[userIndex] === member;
    });

    if (validate) {
      let i = newList[listIndex].cards[index].members.map(
        (memberCard, memberIndex) => {
          if (memberCard._id === project[0].members[userIndex]._id) {
            return memberIndex;
          }
          return "";
        }
      );
      i = i.join("");
      newList[listIndex].cards[index].members.splice(i, 1);
      setLists([...newList]);
      return;
    }

    newList[listIndex].cards[index].members = [
      ...newList[listIndex].cards[index].members,
      project[0].members[userIndex],
    ];

    setLists([...newList]);
  };

  return (
    <Modal
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      open={show}
      onClose={() => setShow(false)}
    >
      <Container>
        <h1>Membros</h1>
        {project[0].members
          ? project[0].members.map((item, indexMembers) => {
              return (
                <WrapMember
                  onClick={() => HandleNewMember(indexMembers)}
                  key={indexMembers}
                >
                  <img alt={item.name} title={item.name} src={item.img} />
                  <EasterEgg>
                    {item.name}
                    <WrapIcon display={HandleDisplay(indexMembers)}>
                      <FontAwesomeIcon icon={faCheck} />
                    </WrapIcon>
                  </EasterEgg>
                </WrapMember>
              );
            })
          : null}
      </Container>
    </Modal>
  );
};

export default Members;
