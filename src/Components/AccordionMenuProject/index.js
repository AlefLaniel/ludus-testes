import React, {useState} from "react";
import { Container, Button, Icon, InternalButton } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
  } from "@fortawesome/free-solid-svg-icons";

const AccordionProject = () => {

    const [Details, setDetails] = useState(false);
    const [planning, setPlanning] = useState(false);
    const [team, setTeam] = useState(false);

    function handDetails() {
        if(Details === false){
            setDetails(true);
        }
        if(Details === true){
            setDetails(false);
        }
    }

    function handPlanning() {
        if(planning === false){
            setPlanning(true);
        }
        if(planning === true){
            setPlanning(false);
        }
    }

    function handTeam() {
        if(team === false){
            setTeam(true);
        }
        if(team === true){
            setTeam(false);
        }
    }
    return(
        <Container>
            {!Details && <Button onClick={handDetails}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleDown}
               />
              </Icon>
            Detalhes
        </Button>}
        {Details && <Button onClick={handDetails}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleUp}
               />
              </Icon>
            Detalhes
        </Button>}

        {Details && 
        <div style={{marginLeft: '30px'}}>
            <InternalButton>
            Descrição
            </InternalButton>
            <InternalButton>
            Documentos
            </InternalButton>
        </div>
            
            }

            {!planning && <Button onClick={handPlanning}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleDown}
               />
              </Icon>
            Planejamento
        </Button>}
        {planning && <Button onClick={handPlanning}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleUp}
               />
              </Icon>
            Planejamento
        </Button>}

        {planning && 
             <div style={{marginLeft: '30px'}}>
             <InternalButton>
                Historias do usuario 
             </InternalButton>
             <InternalButton>
                Kanban
             </InternalButton>
         </div>
        }

            {!team && <Button onClick={handTeam}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleDown}
               />
              </Icon>
            Equipe
        </Button>}
        {team && <Button onClick={handTeam}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleUp}
               />
              </Icon>
            Equipe
        </Button>}

        {team && 
             <div style={{marginLeft: '30px'}}>
             <InternalButton>
             Descrição
             </InternalButton>
             <InternalButton>
             Documentos
             </InternalButton>
         </div>
        }



        </Container>
       
    )
}

export default AccordionProject;