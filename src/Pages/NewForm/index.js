import React, { useContext, useState } from "react";

import Menu from "../../Components/MenuInsideProject";
import TopInsideBar from "../../Components/TopInsideBar";
import FormCopy from "../../Components/Form copy";

import { Grid } from "../Rooms/style.js";
import { Context } from "../../Context/contextApi";

const NewForm = () => {
  let [index, setIndex] = useState(0);
  const auth = useContext(Context)
  console.log(auth);

  return (
    <Grid>
      <Menu page="projeto" />
      <TopInsideBar />
      <FormCopy index={index} setIndex={setIndex} />
    </Grid>
  );
};

export default NewForm;
