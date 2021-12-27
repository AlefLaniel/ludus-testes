import React, {useEffect, useState} from "react";

import Menu from "../../Components/MenuInsideProject"; 
import SelectionList from "../../Components/SelectionList";
import TopInsideBar from "../../Components/TopInsideBar";
import { getTdRoom } from "../../Services/auth";
import http from "../../Services/httpRequest";

import { Grid } from "../Rooms/style";

const ProjectSelection = () => {
  const [roomUser, setRoomUser] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await http.get(`/room/${getTdRoom()}`);
      console.log(response.data);
      setRoomUser(response.data);
    })();
  }, []);

console.log(roomUser)

  return (
    <Grid>
      <Menu page="salas" />
      <TopInsideBar />
     <SelectionList />
      
    </Grid>
  );
};

export default ProjectSelection;
