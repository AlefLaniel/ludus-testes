import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Container, Text } from "./style.js";

const AddCard = (props) => {
  return (
    <Container href={props.link}>
      <FontAwesomeIcon icon={faPlus} />
      <Text>{props.description}</Text>
    </Container>
  );
};

export default AddCard;
