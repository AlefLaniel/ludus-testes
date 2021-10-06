import React from "react";

const AnswersForm = (props) => (
  <div>
    <h3>{props.questions}</h3>
    <p style={{ overflowWrap: "break-word" }}>{props.data}</p>
  </div>
);

export default AnswersForm;
