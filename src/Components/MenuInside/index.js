import React, {useEffect, useState} from "react";

import {
  Container,
  Separator,
  Img
} from "./style.js";

import { Link } from "react-router-dom";

import RommsMenu from "../RommsMenu/index.js";

import { getId, logout } from "../../Services/auth.js";
import logoCa  from "../../Assets/Camaleão.png"
import http from "../../Services/httpRequest.js";
import IconsMenu from "../IconsMenu/index.js";
import LogoLudus from "../Logo/index.js";


const MenuInside = (props) => {

  const [roomUsers, setRoomUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/room/userRooms/${getId()}`);
      console.log(response.data);
      console.log()
      setRoomUsers(response.data.data);
    })();
  }, []);


  console.log(roomUsers);
  return (
    <Container>
      {/* <Logo>
        <Link to="/salas">
          <FontAwesomeIcon icon={faFire} />
        </Link>
      </Logo> */}


      <Link to="/salas"> 
      <LogoLudus logo /> 
      </Link>  
    
      <Separator />
      <Link to="/sala">
      <div>
      {roomUsers.map((item, key)=> (
            <RommsMenu key={key} item={item.roomUsers} />
        ))}

      </div>
      </Link>
      
      <Link to='/formulariosala'>
      <IconsMenu  addSala />
      </Link>
    
      <Separator />
      <IconsMenu help />
    
    </Container>
  );
};

export default MenuInside;
