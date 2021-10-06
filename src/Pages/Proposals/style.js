import styled from "styled-components";

export const Container = styled.div`
  min-height: 75vh;
  background: #444;
`;

export const WrapCards = styled.div`
  padding: 20px 0px;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 23%);
  grid-column-gap: 1.25%;

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 90%);
  }
`;
