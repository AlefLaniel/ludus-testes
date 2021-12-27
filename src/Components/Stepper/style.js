import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    padding-top: 40px;
    margin-bottom: 10px;
    flex-direction: row;
  }
`;

export const WrapPhases = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const RoundPhase = styled.a`
  color: #fff;
  background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #7F64AA" : "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #1F4139")};
  border-radius: 35rem;
  font-size: 20px;
  padding: 7px 13px;
`;

export const Dash = styled.div`
  height: 1px;
  background: black;
  width: 15%;
`;
