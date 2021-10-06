import React from "react";

import { CardModel, WrapHeader, Author, People, Projects } from "./style.js";
import { Link } from "react-router-dom";

const RoomCard = ({ data }) => {
  return (
    <CardModel>
      <WrapHeader>
        <h2>{data.name}</h2>
        <Author>Criado por: {data.owner}</Author>
        <Projects>
          <h1>{data.projects.length}</h1>
          <h3>Projetos</h3>
        </Projects>
        <People>
          {data.people.map((item, index) => {
            return (
              <img
                // key={index}
                // title={item.name}
                // alt={item.name}
                // src={
                //   item.picture
                //     ? item.picture
                //     : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                // }
              />
            );
          })}
        </People>
        <Link to={`/sala/${data._id}`}>Entrar na sala</Link>
      </WrapHeader>
    </CardModel>
  );
};

export default RoomCard;
