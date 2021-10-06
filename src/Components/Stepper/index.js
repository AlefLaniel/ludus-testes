import React from "react";

import { Container, WrapPhases, RoundPhase, Dash } from "./style";

const Stepper = (props) => {
  return (
    <Container>
      <WrapPhases>
        <RoundPhase active={props.index >= 0}>1</RoundPhase>
        <Dash />
        <RoundPhase active={props.index >= 1}>2</RoundPhase>
        <Dash />
        <RoundPhase active={props.index >= 2}>3</RoundPhase>
        <Dash />
        <RoundPhase active={props.index === 3}>4</RoundPhase>
      </WrapPhases>
    </Container>
  );
};

export default Stepper;
