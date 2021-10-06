import styled from "styled-components";

export const Container = styled.div`
  
  grid-area: SP;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary);
  max-height: 100%;
  overflow-y: scroll;


  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IconBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  svg {
    color: #00ffc4;
    font-size: min(50px, 2.5vw);
  }

  h1 {
    margin-left: 1vw;
    font-size: min(50px, 2vw);
    font-weight: 800;
    color: white;
  }

  @media (max-width: 1250px) {
  
    svg {
      font-size: 30px;
    }

    h1 {
      display: none;
    }
  }
`;

export const Separator = styled.div`
  padding: 10px;
  width: 40%;
  border-bottom: 2px solid var(--tertiary); 
`;

export const Img = styled.div`
  margin-top: 20px;
  :hover{
    background-color: blue;
    border-radius: 10px;
  }
`;

