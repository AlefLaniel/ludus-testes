import styled from "styled-components";

export const Container = styled.div`
  background: #333333;
  border-radius: 5px;
  height: fit-content;
  text-align: center;
  color: white;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    text-align: justify;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }

  button {
    background: rgb(0 161 255);
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  background-color: transparent !important;
  transition: 0.5s all;

  svg {
    transition: 0.5s all;
  }

  :hover {
    transition: 0.5s all;
    color: ${(props) => props.color};

    svg {
      transition: 0.5s all;
      color: ${(props) => props.color} !important;
    }
  }

  @media (max-width: 811px) {
    svg {
      margin: 0 !important;
    }
  }
`;

export const Details = styled.button`
  background: rgb(0 161 255);
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  letter-spacing: 3px;
  font-size: 14px;
  font-weight: 400;
  align-self: center;
  padding: 15px !important;

  :hover {
    background: rgb(0 137 255);
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px !important;
`;

export const ModalInfo = styled.div`
  width: 90vw;
  height: 90vh;

  @media (max-width: 500px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  text-align: center;
  padding: 20px;
  color: white;
  background: #00a1ff;
  margin-bottom: 10px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  padding: 20px 10vw;
  background: white !important;

  h2 {
    text-align: center;
    margin-bottom: 25px;
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
  background: white !important;

  p {
    text-align: justify;
    margin-bottom: 5px;
  }
`;

export const Image = styled.img`
  place-self: center;
  height: 300px;

  @media (max-width: 500px) {
    height: 200px;
  }
`;
