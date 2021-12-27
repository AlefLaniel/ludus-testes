import React from "react";


import Menu from "../../Components/MenuInside";
import TopInsideBar from "../../Components/TopInsideBar";
import RoomsList from "../../Components/RoomsList";


import { Grid } from "./style.js";
import { getTdRoom } from "../../Services/auth";

const Rooms = () => {
  console.log(getTdRoom())
  return (
     <Grid>
       <Menu page="salas"/>
       <TopInsideBar />
       <RoomsList />
    </Grid>
  );
};

export default Rooms;
