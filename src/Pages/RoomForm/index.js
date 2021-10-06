import React from "react";

import WrapRoomForm from "../../Components/WrapRoomForm";
import TopInsideBar from "../../Components/TopInsideBar";
import Menu from "../../Components/MenuInside";

import { Grid } from "../Rooms/style.js";

const RoomForm = () => {
  return (
    <Grid>
      <Menu page="salas" />
      <TopInsideBar />
      <WrapRoomForm />
    </Grid>
  );
};

export default RoomForm;
