import React from'react';
import { Button, Container, InitialName, NameProject } from '../ProjetosRoom/style';

const UserRoom = (data) =>{

    console.log(data.data.name)

    var project = data.data;

    var name = `${project.name}`;
    var initialName = name.substring(0,2);
    var nameredu = name.substring(0, 10)
    console.log(initialName)

    return(
        <Container>
          {project.avatar_url ?
            <Button >
                    <img src={project.avatar_url}  alt='avatar do projeto'/>
            </Button>
            :
            <Button >
                <InitialName>
                        {initialName}
                </InitialName>
            </Button>
            }
              <NameProject >
              {nameredu}
            </NameProject>
         
        </Container>
    )
}

export default UserRoom;