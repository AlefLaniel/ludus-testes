import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    max-height: 100vh;
    width: 100%;
    ::-webkit-scrollbar {
    display: none;
   
  }
  margin-top: 5px;
  margin-bottom: 5px;
`;


export const WrapList = styled.div`
  display: grid;
  column-gap: 39px;
  grid-template-areas: 
      'CD CD CD'
  ;
  height: 50%;
  width: 89vw;
  grid-template-columns: ${(props) =>
    props.checkMockup ? "repeat(3, 30%)" : "repeat(1, 100%)"};

  @media (max-width: 1000px) {
    grid-template-areas: 
      'CD CD'
  ;
    grid-template-columns: ${(props) =>
      props.checkMockup ? "repeat(2, 45%)" : "repeat(1, 100%)"};
  }

  @media (max-width: 700px) {
    grid-template-areas: 
      'CD'
  ;
    grid-template-columns: ${(props) =>
      props.checkMockup ? "repeat(1, 90%)" : "repeat(1, 100%)"};
  }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
`;

