import styled from "styled-components";

export const Container = styled.div`
  grid-area: DP;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7F64AA;
  max-height: 100vh;
  overflow-y: scroll;
  box-shadow: 0px 0px 3px #3C2A57;

  ::-webkit-scrollbar {
    display: none;
  }
`;



export const Separator = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: 2px solid var(--primary);
`;

