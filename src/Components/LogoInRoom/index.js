import React from "react";
import { Container } from "./style.js";

import LogoLudzOne from "../../Assets/Logo2.png";

const LogoInRoom = () => {
 return (
    <Container>
        <div>
            <img src={LogoLudzOne} alt="Logo da Empresa"/>
            <h1>Inspire-se, inove e</h1>
            <h1 className="h1-verde">transforme o mundo!</h1>
        </div>
      
    </Container>
 )   
}

export default LogoInRoom;