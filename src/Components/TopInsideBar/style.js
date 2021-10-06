import styled from "styled-components";

export const Container = styled.div`
  grid-area: TB;
  background: var(--primary);
  height: 70px;
  padding: 10px 0px;
  display: flex;
  place-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px #3C2A57;
`;

export const WrapLinks = styled.div`
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-right: 2vw;
`;

export const Button = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  background: #282828;
  padding: 10px 20px 10px 15px;
  border-radius: 5px;
  text-align: center;
  margin: 5px 0px 5px 2vw;
  cursor: pointer;
`;

export const NameProject = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-content: center;
  margin-left: 5.5%;
  font-size: 23px;
  font-weight: 700;
  color: var(--white);
`;

export const Config = styled.a`
  background: #282828;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-right: 2vw;
  padding: 2px 20px 2px 0px;
  text-decoration: none;
  cursor: pointer;

  img {
    margin-right: 5px;
    margin-left: 5px;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 100px;
  }

  svg {
    color: white;
    font-size: 1em;
    margin-left: 10px;
  }

  p {
    font-size: 1em;
    color: white;
    font-weight: 700;
  }

  @media (max-width: 1020px) {
    padding: 0;

    svg {
      display: none;
    }

    p {
      display: none;
    }

    img {
      width: 40px;
      margin-right: 0;
    }
  }
`;
