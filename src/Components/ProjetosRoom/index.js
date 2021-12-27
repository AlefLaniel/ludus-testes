import React from'react';
import { Button, Container, InitialName, NameProject } from './style';
import { useHistory } from "react-router";
import { idProject } from "../../Services/auth.js";

const ProjetosRoom = (data) =>{
    console.log(data.data.name)

    var project = data.data;

    var name = `${project.name}`;
    var initialName = name.substring(0,2);
    var nameredu = name.substring(0, 10)
    console.log(initialName)
    
    let history = useHistory();

    function linkHistory(){
        history.push(`/projeto/${project._id}`)
        idProject(project._id);
    }

    return(
        <Container>
          {project.avatar_url ?
            <Button onClick={linkHistory}>
                    <img src={project.avatar_url} alt='avatar do projeto' />
            </Button>
            :
            <Button onClick={linkHistory}>
                <InitialName>
                        {initialName}
                </InitialName>
            </Button>
            }
              <NameProject onClick={linkHistory}>
              {nameredu}
            </NameProject>
         
        </Container>
    )
}

export default ProjetosRoom;