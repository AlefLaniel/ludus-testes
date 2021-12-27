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
  position: initial;
  margin-bottom: 10px;
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


export const Config = styled.a`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7F64AA;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-right: 2vw;
  padding: 2px 20px 2px 0px;
  text-decoration: none;

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

export const Image = styled.div`
      margin-left: 5px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
      :hover {
          cursor: pointer;
          }
`;

export const InitialName = styled.text`
    font-size: 20px;

    font-weight: bold;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
    
`;
