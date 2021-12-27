import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E5F3ED;
  border-radius: 5px;
  height: fit-content;
  text-align: center;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);



  h1 {
    font-size: 30px;
    margin-bottom: 10px;
    font-family: var(--font-familyP);
  }

  h2 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
    font-family: var(--font-familyP);
    
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
  }

`;

export const ImageProject = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      color: var(--tertiary);
      }

      img {
    width: 100px;
     height: 100px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 50%;
  }
`;

export const Details = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: 5px;
  letter-spacing: 3px;
  font-size: 15px;
  font-weight: 500;
  align-self: center;
  padding: 15px !important;

  :hover {
    color: var(--primary);
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px !important;
`;

export const ModalInfo = styled.div`
  width: 70vw;
  height: 80vh;
  @media (max-width: 500px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  text-align: center;
  padding: 20px;
  color: white;
  width: 100%;
  background: var(--primary);
  justify-content: center;
  align-items: center;
`;

export const InfoCapsule = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10vw;
  grid-row-gap: 50px;
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

export const WrapDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 20px;
  grid-column-gap: 50px;
  padding: 50px 15vw;
  background: #E5F3ED !important;
  

  h2 {
    text-align: center;
    margin-bottom: 25px;
    font-family: var(--font-familyP);
    
  }

  p {
    margin-top: 10px;
    text-align: justify;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
  }


  @media (max-width: 1450px) {
    padding: 40px 5vw;
  }

  @media (max-width: 1100px) {
    padding: 40px 0vw;
  }

  @media (max-width: 900px) {
    padding: 10px 0vw;
    display: flex;
    flex-direction: ${(props) => props.columnType};
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Description = styled.div`
  align-self: center;
  

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

export const Edit = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #E5F3ED;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  align-self: flex-end;
  margin-left: -35px;
  border: none;
  cursor: pointer;




`;