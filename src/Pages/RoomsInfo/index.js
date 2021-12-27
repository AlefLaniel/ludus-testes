import React from "react";

import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleRoom from "../../Components/TitleRoom";
import { getTdRoom } from "../../Services/auth";
import InfoRooms from "../../Components/InfoRooms";
import MenuRoom from "../../Components/MenuRoom";

const RoomsInfo = ({ setProjectId }) => {
  console.log(getTdRoom());
  return (
    <Grid>
      <Menu page="sala" />
      <MenuRoom /> 
      <TitleRoom />
      <TopInsideBar />
      <InfoRooms />
    </Grid>
  );
};

export default RoomsInfo;
