import styled from "styled-components";

export const Container = styled.div`
  grid-area: TR;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary);
  height: 100%;
  box-shadow: 0px 0px 3px #3C2A57;


  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NameRoom = styled.a`
  display: flex;
  margin-top:9%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  color: var(--white);

  @media (max-width: 425px){
    margin-top: 20px;
    font-size: 18px;
  }
`;
