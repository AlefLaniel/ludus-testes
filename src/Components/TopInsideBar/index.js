import React, { useContext, useEffect, useState } from "react";

import UserContext, { Context } from "../../Context/contextApi";

import { useHistory } from "react-router-dom";
import { Container, Config, WrapLinks, Button, NameProject } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getId, getToken, idUser, isAuthenticated, logout } from "../../Services/auth";
import http from "../../Services/httpRequest";

const TopInsideBar = (props) => {
  let history = useHistory();

  const { login, id, desloga} = useContext(Context);

  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${getId()}`);
      setUsers(response.data.result);
    })();
  }, []);

  
 // const user = users.filter((user) => user.email === login.email);
  //const permission = users[0].permission;

 
  return (
    <Container>
      
      <WrapLinks>
        
        {/* <Button onClick={() => history.goBack()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              color: "white",
              marginRight: "10px",
              fontSize: "1.25em",
            }}
          />
          <p>Go Back</p>
        </Button> */}
        {/* {props.Anchors.map((item, index) =>
          item.permissions ? (
            permission.some((userPermission) => {
              return item.permissions.some((itemPermission) => {
                return userPermission === itemPermission;
              });
            }) ? (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={item.link}
              >
                <Button>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{
                      color: `${item.color}`,
                      marginRight: "10px",
                      fontSize: "1.25em",
                    }}
                  />
                  <p>{item.text}</p>
                </Button>
              </Link>
            ) : null
          ) : (
            <Link style={{ textDecoration: "none" }} key={index} to={item.link}>
              <Button>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{
                    color: `${item.color}`,
                    marginRight: "10px",
                    fontSize: "1.25em",
                  }}
                />
                <p>{item.text}</p>
              </Button>
            </Link>
          )
        )}
        {props.Component ? props.Component : null} */}
      </WrapLinks>
      
      <Config onClick={desloga}>
        
        <img
          alt={users.name}
          // title={login.name}
          src={
            users.picture
              ? users.picture
              : null // : "https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png"
          }
        />
        <p>{users.name}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </Config>
    </Container>
  );
};

export default TopInsideBar;
