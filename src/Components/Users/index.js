import React, {useEffect, useState} from "react";
import { getTdRoom, getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import { Container, InitialName, Button, User, UserName, UserEmail, ButtonConv, ButtonConvidado, Image} from "./style";



const Users = ({data}) => {

    const [members, setMembers] = useState([]);
    const id = data._id;
    let names = `${data.name}`;
    var initialName = names.substring(0,2);
    var contUser;

    useEffect(() => {
        (async () => {
          const response = await http.get(`/room/${getTdRoom()}/members`);
          console.log(response);
          setMembers(response.data);
        })();
      }, []);
    
    function convida() {
        const body = {
            userID: id,
          }
          const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };   
          http
        .put(`/room/addmember/${getTdRoom()}`, body, config)
        .then((res) => {
          console.log(res);
          console.log('go');
          window.location.reload();
        })
        .catch((err) =>{
          console.log("Ocorreu algum erro")
          console.log(err.response);
          //setError(err.response.data.message);
        });

    } 


    return (
        <Container>
            <User>
            {data.avatar_url ?
            <Image>
                <img src={data.avatar_url}  alt="imagem do usuário"/>
            </Image>
            :
            <Button>
                <InitialName>
                    {initialName}
                </InitialName>
            </Button>
            }
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center"}}>
            <UserName>{data.name}</UserName>
            <UserEmail>{data.email} </UserEmail>
            </div>
            {members.map((item, key) => (
                data.email === item.email ? 
                    contUser = true
                    : null
             ))}
               {contUser ? 
                    <ButtonConvidado>
                         Convidado
                    </ButtonConvidado> 
                    : 
                    <ButtonConv onClick={convida}>
                         Convidar
                    </ButtonConv>
                    }
          
            </User>
        </Container>
    )
}

export default Users;