import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../Context/contextApi";

import { useHistory } from "react-router-dom";
import { Container, Config, WrapLinks, InitialName, Image } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { getId } from "../../Services/auth";
import http from "../../Services/httpRequest";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const TopInsideBar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let history = useHistory();

  const { desloga } = useContext(Context);

  const [users, setUsers] = useState([]);

  
  

    function linkHistory(){
        history.push(`/profile`)
    }

  useEffect(() => {
    (async () => {
      const response = await http.get(`/user/${getId()}`);
      console.log(response.data)
      setUsers(response.data);
    })();
  }, []);

  var name = `${users.name}`;
  var initialName = name.substring(0,2);
  console.log(initialName)

  return (
    <Container>
      <WrapLinks>
      </WrapLinks>
      <Config>
        <Image  
        aria-expanded={open ? 'true' : undefined}
         disableElevation
         onClick={handleClick}
         style={{cursor: "pointer"}}>
          {users.avatar_url ?  <img
        
          alt={users.name}
          // title={login.name}
          src={users.avatar_url}
        /> : <InitialName>
        {initialName}
        </InitialName>} 
        </Image>
        
        <p>{users.name}</p>
        <FontAwesomeIcon icon={faCaretDown}  
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          style={{cursor: "pointer"}}
      />
      </Config>
      <Menu 
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
          <MenuItem onClick={linkHistory}>Perfil</MenuItem>
          <MenuItem onClick={desloga}>Sair</MenuItem>
          </Menu>
    </Container>
  );
};

export default TopInsideBar;
