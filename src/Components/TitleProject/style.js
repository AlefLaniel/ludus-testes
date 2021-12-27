import styled from "styled-components";

export const Container = styled.div`
    grid-area: TP;
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

export const NameProject = styled.a`
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

export const Loading = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;
    background-color: var(--primary);
`;