import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222831;

  h1 {
    font-size: 15px;
    margin-left: 10px;
    color: white;
    margin: 10px 0px;
    text-align: center;
  }

  img {
    border-radius: 10rem;
    width: 150px;
    height: 150px;
    border: 5px solid black;
    box-shadow: 0 0px 5px rgba(250, 250, 250, 1);
  }

  button {
    border-radius: 5px;
    background: rgb(0 161 255);
    border: none;
    cursor: pointer;
    color: white;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 700;
    padding: 0.75em 2em;
    letter-spacing: 0.05rem;
    width: 13rem;
  }
`;

export const ConfirmModal = styled.div`
  width: 300px;

  h1 {
    font-size: 20px;

    p {
      color: black;
      text-decoration: underline;
    }
  }

  div {
    margin-top: 10px;
  }
`;

export const Confirm = styled.button`
  border-radius: 5px;
  background: rgb(3 212 19);
  border: none;
  cursor: pointer;
  color: white;
  line-height: 1.5;
  font-size: 15px;
  font-weight: 700;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  width: 13rem;
  margin-right: 20px;
`;

export const Cancel = styled.button`
  border-radius: 5px;
  background: rgb(183 47 47);
  border: none;
  cursor: pointer;
  color: white;
  line-height: 1.5;
  font-size: 15px;
  font-weight: 700;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  width: 13rem;
`;
