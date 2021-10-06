import React from "react";

const AnswersForm = (props) => (
  <div>
    <h3 style={{ textAlign: "center" }}>{props.questions}</h3>
    <p style={{ overflowWrap: "break-word", textAlign: "justify" }}>
      {props.data}
    </p>
  </div>
);

export default AnswersForm;
