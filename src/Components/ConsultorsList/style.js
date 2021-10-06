import styled from "styled-components";

export const List = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1717px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1310px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
  }
`;
