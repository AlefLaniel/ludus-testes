import React from "react";
import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleRoom from "../../Components/TitleRoom";
import { getTdRoom } from "../../Services/auth";
import LogoInRoom from "../../Components/LogoInRoom";
import MenuRoom from "../../Components/MenuRoom";

const InsideRooms = () => {
  console.log(getTdRoom());
  return (
    <Grid>
      <Menu page="sala" />
      <MenuRoom /> 
      <TitleRoom />
      <TopInsideBar />
      <LogoInRoom />
    </Grid>
  );
};

export default InsideRooms;
