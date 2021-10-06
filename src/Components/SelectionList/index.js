import React from "react";

import TopInsideBar from "../TopInsideBar";
import loadProjects from "../../Services/projectApi";
import SelectionCard from "../SelectionCard";

import { List } from "../ConsultorsList/style";

const data = loadProjects();

const SelectionList = () => {
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
        {data.map((item, index) =>
          item.status === "Em análise" ? (
            <SelectionCard key={index} data={item} />
          ) : null
        )}
      </List>
    </div>
  );
};

export default SelectionList;
