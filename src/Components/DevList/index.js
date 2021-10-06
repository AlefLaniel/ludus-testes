import React, { useContext } from "react";

import TopInsideBar from "../TopInsideBar";
import UserContext, { Context } from "../../Context/contextApi";
import ConsultorsCard from "../ConsultorsCard";

import { List } from "../ConsultorsList/style";

const DevList = () => {
  const { userApi } = useContext(Context);
  const Anchors = [];

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
            return item === "desenvolvedor";
          }) ? (
            <ConsultorsCard data={item} type="desenvolvedor" />
          ) : null
        )}
      </List>
    </div>
  );
};

export default DevList;
