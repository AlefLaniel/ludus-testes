import React, { useContext, useEffect, useState } from "react";

import UserContext, { Context } from "../../Context/contextApi";
import { getId, getToken, idUser, isAuthenticated, logout } from "../../Services/auth";
import http from "../../Services/httpRequest";

import TopInsideBar from "../TopInsideBar";
import AddCard from "../AddCard";
import RoomCard from "../RoomCard";

import { Container, WrapList } from "./style.js";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import loadRooms from "../../Services/roomsApi";

const data = loadRooms();

const Anchors = [
  {
    text: "Criar uma sala",
    link: "/formulariosala",
    icon: faPlus,
    color: "white",
  },
];

const RoomsList = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/room/userRooms/${getId()}`);
      console.log(response.data);
      console.log()
      setRooms(response.data.data);
    })();
  }, []);
  
  console.log(rooms);


  return (
    <Container>
      
      {/* <TopInsideBar Anchors={Anchors} /> */}
      <WrapList checkMockup={rooms}>
      {rooms.map((item, key)=> (
            <RoomCard key={key} data={item} />
        ))}
      </WrapList>
      <WrapList checkMockup={data[0]}>
        {data[0] ? (
          data.map((item, index) => <RoomCard key={index} data={item} />)
        ) : (
          <AddCard link="/formulariosala" description="Adicionar nova sala" />
        )}
      </WrapList>
    </Container>
  );
};

export default RoomsList;
