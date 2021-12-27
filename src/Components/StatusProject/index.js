import React, {useState, useEffect} from 'react';
import { getId, getTdRoom } from '../../Services/auth';
import http from '../../Services/httpRequest';
import SelectionCard from "../SelectionCard";
import SelectionCardOwner from '../SelectionCardOwner';
import { WrapList, Container } from './style';

import ProjectCardSalvos from '../SelectionCardSend';

const StatusProject = (props) => {

    console.log(props.id)

    var arq = props.id;

    const [roomUser, setRoomUser] = useState([]);
      useEffect(() => {
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}`);
          console.log(response.data);
          setRoomUser(response.data);
        })();
      }, []);
      
    const [project, setProject] = useState([]);
    useEffect(() => { 
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}/${props.id}`);
          console.log(response.data);
          setProject(response.data.projects);
        })();
      }, [props.id]);

      const [projectUser, setProjectUser] = useState([]);
      useEffect(() => { 
        (async () => {
          const response = await http.get(`/room/userProjects/${getId()}/${getTdRoom()}/${props.id}`);
          console.log(response.data);
          setProjectUser(response.data);
        })();
      }, [props.id]);

      console.log(project)

      const data = project;
      console.log(data)

    return(
      <Container>
       
        {arq === 'Arquivado' ? <div> 
             {((projectUser.length === 0)) ?
              <text 
              width="150%"
              alignSelf="center"
              alignItems="center"
              fontFamily="var(--font-familyP)"
              fontSize="20px"
              >
                Sem projetos {arq}
              </text>
          : <WrapList checkMockup={projectUser}> {projectUser.map((item, key)=> (
            <ProjectCardSalvos key={key} data={item} />
        ))} </WrapList>} 
             </div> : getId() === roomUser.owner ? 
          <div> 
             {((data.length === 0)) ?
              <text 
              width="150%"
              alignSelf="center"
              alignItems="center"
              fontFamily="var(--font-familyP)"
              fontSize="20px"
              >
                Sem projetos para {arq}
              </text>
          : <WrapList checkMockup={data}> {data.map((item, key)=> (
            <SelectionCard key={key} data={item} />
           ))} </WrapList> } 
             </div>
            : <div> 
             {((projectUser.length === 0)) ?
              <text 
              width="150%"
              alignSelf="center"
              alignItems="center"
              fontFamily="var(--font-familyP)"
              fontSize="20px"
              >
                Sem projetos para {arq}
              </text>
          : <WrapList checkMockup={projectUser}> {projectUser.map((item, key)=> (
            <SelectionCardOwner key={key} data={item} />
        ))} </WrapList>} 
             </div>}
      
      </Container>
         
    )
}

export default StatusProject;