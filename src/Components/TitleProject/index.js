import React, { useContext, useEffect, useState } from "react";

import { Container, NameProject, Loading } from "./style.js";
import { getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";

const TitleProject = () => {

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
   return(
       <Container>
         {loading ? 
                <NameProject>
                 {data.project.name}
               </NameProject>
          :
          <Loading>
          </Loading>
        }

       </Container>
   )
}

export default TitleProject;
