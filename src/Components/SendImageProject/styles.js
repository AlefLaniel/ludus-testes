import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

export const Content = styled.div`
  width: 40vw;
  max-width: 800px;
  margin: 5px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 768px){
    width: 65vw;
  }

  @media (max-width: 500px){
    width: 60vw;
  }

  @media (max-width: 375px){
    width: 65vw;
  }

  @media (max-width: 320px){
    width: 55vw;
  }
`;
