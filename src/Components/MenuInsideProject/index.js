import React, {useState, useEffect} from "react";

import {
  Container,
  Separator,
  RoomSelection, 
  InitialName,
  ImageRoom
} from "./style.js";

import { Link } from "react-router-dom";

import LogoLudus from "../Logo/index.js";
import IconsMenu from "../IconsMenu/index.js";
import http from "../../Services/httpRequest.js";
import { getId, getTdRoom, idRoom, idProject } from "../../Services/auth.js";
import { useHistory } from "react-router";
import ProjectsMenu from "../ProjectsMenu/index.js";


const MenuInsideProject = ({id}) => {
  console.log(id)

  const [roomUser, setRoomUser] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get(`/room/${getTdRoom()}`);
      console.log(response.data);
      setRoomUser(response.data);
    })();
  }, []);

  const [projectUser, setProjectUser] = useState([]);

  const [project, setProject] = useState([]);
    useEffect(() => { 
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}/Aprovado`);
          console.log(response.data);
          setProject(response.data.projects);
        })();
      }, []);

      
      useEffect(() => { 
          (async () => {
            const response = await http.get(`/room/${getTdRoom()}/userProjects/${getId()}/Aprovado`);
            console.log('dfskabkdsb')
            console.log(response.data);
            setProjectUser(response.data);
          })();
        }, []);
  

var data = roomUser;

const dat = projectUser;
console.log(dat)

    let names = `${data.name}`;
    var initialName = names.substring(0,2);

    console.log(dat)


    let history = useHistory();


    function linkHistory(){
        history.push(`/sala/${data._id}`)
        idRoom(data._id);
        window.location.reload();
        const idproject = '';
        idProject(idproject);
    }
  return (
    <Container>
      <Link to="/salas"> 
       
        <LogoLudus logo />
             
      </Link>
      <RoomSelection>

      {data.avatar_url ?
            <ImageRoom onClick={linkHistory}>
                <img src={data.avatar_url} alt="avatar da sala"/>
            </ImageRoom>
            :
                <InitialName onClick={linkHistory}>
                    {initialName}
                </InitialName>
            }

          </RoomSelection>

     
      <Link to="/propostas">
      </Link>
      <Separator />
      {getId() === data.owner ?
        <div>
             {project.map((item, key) => (
        <ProjectsMenu key={key} data={item}/>
      ))}
        </div> :
         <div>
           {dat.map((item, key) => (
        <ProjectsMenu key={key} data={item}/>
      ))}
          </div>}
      
      <Link to={`/formulario`}>
      <IconsMenu addIdea/>
      </Link>
      <Link to="/projetosinfo">
       <IconsMenu ideaSituation />
      </Link>
      <Separator />
      <IconsMenu help />
    </Container>
  );
};

export default MenuInsideProject;
