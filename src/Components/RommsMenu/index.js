import React from "react";

import { Button, IconBottom,  Logo } from "./style.js";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import logoCa  from "../../Assets/Camaleão.png"

const RommsMenu = ({
    help,
    addIdea,
    ideaSituation,
    addSala,
}) => {
   return(
       <Button 
        help={help} 
        addIdea={addIdea} 
        addSala={addSala} 
        ideaSituation={ideaSituation}
        >
         
       
           {help && <IconBottom>
            <FontAwesomeIcon 
           icon={faQuestionCircle}
               />
               </IconBottom>}
               {addIdea && <IconBottom>
            <FontAwesomeIcon 
           icon={faPlus}
               />
               </IconBottom>}
               {addSala && <IconBottom>
            <FontAwesomeIcon 
           icon={faPlus}
               />
               </IconBottom>}
               {ideaSituation && <IconBottom>
            <FontAwesomeIcon 
           icon={faLightbulb}
               />
               </IconBottom>}
            
       </Button>
   )
}

export default RommsMenu;
