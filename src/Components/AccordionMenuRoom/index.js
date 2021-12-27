import React, {useState, useEffect} from "react";
import { Container,
         Button, Icon, InternalButton,
          AddMembro, IconAdd, ModalInfo,
           Header, InfoCapsule, ExitIcon} from "./style";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faFile,
    faFileAlt,
    faUserPlus,
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
import http from "../../Services/httpRequest";
import { getId, getTdRoom } from "../../Services/auth";
import ProjetosRoom from "../ProjetosRoom";
import TextField from "@material-ui/core/TextField";
import Users from "../Users";
import { Link } from "react-router-dom";
import UserRoom from "../UserRoom";

const AccordionMenu = () => {


const [members, setMembers] = useState([]);

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

  useEffect(() => {
    (async () => {
      const response = await http.get(`/room/${getTdRoom()}/members`);
      console.log(response);
      setMembers(response.data);
    })();
  }, []);

  console.log(members);


    console.log(dat)

    const [openModal, setOpen] = useState(false);

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
        <div style={{marginLeft: '25px'}}>
            <InternalButton>
                <Icon>
                <FontAwesomeIcon
                    icon={faFileAlt}
                />
                </Icon>
                <Link to={`/informacoessala/${getTdRoom()}`}>Informações</Link>
            
            </InternalButton>
            <InternalButton>
            <Icon>
                <FontAwesomeIcon
                    icon={faFile}
                />
                </Icon>
                <Link to={`/documentossala/${getTdRoom()}`}>Documentos</Link>
            
            </InternalButton>
        </div>
            }
            {!planning && 
                 <Button onClick={handPlanning}>
                    <Icon>
                    <FontAwesomeIcon 
                        icon={faAngleDown}
                    />
                    </Icon>
                    Projetos
                </Button>
           }
        {planning && <Button onClick={handPlanning}>
            <Icon>
            <FontAwesomeIcon 
                 icon={faAngleUp}
               />
              </Icon>
            Projetos
        </Button>}
        {planning && 
        <div style={{marginLeft: '25px'}}>
          {getId() === data.owner ?
        <div>
             {project.map((item, key) => (
        <ProjetosRoom key={key} data={item}/>
      ))}
        </div> :
         <div>
           {dat.map((item, key) => (
        <ProjetosRoom key={key} data={item}/>
      ))}
          </div>}


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
                    Membros
               </Button>
               {getId() ===  roomUser.owner ? <AddMembro onClick={() => setOpen(true)}>
                <IconAdd>
                    <FontAwesomeIcon 
                        icon={faUserPlus}
                    />
                    </IconAdd>
                 </AddMembro> : null}
               
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
            Membros
        </Button>
        {getId() ===  roomUser.owner ? <AddMembro onClick={() => setOpen(true)}>
                <IconAdd>
                    <FontAwesomeIcon 
                        icon={faUserPlus}
                    />
                    </IconAdd>
                 </AddMembro> : null}
        </div>
        }
        {team && 
             <div style={{marginLeft: '25px'}}>
           {members.map((item, key) => (
            <UserRoom key={key} data={item}/>
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

export default AccordionMenu;

const WrapModal = ({  customStyles, openModal, setOpen }) => {
    const [roomUser, setRoomUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

      useEffect(() => {
        if(search) {
          (async () => {
            const response = await http.get(`/users/${search}`);
            console.log(response.data);
            setUsers(response.data);
          })();
        }
        
      }, [search]);
  
      useEffect(() => {
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}`);
          console.log(response.data);
          setRoomUser(response.data);
        })();
      }, []);

      var email = users;

      console.log(email)


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
              <h2 style={{textAlign: 'center'}}> Adiconar Membro a Sala</h2>
              <TextField
                 style={{ background: '#C2D2CA', borderRadius: '10px'}}
                 InputLabelProps={{
                   style: {color: "black"},
                 }}
                 InputProps={{
                   style: {
                     fontFamily: 'nunito', color: 'black', borderColor: 'white', borderRadius: '10px'
                   }}}
                  id="outlined-basic"
                 label="Digitar e-mail"
                  variant="outlined"
                  value={search}
                  onChange={(ev) => setSearch(ev.target.value)}
              >
              </TextField>
              {
                users.length !== 0 ?  <div>
                {users.map((item, key)=> (
                     <Users key={key} data={item}/>
                   ))}
                </div>
                : search === '' ? <h2 style={{textAlign: 'center', marginTop: '5%'}}>
                    Digite um Email
                </h2>
                : <h2 style={{textAlign: 'center', marginTop: '5%'}}>
                  Email não encontrado
                </h2>
              }
             
          </InfoCapsule>
        </ModalInfo>
      </Modal>
    );
  };
  