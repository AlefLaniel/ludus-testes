import React, { useEffect, useState } from "react";
import { Container, Loading } from "./style.js";
import { getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";
import CircularProgress from '@material-ui/core/CircularProgress';

const InfoProject = () => {

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
      <div>
        <h1>
            Descrição
        </h1>
       <p>
        {data.project.description}
        </p>
      </div>
      :
      <Loading>
        <CircularProgress/>
      </Loading>
      }
    </Container>
 )   
}

export default InfoProject;