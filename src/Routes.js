import React, { useContext } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Proposals from "./Pages/Proposals";
import Rooms from "./Pages/Rooms";
import NewForm from "./Pages/NewForm";
import RoomForm from "./Pages/RoomForm";
import InsideRooms from "./Pages/InsideRooms";
import Project from "./Pages/Project";
import InviteConsultors from "./Pages/InviteConsultors";
import InviteDevs from "./Pages/InviteDevs";
import ProjectSelection from "./Pages/ProjectSelection";
import ProjectInfo from "./Pages/ProjectInfo";
import { Context } from "./Context/contextApi";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

const PrivateProject = ({ component: Component, hasID, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      hasID() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/salas", state: { from: props.location } }}
        />
      )
    }
  />
);

function PrivateRoute({isPrivate,  ...rest}){
  let {auth, loading} = useContext(Context);
  console.log(auth);
  console.log(loading);
  if(loading){
    return <h1>loading</h1>
  }
  if(!auth && isPrivate){
    return <Redirect to="/login" />
  }
  return <Route {...rest} />
}

const Routes = () => {
  
  const { projectID } = useContext(Context);

  const hasID = () => {
    console.log(projectID !== "");
    return true;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <PrivateRoute isPrivate path="/propostas" component={Proposals} />
        <PrivateRoute isPrivate path="/salas" component={Rooms} />
        <PrivateRoute isPrivate path="/formulario" component={NewForm} />
        <PrivateRoute isPrivate path="/formulariosala" component={RoomForm} />
        <PrivateRoute isPrivate path="/sala" component={InsideRooms} />
        <PrivateRoute isPrivate path={`/convidarconsultor`} component={InviteConsultors} />
        <PrivateRoute isPrivate path={`/convidardev`} component={InviteDevs} />
        <PrivateRoute isPrivate path={`/selecaoprojetos`} component={ProjectSelection} />
        <PrivateProject hasID={hasID} path={`/projeto/`} component={Project} />
        <PrivateProject
          hasID={hasID}
          path={`/documentos/`}
          component={ProjectInfo}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
