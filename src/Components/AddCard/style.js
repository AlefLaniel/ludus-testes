import styled from "styled-components";

export const Container = styled.a`
  background: #282828;
  border-radius: 5px;
  border: solid 1px white;
  padding: 50px;
  display: flex;
  width: 165px;
  flex-direction: column;
  height: 10vh;
  align-items: center;
  align-self: center;
  text-decoration: none;
  transition: 0.2s all;

  svg {
    color: #282828;
    font-size: 20px;
    padding: 20px;
    background: white;
    border-radius: 5px;
  }

  :hover {
    width: 170px;
    height: 10.5vh;
    transition: 0.2s all;

    svg {
      color: white;
      background: #19e68c;
    }
  }
`;
export const Text = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  color: white;
`;
