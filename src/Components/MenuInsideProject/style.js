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

export const RoomSelection = styled.div`
   margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 35%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 25%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }
`;

export const ImageRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 35%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 25%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }

      img{
        width: 60px;
        height: 60px; 
        border-radius: 35%;

        :hover {
          border-radius: 25%;  
        }
      }
`;

export const InitialName = styled.div`
    font-size: 30px;
    font-weight: bold;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
    :hover{
        color: var(--tertiary);
       font-size: 35px;
    }
`;

