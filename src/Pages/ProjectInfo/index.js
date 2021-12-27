import React from "react";

import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import ProjectDocs from "../../Components/ProjectDocs";
import MenuProject from "../../Components/MenuProject";


const ProjectInfo = () => {
  return (
    <Grid>
    <Menu page="sala" />
    <MenuProject /> 
    <TitleProject />
    <TopInsideBar />
    <ProjectDocs />
  </Grid>
  );
};

export default ProjectInfo;
