import styled from "styled-components";

export const Container = styled.div`
  grid-area: CP;
  display: flex;
  overflow-x: auto;
  padding: 20px 20px;
  height: calc(99.5vh - 70px);

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(9, 30, 66, 0.08);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 50px;
  }
`;

export const Button = styled.button`
  align-items: center;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: white;
  display: flex;
  background: #282828;
  padding: 10px 20px 10px 15px;
  border-radius: 5px;
  text-align: center;
  margin: 5px 0px 5px 2vw;
  cursor: pointer;

  svg {
    margin-right: 10px;
    font-size: 1.3em;
  }
`;
