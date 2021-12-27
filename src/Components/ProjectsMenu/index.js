import React from "react";

import { Button, InitialName, ImageProject, Selected, SeparadorProject, ButtonSeparator } from "./style.js";
import { useHistory } from "react-router";
import { idProject, getIdProject } from "../../Services/auth.js";

const ProjectsMenu = ({ data }) => {
console.log(data)
    var name = `${data.name}`;
    var initialName = name.substring(0,2);
    console.log(initialName)

    let history = useHistory();

    function linkHistory(){
        history.push(`/projeto/${data._id}`)
        idProject(data._id);
    }
    
   return(
       <div>
       {data._id === getIdProject() ?
               <ButtonSeparator onClick={linkHistory}>
               {data.avatar_url ?
                <SeparadorProject>
                   <ImageProject onClick={linkHistory}>
                        <img src={data.avatar_url} alt="" />
                   </ImageProject>
                   <Selected></Selected>
                </SeparadorProject>
                   :
                   <SeparadorProject>  
                        <InitialName>
                            {initialName}
                        </InitialName>
                        <Selected></Selected>
                    </SeparadorProject> 
               }
              </ButtonSeparator>
              :
              <Button onClick={linkHistory}>
              {data.avatar_url ?
                  <ImageProject onClick={linkHistory}>
                          <img src={data.avatar_url} />
                  </ImageProject>
                  :
                      <InitialName>
                              {initialName}
                      </InitialName>
              }
             </Button>
       }
       </div>
   )
  
}

export default ProjectsMenu ;
