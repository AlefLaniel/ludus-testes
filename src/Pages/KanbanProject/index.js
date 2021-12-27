import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import Kanban from "../../Components/Kanban";
import MenuProject from "../../Components/MenuProject";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Project = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <DndProvider backend={HTML5Backend}>
      {matches ?
      <Grid>
        <Menu page="sala" />
        <TopInsideBar />
        <Kanban />
      </Grid>
      : 
      <Grid>
        <Menu page="sala" />
        <TopInsideBar />
        <TitleProject />
        <MenuProject /> 
        <Kanban />
      </Grid>
      }
    
    </DndProvider>
  );
};

export default Project;
