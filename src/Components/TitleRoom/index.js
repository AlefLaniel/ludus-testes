import React, { useContext, useEffect, useState } from "react";

import { Container, NameRoom } from "./style.js";
import { getTdRoom, getToken, idUser, isAuthenticated, logout } from "../../Services/auth";
import http from "../../Services/httpRequest";


const TitleRoom = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}`);
          //console.log(response.data);
          setRooms(response.data);
          
        }
        )();
      }, []);

      const data = rooms;

   return(
       <Container>
           
            <NameRoom>
                {data.name}
            </NameRoom>
       

       </Container>
   )
}

export default TitleRoom;
