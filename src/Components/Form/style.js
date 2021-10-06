import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  width: 70vw;

  span {
    display: flex;
    text-transform: uppercase;
    color: #000;
    font-size: 1.125rem;
    padding: 10px;
    margin-bottom: 5px;
    font-weight: bolder;
    letter-spacing: 0.125rem;
    animation-name: top-down-span;
    animation-duration: 1s;
    height: 2vh;

    p {
      color: red;
      position: relative;
      top: -11px;
      left: -8px;
    }
  }

  p {
    font-size: 1rem;
    padding: 10px;
    margin-bottom: 5px;
    animation-name: top-down-span;
    animation-duration: 1s;
    letter-spacing: 0.125rem;
    font-weight: 500;
  }

  textarea {
    outline: none;
    resize: none;
    width: 70vw;
    height: 20vh;
    font-size: 1.5rem;
    padding: 10px;
    background: transparent;
    color: black;
    border: none;
    border-bottom: 2px solid black;
    animation-name: top-down;
    animation-duration: 1s;
  }

  textarea::placeholder {
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    width: 95%;
    align-items: center;

    textarea {
      width: 95%;
    }
  }
`;

export const WrapAnchor = styled.div`
  display: flex;
  width: 71vw;
  margin-top: 25px;
  place-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Button = styled.button`
  display: ${(props) => props.display};
  cursor: pointer;
  background: #3de242c4;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  top: 0;
  transition: all 0.1s;

  :active {
    top: 2px;
  }
`;

export const WrapPopUp = styled.div`
  position: absolute;
  top: 0;
  display: ${(props) => props.active};
  height: 100vh;
  width: 108vw;
  background: black;
  opacity: 0.5;
`;

export const PopUp = styled.div`
  position: absolute;
  top: 25%;
  right: 21%;
  display: ${(props) => props.active};
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  background: black;
  color: white;
  padding: 30px;
  font-size: 20px;
  overflow-y: auto;
  overflow-x: auto;

  h2 {
    margin-bottom: 15px;
  }

  h1 {
    margin-bottom: 15px;
    font-size: 1em;
    text-align: center;
  }

  p {
    font-weight: 300;
  }
`;

export const WrapAnswer = styled.div`
  margin-bottom: 100px;
  column-gap: 5%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  row-gap: 40px;
`;
