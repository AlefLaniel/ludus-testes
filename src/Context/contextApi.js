import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { isAuthenticated, logout } from "../Services/auth";
import loadUsers from "../Services/userApi";
import useAuth from "./useAuth";

const userApi = loadUsers();

const login = {
  name: "Hugo Barreto",
  password: "123321",
  email: "hugo@hugo.com",
  picture:
    "https://media-exp1.licdn.com/dms/image/C4E03AQFvbf5TQP12Vw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=H-aBtxzE3bHmplH5LhuKZLZ1Q1SY-N6O1s8rKAboY7M",
  permission: ["consultor", "gerente"],
};



const Context = createContext();


function AuthPorvider({children}){
    let [roomInfo, setRoomInfo] = useState("");
    let [projectID, setProjectID] = useState("");
    const {desloga, loading, auth, loga} = useAuth();
    
    return(
        <Context.Provider
        value={{
            userApi,
            login,
            roomInfo,
            setRoomInfo,
            projectID,
            setProjectID,
            auth,
            loading,
            desloga,
            loga,
          }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, AuthPorvider};
