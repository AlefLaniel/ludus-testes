import React from "react";


import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import LogoInRoom from "../../Components/LogoInRoom";
import MenuProject from "../../Components/MenuProject";

const Project = () => {
  return (
       <Grid>
      <Menu page="sala" />
      <MenuProject /> 
      <TitleProject />
      <TopInsideBar />
      <LogoInRoom />
    </Grid>
  );
};

export default Project;
