import styled from "styled-components";

export const CardModel = styled.a`
  border-radius: 3px;
  box-shadow: 1px 1px 7px black;
  background: #333;
  border-radius: 7px;
  margin: 15px 0px;
  align-self: self-start;
  text-decoration: none;
  color: white;
`;

export const HeaderImage = styled.img`
  width: 100% !important;
  height: 200px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  object-fit: cover;
`;

export const WrapHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -70px;
  margin-bottom: -50px;

  h2 {
    font-weight: bolder;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  background: white;
  padding: 3px;
  object-fit: cover;
  object-position: 40% 0px;
  border-radius: 100px;
`;

export const Description = styled.p`
  margin-right: auto;
  padding: 20px 20px 5px;
  text-align: justify;
`;

export const Author = styled.p`
  font-weight: 900;
  margin-left: auto;
  margin-right: 20px;
  padding-top: 20px;
`;
