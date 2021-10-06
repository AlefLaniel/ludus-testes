import React from "react";

import {
  Container,
  Separator,
  Img
} from "./style.js";

import { Link } from "react-router-dom";

import RommsMenu from "../RommsMenu/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faComments,
  faQuestionCircle,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import logoCa  from "../../Assets/Camaleão.png"
import LogoLudus from "../Logo/index.js";
import IconsMenu from "../IconsMenu/index.js";


const MenuInsideProject = (props) => {
  return (
    <Container>
      {/* <Logo>
        <Link to="/salas">
          <FontAwesomeIcon icon={faFire} />
        </Link>
      </Logo> */}
      <Link to="/salas"> 
       
        <LogoLudus logo />
             
      </Link>
      <Link to="/propostas">
      <RommsMenu />
      </Link>
      <Separator />
      <Link to="/propostas">
      <RommsMenu />
      </Link>
      <Link to="/propostas">
      <RommsMenu />
      </Link>
      <Link to="/formulario">
      <IconsMenu addIdea/>
      </Link>
      <Link to="/formulario">
      <IconsMenu ideaSituation />
      </Link>
      <Separator />
      <IconsMenu help />
    </Container>
  );
};

export default MenuInsideProject;
