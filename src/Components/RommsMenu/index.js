import React from "react";
import { useHistory } from "react-router";
import { idRoom } from "../../Services/auth.js";

import { Container ,Button, InitialName, ImageRoom } from "./style.js";



const RommsMenu = ({ data }) => {

    let history = useHistory();

    function linkHistory(){
        history.push(`/sala/${data._id}`)
        idRoom(data._id);
    }
    let names = `${data.name}`;
    var initialName = names.substring(0,2);
   return(
        <Container>

            {data.avatar_url ?
            <ImageRoom onClick={linkHistory}>
                <img src={data.avatar_url} alt="avatar da Sala" />
            </ImageRoom>
            :
            <Button onClick={linkHistory}>
                <InitialName>
                    {initialName}
                </InitialName>
            </Button>
            }


        </Container>


   )
}

export default RommsMenu;
