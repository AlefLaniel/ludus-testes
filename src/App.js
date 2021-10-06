import React, { useState } from "react";

import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
import { AuthPorvider } from "./Context/contextApi";
import loadUsers from "./Services/userApi";
import { isAuthenticated, logout } from "./Services/auth";


const App = () => {
  
  return (
    <AuthPorvider>
      <GlobalStyle />
      <Routes />
    </AuthPorvider>
  );
};

export default App;
