import React from "react";

import {
  Container,
  Separator,
  NameProject
} from "./style.js";

import { Link } from "react-router-dom";


import RommsMenu from "../RommsMenu/index.js";
import AccordionProject from "../AccordionMenuProject/index.js";



const MenuProject = (props) => {
  return (
    <Container>
      
    
      <AccordionProject />
     
    </Container>
  );
};

export default MenuProject;
