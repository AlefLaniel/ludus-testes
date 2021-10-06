import React from "react";

import { Button, IconBottom,  Logo } from "./style.js";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import logoCa  from "../../Assets/Camaleão.png"

const LogoLudus = ({
    logo,
}) => {
   return(
       <Button 
        logo={logo}
        >
         {logo && 
             <Logo>
            <img alt='logo' src={logoCa} style={{width: '45px'}}/>
               </Logo>}
       </Button>
   )
}

export default LogoLudus;