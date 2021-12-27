import React, { useCallback, useState, useEffect } from "react";
import { getToken, getTdRoom, idRoom } from "../../Services/auth";
import http from "../../Services/httpRequest";

import {
  Container,
  Title,
  Wrapper,
  WrapCard,
  Header,
  Info,
  Button,
  Input,
  Form,
  ButtonLinks
} from "./style.js";
import {
  faTrash,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// import contextApi from "../../contextApi";
// import loadProjects from "../../Services/projectApi";
import SendImage from "../SendImage";
import SendPdf from "../SendPdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoomDocs = (props) => {
  const idroom = getTdRoom();
    let Anchors = [];
    let [activeInput, setActiveInput] = useState(false);
    let [newLink, setNewLink] = useState("");
    let [images, setImages] = useState([]);
    let [pdfs, setPdfs] = useState([]);
    let [links, setLinks] = useState([]);

    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };

    function refreshPage(){ 
      window.location.reload(); 
    }

    useEffect(() => {
      (async () => {
        const response = await http.get(`/room/link/links/${getTdRoom()}`, config);
        setLinks(response.data);
      }
      )();
    }, []);
    /* Funções de Integração de Links com o back */  
    const HandleDelete = async (item, index) => {
        const newLinks = links;
        newLinks.splice(index, 1);
        setLinks([...newLinks]);

        if (item !== '' ) {
          const body = {
            link: item
          }

          http
          .put(`/room/removelink/${idroom}`, body, config)
          .then((res) => {
            console.log(res);
            console.log('go');
          })
          .catch((err) =>{
            console.log("Ocorreu algum erro")
            console.log(err.response);
          });
          
        }
      };
    
      const HandleChange = (e) => {
        setNewLink(e.target.value);
      };

      console.log(links);
    
      const HandleSubmit = (e) => {
        e.preventDefault();
        setLinks([...links, newLink]);
        setActiveInput(false);
        setNewLink("");

        console.log(newLink)
  

        if (newLink !== '' ) {
          const body = {
            link: newLink
          }

          http
          .put(`/room/sendlink/${idroom}`, body, config)
          .then((res) => {
            console.log(res);
            console.log('go');
            refreshPage();
          })
          .catch((err) =>{
            console.log("Ocorreu algum erro")
            console.log(err.response);
          });
          
        }

      };
    
   /* Fim das Funções */
    
     
 return (
    <Container>
      <Wrapper className="Wrapper"> 
        <WrapCard className="WrapInfo">
          <Header>
            <Title>Links</Title>
          </Header>
          <Info>
            {links.length !== 0 ? (
              links.map((item, index) => {

                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "10px 0px",
                    }}
                  >
                    <a
                      id="link"
                      href={`${item}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item}
                    </a>
                    <ButtonLinks>
                      <Button
                        index={index}
                        color={"linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7F64AA"}
                        onClick={() => HandleDelete(item, index)}
                        style={{ marginLeft: "15px" }}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ fontSize: "1.0em" }}
                        />
                        
                      </Button>
                    </ButtonLinks>
                  </div>
                );
              })
            ) : (
              <p>Nenhum Link foi encontrado</p>
            )}
            <Form onSubmit={HandleSubmit} active={activeInput}>
              <Input
                value={newLink}
                onChange={HandleChange}
                placeholder={"coloque aqui o seu link"}
              />
              <Button
                style={{ marginLeft: "10px" }}
                type="submit"
                color={"linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7F64AA"}
                side={true}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "5px", fontSize: "1.0em" }}
                />
              </Button>
            </Form>
            <div>
              <Button
                style={{
                  borderRadius: "50em",
                  padding: "15px 18px",
                  marginTop: "30px",
                }}
                color={"linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #33B270"}
                onClick={() => setActiveInput(true)}
              >
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.25em" }} />
              </Button>
            </div>
          </Info>
        </WrapCard>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>Imagens</Title>
          </Header>
          <Info>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
             <SendImage />
            </div>
          </Info>
        </WrapCard>
        <WrapCard className="WrapInfo">
          <Header>
            <Title>PDF</Title>
          </Header>
          <Info>
          <SendPdf />
          </Info>
        </WrapCard>
      </Wrapper>
    </Container>
 )   
}

export default RoomDocs;