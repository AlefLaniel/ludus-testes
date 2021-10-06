import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 40px;
    margin-bottom: 10px;
    flex-direction: row;
  }
`;

export const WrapPhases = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 5vw;
  padding-right: 3vw;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10px;
    flex-direction: initial;
  }
`;

export const RoundPhase = styled.a`
  color: #fff;
  background: ${(props) => (props.active ? "#3de242" : "gray")};
  border-radius: 35rem;
  font-size: 20px;
  padding: 7px 13px;
`;

export const Dash = styled.div`
  height: 50px;
  background: black;
  width: 1px;

  @media (max-width: 768px) {
    width: 10vw;
    height: 1px;
    margin: 0px 10px;
  }
`;
