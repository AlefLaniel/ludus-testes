import React, {useState, useEffect} from "react";
import { Container, Button, Icon, InternalButton, AddMembro, IconAdd, ModalInfo, Header, ExitIcon, InfoCapsule } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIdProject, getTdRoom } from "../../Services/auth";
import { Link } from "react-router-dom";
import {
    faAngleDown,
    faAngleUp,
    faFile,
    faFileAlt,
    faProjectDiagram,
    faUser,
    faUserPlus,
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
import http from "../../Services/httpRequest";
import InviteUserProject from "../InviteUserProject";
import Modal from "react-modal";
import ProjetosRoom from "../ProjetosRoom";

const AccordionProject = () => {

    const [Details, setDetails] = useState(false);
    const [planning, setPlanning] = useState(false);
    const [team, setTeam] = useState(false);
    const [members, setMembers] = useState([]);
    
    const [openModal, setOpen] = useState(false);

    const customStyles = {
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
        content: {
          padding: "0",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          color: "#000",
          background: "#fff",
        },
      };

      useEffect(() => {
        (async () => {
          const response = await http.get(`/project/${getIdProject()}/members`);
          console.log(response);
          setMembers(response.data);
        })();
      }, []);

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
                <Icon>
                <FontAwesomeIcon
                    icon={faFileAlt}
                />
                </Icon>
                <Link to={`/projetodescricao/${getIdProject()}`}>Descrição</Link>
            </InternalButton>
            <InternalButton>
            <Icon>
                <FontAwesomeIcon
                    icon={faFile}
                />
                </Icon>
                <Link to={`/documentos/${getIdProject()}`}>Documentos</Link>
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
             <Icon>
                <FontAwesomeIcon
                    icon={faUser}
                />
                </Icon>
                <Link to={`/historiausuario/${getIdProject()}`}>Historias do usuario</Link>
                 
             </InternalButton>
             <InternalButton>
             <Icon>
                <FontAwesomeIcon
                    icon={faProjectDiagram}
                />
                </Icon>
                <Link to={`/kanbanprojeto/${getIdProject()}`}>Kanban</Link>
                
             </InternalButton>
         </div>
        }

            {!team &&
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button onClick={handTeam}>
                    <Icon>
                    <FontAwesomeIcon 
                        icon={faAngleDown}
                    />
                    </Icon>
                    Equipe
                </Button>
        <AddMembro onClick={() => setOpen(true)}>
            <IconAdd>
                <FontAwesomeIcon 
                    icon={faUserPlus}
                   />
             </IconAdd>
            </AddMembro>
        </div>
        }
        {team && 
        <div style={{display: 'flex', flexDirection: 'row'}}>
             <Button onClick={handTeam}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleUp}
               />
              </Icon>
            Equipe
        </Button>
        <AddMembro onClick={() => setOpen(true)}>
            <IconAdd>
                <FontAwesomeIcon 
                    icon={faUserPlus}
                   />
             </IconAdd>
            </AddMembro>
        </div>
       }

        {team && 
             <div style={{marginLeft: '30px'}}>
             {members.map((item, key) => (
            <ProjetosRoom key={key} data={item}/>
      ))}
         </div>
        }
         <WrapModal
        customStyles={customStyles}
        openModal={openModal}
         setOpen={setOpen}
      />
        </Container>
       
    )
}

export default AccordionProject;

const WrapModal = ({  customStyles, openModal, setOpen }) => {
    const [roomUser, setRoomUser] = useState([]);
// eslint-disable-next-line 
    const [users, setUsers] = useState([]);
  
      useEffect(() => {
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}/members`);
          console.log(response.data);
          setRoomUser(response.data);
        })();
      }, []);

      var email = users;

      console.log(email)
      console.log(roomUser)


    return (
      <Modal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={() => setOpen(false)}
      >
        <ModalInfo>
          <Header>
            <h1>{roomUser.name}</h1>
            <ExitIcon>
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faTimes}
            />
            </ExitIcon>
           
          </Header>
          <InfoCapsule>
              <h2 style={{textAlign: 'center'}}> Adiconar Membro ao Projeto</h2>
        
                {roomUser.map((item, key)=> (
                     <InviteUserProject key={key} data={item}/>
                   ))}
          </InfoCapsule>
        </ModalInfo>
      </Modal>
    );
  };