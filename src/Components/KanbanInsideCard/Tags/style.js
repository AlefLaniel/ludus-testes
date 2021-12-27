import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 20px;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.1)), #33B270;
  position: relative;
  left: 50px;
  top: 160px;
  border-radius: 5px;
  padding: 5px;
`;

export const WrapSVG = styled.div`
  display: ${(props) => (props.display === true ? "initial" : "none")};
`;

export const Label = styled.button`
  background: ${(props) => props.color};
  padding: 5px 7px;
  color: white;
  font-size: 13px;
  border-radius: 5px;
  text-align: left;
  border: none;
  cursor: pointer;
  margin: 3px 0px;
  letter-spacing: 3px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 15px;
  color: white;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
  padding-bottom: 5px;
  width: 100%;
  text-align: center;
`;
