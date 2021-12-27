import React, { useContext } from "react";

import { Context } from "../../Context/contextApi.js";

import {
  CardModel,
  WrapHeader,
  HeaderImage,
  Image,
  Description,
  Author,
} from "./style.js";

import { Details } from "../SelectionCard/style";

import { Link } from "react-router-dom";

const Card = (props) => {
  const { setProjectID } = useContext(Context);

  return (
    <CardModel onClick={() => setProjectID(props._id)}>
      <HeaderImage src={props.headerImage} />
      <WrapHeader>
        <Image alt="" src={props.img} />
        <h2>{props.projectName}</h2>
        <Description>{props.projectDescription}</Description>
        <Link to={`/projeto/${props._id}`}>
          <Details style={{ marginTop: "20px" }}>Ver detalhes</Details>
        </Link>
        <Author>Autor x</Author>
      </WrapHeader>
    </CardModel>
  );
};

export default Card;
