import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  min-height: 75px;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.1)), #33B270;
  position: relative;
  top: 110px;
  border-radius: 3px;
  left: 17.9vw;
  color: black;
  padding: 4px;
`;

export const WrapStorys = styled.div`
  margin: 6px 0px;
  border-radius: 3px;
  cursor: pointer;
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: white;
  padding: 5px 17px;
  background: ${(props) => props.color};
`;

export const Confirm = styled.div`
  display: ${(props) => (props.display === true ? "initial" : "none")};
`;
