import React, {useEffect, useState} from "react";

import {
  Container,
  Separator
} from "./style.js";

import { Link } from "react-router-dom";

import RommsMenu from "../RommsMenu/index.js";

import { getId } from "../../Services/auth.js";
import http from "../../Services/httpRequest.js";
import IconsMenu from "../IconsMenu/index.js";
import LogoLudus from "../Logo/index.js";


const MenuInside = ({ id }) => {

  const [roomUsers, setRoomUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${getId()}/member`);
      console.log(response.data);
      setRoomUsers(response.data);
    })();
  }, []);

  const data = roomUsers;
  console.log(data);
  return (
    <Container>
      <Link to="/salas"> 
      <LogoLudus logo /> 
      </Link>  
      <Separator />
      {data.map((item, key)=> (
            <RommsMenu key={key} data={item}/>
        ))}
      <Link to='/formulariosala'>
      <IconsMenu  addSala />
      </Link>
    
      <Separator />
      <IconsMenu help />
    
    </Container>
  );
};

export default MenuInside;
