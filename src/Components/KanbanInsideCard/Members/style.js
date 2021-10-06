import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 75px;
  background: #3c9cff;
  position: relative;
  left: 50px;
  top: 235px;
  border-radius: 3px;

  h1 {
    font-size: 16px;
    font-weight: 400;
    color: white;
    border-bottom: 1px solid white;
    margin-bottom: 15px;
    padding: 10px 0px;
    width: 100%;
    text-align: center;
  }
`;

export const WrapMember = styled.div`
  display: flex;
  background: yellowgreen;
  margin: 3px 4px;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    color: white;
    background: transparent;
    border: none;

    text-align: left;
    padding: 0px 10px;

    align-items: center;
    justify-content: space-between;
  }
`;

export const EasterEgg = styled.div`
  width: 100%;
  display: flex;
  /*cuidado ao aceitar esse job*/
`;

export const WrapIcon = styled.div`
  width: fit-content;
  display: ${(props) => props.display};
`;
