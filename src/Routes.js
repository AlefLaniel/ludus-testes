import React, { useContext } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Proposals from "./Pages/Proposals";
import Rooms from "./Pages/Rooms";
import NewForm from "./Pages/NewForm";
import RoomForm from "./Pages/RoomForm";
import InsideRooms from "./Pages/InsideRooms";
import RoomsInfo from "./Pages/RoomsInfo";
import DocsRoom from "./Pages/DocsRoom";
import Project from "./Pages/Project";
import InviteConsultors from "./Pages/InviteConsultors";
import InviteDevs from "./Pages/InviteDevs";
import ProjectSelection from "./Pages/ProjectSelection";
import ProjectInfo from "./Pages/ProjectInfo";
import ProjectDescription from "./Pages/ProjectDescription";
import KanbanProject from "./Pages/KanbanProject";
import { Context } from "./Context/contextApi";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Profile from "./Pages/Profile";
import EditPassword from "./Pages/EditPassword";
import HistoryUser from "./Pages/HistoryUser";
import FormHistoryUser from "./Pages/FormHistoryUser";
import ForgotPassword from "./Pages/Forgot_password";
import ResetPassword from './Pages/ResetPassword'

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
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
        <PrivateRoute isPrivate path="/propostas" component={Proposals} />
        <PrivateRoute isPrivate path="/salas" component={Rooms} />
        <PrivateRoute isPrivate path="/formulario" component={NewForm} />
        <PrivateRoute isPrivate path="/formulariosala" component={RoomForm} />
        <PrivateRoute isPrivate path="/sala" component={InsideRooms} />
        <PrivateRoute isPrivate path="/informacoessala" component={RoomsInfo} />
        <PrivateRoute isPrivate path="/documentossala" component={DocsRoom} />
        <PrivateRoute isPrivate path={`/convidarconsultor`} component={InviteConsultors} />
        <PrivateRoute isPrivate path={`/convidardev`} component={InviteDevs} />
        <PrivateRoute isPrivate path={`/selecaoprojetos`} component={ProjectSelection} />
        <PrivateRoute isPrivate path={`/projetosinfo`} component={ProjectSelection} />
        <PrivateRoute isPrivate path={`/profile`} component={Profile} />
        <PrivateRoute isPrivate path={`/editpass`} component={EditPassword} />
        <PrivateProject hasID={hasID} path={`/projeto/`} component={Project} />
        <PrivateProject hasID={hasID} path={`/projetodescricao/`} component={ProjectDescription} />
        <PrivateProject hasID={hasID} path={`/kanbanprojeto/`} component={KanbanProject} />
        <PrivateProject hasID={hasID} path={`/historiausuario/`} component={HistoryUser} />
        <PrivateProject hasID={hasID} path={`/formulariohistoriausuario/`} component={FormHistoryUser} />
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
