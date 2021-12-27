import styled from "styled-components";

export const Container = styled.div`
    color: #DCDADA;
    font-size: 125%;
    align-self: flex-start;
    padding-left: 30px;
    margin-top:40px;

    a{
      text-decoration: none;
      color: #DCDADA; 
    :hover{
        color: white;
    }
    }


`;

export const Button = styled.div`
        margin-top: 25px;
        display: flex;
        cursor: pointer;
        :hover {
            color: white;
        }
`;

export const InternalButton = styled.div`
        margin-top: 10px;
        display: flex;
        cursor: pointer;
        color: #DCDADA;
        font-size: 90%;
        :hover {
            color: white;
        }
`;

export const Icon = styled.div`
   margin-right: 10px;
`;

export const IconAdd = styled.div`
    font-size: 20px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #DCDADA; 
    :hover{
        color: white;
    }
`;

export const AddMembro = styled.div`
        display: flex;
        margin-top: 25px;
        margin-left: 8%;
        text-align: center;
        cursor: pointer;
        border-radius: 20px;
        :hover {
            border-radius: 35%;
            color: var(--tertiary);
        }
`;

export const ModalInfo = styled.div`
  width: 40vw;
  height: 100%;
  
  @media (max-width: 500px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
  }
  @media (max-height: 600px){
    display: flex;
    flex-direction: column;
    height: 70vh;
  }
`;

export const Header = styled.div`
  display: flex;
  text-align: center;
  height: 15%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  color: white;
  width: auto;
  background: var(--primary);
  justify-content: center;
  align-items: center;
`;

export const InfoCapsule = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10vw;
  grid-row-gap: 40px;
  padding: 40px 100px;
  background: white !important;

  div {
    color: black !important;
  }

  @media (max-width: 1450px) {
    padding: 40px 25px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;
export const ExitIcon = styled.div`
    color: black;
     position: absolute;
     right: 2vw;
     cursor: pointer;
     font-size: 25px;
     :hover{
         color: #E14444;
     }
`;