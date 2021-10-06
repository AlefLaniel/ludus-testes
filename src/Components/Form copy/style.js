import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #1F4135;
  width: 100%;
  height: 80%;
  padding: 0px 0px 0px 0px;
`;

export const WrapContainer = styled.form`
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
    margin-bottom: 100px;
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
  transition: all 1s cubic-bezier(0.4, 0.25, 0.8, 0.3);
  width: 58.19vw;
  

  span {
    display: flex;
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    color: white;
    margin-bottom: -5px;
    letter-spacing: 0.125rem;
    animation-name: top-down-span;
    animation-duration: 1s;
    height: auto;
    font-size: min(50px, 2vw);
    font-weight: 500;
    align-self: center;

    @media (max-width: 1000px) {
      font-size: 20px;
    }

    p {
      overflow-wrap: break-word;
      color: red;
      text-align: center;
      position: relative;
      font-size: min(40px, 1.8vw);
      font-weight: 400;
      top: -10px;
      left: 0px;

      @media (max-width: 1000px) {
        font-size: 15px;
      }
    }
  }

  p {
    text-align: justify;
    color: white;
    font-size: 20px;
    font-weight: 300;
    padding: 10px 0px;
    margin-top: 0px;
    margin-bottom: 5px;
    animation-name: top-down-span;
    animation-duration: 1s;
    
  }

  textarea {
    outline: none;
    resize: none;
    width: 100%;
    height: 31.81vh;
    font-size: 1.5rem;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 8px;
    animation-name: top-down;
    animation-duration: 1s;
  }

  textarea::placeholder {
    opacity: 0.4;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 0;

    p{
      font-size: 18px;
    }

    textarea {
      width: 100%;
    }
  }

  @media (max-width: 500px){
    
    p{
      
      font-size: 18px;
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
  background: #03A47E;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
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
`;

export const ButtonBefore = styled.button`
  display: ${(props) => props.display};
  cursor: pointer;
  background: #616262;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
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
`;

export const PopUp = styled.div`
  display: ${(props) => props.active};
  flex-direction: column;
  width: 90vw;
  height: 90vh;
  color: white;

  p {
    font-weight: 300;
    margin: 10px 0px;
  }

  h3 {
    margin: 10px 0px;
  }

  h4 {
    color: black;
    text-align: center;
    font-size: 1.3em;
    font-weight: 400;
  }
`;

export const WrapButtons = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;

export const WrapAnswer = styled.div`
  display: grid;
  padding: 30px 8vw;
  color: black;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2vw;
  align-items: center;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: ${(props) =>
      props.direction ? props.direction : "column"};
  }

  img {
    width: 400px;
    justify-self: center;

    @media (max-width: 550px) {
      width: 250px;
    }
  }
`;

export const Header = styled.div`
  background: #03A47E;
  padding: 20px;
  display: flex;
  place-content: center;
`;

export const ModalButton = styled.a`
  background: ${(props) => props.color};
  text-decoration: none;
  outline: none;
  padding: 15px 25px;
  font-size: 18px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  margin: 0px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  :hover {
    background: ${(props) => props.hoverColor};
  }
`;
