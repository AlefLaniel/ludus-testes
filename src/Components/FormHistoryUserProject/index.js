import React, { useEffect, useState } from "react";
import { getIdProject } from "../../Services/auth";
import http from "../../Services/httpRequest";
import { 
  Container, 
  FormArea
} from "./style.js";

const FormHistoryUserProject = () => {

    const [project, setProject] = useState([]);
 // eslint-disable-next-line
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
      <FormArea>
        <h1>Histórias do usuário</h1>
        <form >
            <span>COMO/SENDO</span>
            <input type="text" />
            <span>EU QUERO/GOSTARIA/DEVO/POSSO</span>
            <textarea type="text" />
            <span>PARA QUE/DE/PARA</span>
            <textarea type="text" />

            <button type="submit">Criar História</button>
        </form>
      </FormArea>
    </Container>
 )   
}

export default FormHistoryUserProject;