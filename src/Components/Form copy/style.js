import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  align-items: center;
  justify-content: center;
  background: #fffafa;
  width: 100%;
  height: 80%;
  padding: 0px 0px 0px 0px;
`;

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  margin-bottom: 40px;

  @media (max-width: 1441px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 80vw;
    margin-top: 20px;
  }

  @media (max-width: 500px) {
    margin-bottom: 30px;
    padding: 0px 25px 0px 15px;
  }
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
    padding: 0;

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

export const WrapAnchor = styled.div`
  display: flex;
  margin-top: 7px;
  place-content: space-between;
  width: 58.19vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: ${(props) => props.display};
  cursor: pointer;
  background: #7F64AA;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  top: 0;
  border-radius: 5px;
  transition: all 0.1s;
  border: none;
  outline: none;

  :active {
    top: 2px;
  }

  @media (max-width: 768px){
    padding: 10px;
    align-self: center;
    font-size: 16px;
  }
`;

export const ButtonBefore = styled.button`
  display: ${(props) => props.display};
  cursor: pointer;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #1F4139;
  color: #fff;
  text-decoration: none;
  padding:  10px;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  top: 0;
  border-radius: 5px;
  transition: all 0.1s;
  border: none;
  outline: none;

  :active {
    top: 2px;
  }

  @media (max-width: 768px){
    padding: 10px;
    align-self: center;
    font-size: 16px;
  }
`;

export const WrapButtons = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;

export const Header = styled.div`
  background: #03A47E;
  padding: 20px;
  display: flex;
  place-content: center;
`;


export const CountCaract = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-familyP);
  font-size: 12px;
  margin-bottom: 3px;

`;