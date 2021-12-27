import React from "react";


import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import { Grid } from "./style";
import TitleProject from "../../Components/TitleProject";
import FormHistoryUserProject from "../../Components/FormHistoryUserProject";
import MenuProject from "../../Components/MenuProject";

const FormHistoryUser = () => {
  return (
       <Grid>
      <Menu page="sala" />
      <MenuProject /> 
      <TitleProject />
      <TopInsideBar />
      <FormHistoryUserProject />
    </Grid>
  );
};

export default FormHistoryUser;
