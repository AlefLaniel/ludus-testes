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

export const Button = styled.button`
  font-size: 15px;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  margin: auto;
  height: 30px;
  width: 100px;
  font-weight: 500;
  background-color: transparent !important;
  transition: 0.5s all;
  color: ${(props) => props.rover} !important;

  svg {
    transition: 0.2s all;
    color: ${(props) => props.rover} !important;
  }

  :hover {
    transition: 0.2s all;
    background-color:  ${(props) => props.color} !important ;
    color: white !important;
    
    svg {
      transition: 0.1s all;
      color: white !important;
    }
  }

  @media (max-width: 811px) {
    svg {
      margin: 0 !important;
    }
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
  width: 75vw;
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
  background: #fff !important;
  

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
  background: #fff;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  align-self: flex-end;
  margin-left: -35px;
  border: none;
  cursor: pointer;




`;

export const WrapQuestions = styled.div`
  @keyframes top-down {
    from {
      transform: translate(0, -100%);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes top-down-span {
    from {
      transform: translate(0, -500%);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  display: ${(props) => props.display};
  flex-direction: column;
  height: auto;
  transition: all 1s cubic-bezier(0.4, 0.25, 0.8, 0.3);
  width: 58.19vw;

  h3{
    font-size: 20px;
  }

  p {
    text-align: justify;
    color: #000;
    font-size: 16px;
    font-weight: 300;
    padding: 10px 0px;
    margin-top: 0px;
    margin-bottom: 5px;
    animation-name: top-down-span;
    animation-duration: 1s;
    font-family: var(--font-familyS);
  }

  textarea {
    outline: none;
    resize: none;
    width: 100%;
    height: 31.81vh;
    font-size: 1.5rem;
    padding: 10px;
    background: #E5F3ED;
    border-radius: 10px;
    color: black;
    border: none;
    animation-name: top-down;
    animation-duration: 1s;
  }

  textarea::placeholder {
    opacity: 0.4;
    color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 10px;

    p{
      font-size: 16px;
    }

    textarea {
      width: 100%;
    }
  }

  @media (max-width: 500px){
    
    p{
      
      font-size: 14px;
    }
  }
`;


export const ButtonModal = styled.button`
      font-size: 15px;
      border-radius: 20px;
      cursor: pointer;
      outline: none;
      border: none;
      margin: auto;
      height: 40px;
      width: 30%;
      font-weight: 500;
      background-color: ${(props) => props.color} !important;
      transition: 0.5s all;
      color: white !important;

      svg {
        transition: 0.2s all;
        color: white !important;
      }

      :hover {
        transition: 0.2s all;
        width: 35%;
        height: 42px;
        color: white !important;
        
        svg {
          transition: 0.1s all;
          color: white !important;
        }
      }

      @media (max-width: 811px) {
        svg {
          margin: 0 !important;
        }
      }
`;

export const CountCaract = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-familyP);
  font-size: 12px;
  margin-bottom: 3px;

`;