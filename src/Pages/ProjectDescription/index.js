import React from "react";


import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import InfoProject from "../../Components/InfoProject";
import MenuProject from "../../Components/MenuProject";

const ProjectDescription = () => {
  return (
       <Grid>
      <Menu page="sala" />
      <MenuProject /> 
      <TitleProject />
      <TopInsideBar />
      <InfoProject />
    </Grid>
  );
};

export default ProjectDescription;
