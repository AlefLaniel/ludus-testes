import React, {useState} from "react";

import { Button,  Logo } from "./style.js";

import logoCa  from "../../Assets/LogoCamaleão.png"
import logoCaVerde from "../../Assets/Camaleão.png"
import { removeRoom } from "../../Services/auth.js";

const LogoLudus = ({
    logo,
}) => {
    const [img, setImg] = useState(logoCa)

    function imgCaVerde() {
        setImg(logoCaVerde);
    }
    function imgCa() {
        setImg(logoCa);
    }
    function removRoom() {
        removeRoom();
    }
   return(
       
       <Button 
        logo={logo}
        onClick={removRoom}
        >
         {logo && 
             <Logo onMouseOver={imgCaVerde}
             onMouseOut={imgCa}>
            <img alt='logo' src={img} style={{width: '50px'}} 
          />
               </Logo>}
       </Button>
   )
}

export default LogoLudus;