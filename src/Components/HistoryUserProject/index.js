import React, { useEffect, useState } from "react";
import { getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Edit2, Trash, Plus } from 'react-feather';
import { Link } from "react-router-dom";
import { 
  Container, 
  Loading,
  DetailsHistory,
  Buttons,
  Edit,
  Delete,
  ButtonPlus
} from "./style.js";

const HistoryUserProject = () => {

    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
          const response = await http.get(`/project/${getIdProject()}`);
          console.log(response.data);
          setProject(response.data);
          setLoading(true)
        }
        )();
      }, []);

      const data = project;
      if (!data.project) return null;

    return (
    <Container>
      {loading ? 
        <div id="Content">
          <h1>Histórias do usuário</h1>
          <DetailsHistory>
            <p>Eu como professor, quero poder criar historia de 
              usuários de maneira que eu possa interagir com 
              sistema. 
            </p>
            <Buttons>
              <Edit>
                  <Edit2 color="#9D8F0A" size={24}/>
              </Edit>
              <Delete>
                <Trash color="#FF0404" size={24}/>
              </Delete>
            </Buttons>
          </DetailsHistory>

          <DetailsHistory>
            <p>Eu como professor, quero poder criar historia de 
              usuários de maneira que eu possa interagir com 
              sistema. 
            </p>
            <Buttons>
              <Edit>
                  <Edit2 color="#9D8F0A" size={24}/>
              </Edit>
              <Delete>
                <Trash color="#FF0404" size={24}/>
              </Delete>
            </Buttons>
          </DetailsHistory>


          <DetailsHistory>
            <p>Eu como professor, quero poder criar historia de 
              usuários de maneira que eu possa interagir com 
              sistema. 
            </p>
            <Buttons>
              <Edit>
                  <Edit2 color="#9D8F0A" />
              </Edit>
              <Delete>
                <Trash color="#FF0404" />
              </Delete>
            </Buttons>
          </DetailsHistory>

          <ButtonPlus>
            <Link to={`/formulariohistoriausuario/${getIdProject()}`}>
              <Plus color="#FFF" size={48}/>
            </Link>
          </ButtonPlus>
        </div>
      :
      <Loading>
        <CircularProgress/>
      </Loading>
      }
    </Container>
 )   
}

export default HistoryUserProject;