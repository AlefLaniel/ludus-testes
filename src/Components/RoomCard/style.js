import styled from "styled-components";

export const CardModel = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  padding: 20px 0px 30px;
  flex-direction: column;
  align-items: center;
  background: white;
  height: fit-content;
  border-radius: 5px;
  background: var(--secondary);

  a {
    background: var(--quaternary);
    border-radius: 100px;
    font-size: 20px;
    color: white;
    text-decoration: none;
    padding: 10px 30px;
    margin-bottom: 20px;
  }
`;

export const Projects = styled.div`
  color: white;
  margin-bottom: 20px;

  h3 {
    color: white;
  }
`;

export const WrapHeader = styled.div`
  width: 90%;
  position: relative;
  text-align: center;

  h2 {
    color: white;
  }
`;

export const Author = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const People = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 10rem;
  }
`;
