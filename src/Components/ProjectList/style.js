import styled from "styled-components";

export const Container = styled.div`
   grid-area: CP;
   display: flex;
    flex-direction: row;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapList = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-height: 100vh;
  width: auto;
  overflow-y: scroll;
  grid-template-columns: ${(props) =>
    props.checkMockup ? "repeat(3, 30%)" : "repeat(1, 100%)"};

  @media (max-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.checkMockup ? "repeat(2, 45%)" : "repeat(1, 100%)"};
  }

  @media (max-width: 700px) {
    grid-template-columns: ${(props) =>
      props.checkMockup ? "repeat(1, 90%)" : "repeat(1, 100%)"};
  }
`;
