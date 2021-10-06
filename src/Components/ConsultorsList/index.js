import React, { useContext } from "react";

import TopInsideBar from "../TopInsideBar";
import ConsultorsCard from "../ConsultorsCard";
import  { Context } from "../../Context/contextApi";

import { List } from "./style.js";

const ConsultorsList = () => {
  const Anchors = [];
  const { userApi } = useContext(Context);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <TopInsideBar Anchors={Anchors} />
      <List>
        {userApi.map((item) =>
          item.permission.some((item) => {
            return item === "consultor";
          }) ? (
            <ConsultorsCard data={item} type="consultor" />
          ) : null
        )}
      </List>
    </div>
  );
};

export default ConsultorsList;
