import React from "react";


import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import HistoryUserProject from "../../Components/HistoryUserProject";
import MenuProject from "../../Components/MenuProject";

const HistoryUser = () => {
  return (
       <Grid>
      <Menu page="sala" />
      <MenuProject /> 
      <TitleProject />
      <TopInsideBar />
      <HistoryUserProject />
    </Grid>
  );
};

export default HistoryUser;
