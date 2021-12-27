import React from "react";

import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleRoom from "../../Components/TitleRoom";
import { getTdRoom } from "../../Services/auth";
import RoomDocs from "../../Components/RoomDocs";
import MenuRoom from "../../Components/MenuRoom";

const DocsRoom = ({ setProjectId }) => {
  console.log(getTdRoom());

  return (
    <Grid>
      <Menu page="sala" />
      <MenuRoom /> 
      <TitleRoom />
      <TopInsideBar />
      <RoomDocs />
    </Grid>
  );
};

export default DocsRoom;
