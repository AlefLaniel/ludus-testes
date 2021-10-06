import React from "react";

import ProjectList from "../../Components/ProjectList";
import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import MenuProject from "../../Components/MenuProject";
import TitleProject from "../../Components/TitleProject";

const InsideRooms = ({ setProjectId }) => {
  return (
    <Grid>
      <Menu page="sala" />
      <MenuProject /> 
      <TitleProject />
      <TopInsideBar />
      {/* <ProjectList setProjectId={setProjectId} /> */}
    </Grid>
  );
};

export default InsideRooms;
