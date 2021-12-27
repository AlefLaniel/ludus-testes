import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    ::-webkit-scrollbar {
    display: none;
  }
`;


export const WrapList = styled.div`
  display: grid;
  column-gap: 39px;
  row-gap: 15px;
  grid-template-areas: 
      'CD CD CD'
  ;
  height: 50%;
  width: 79vw;
  margin-left: 12px;
  grid-template-columns: ${(props) =>
    props.checkMockup ? "repeat(3, 30%)" : "repeat(1, 100%)"};
  @media (max-width: 1000px) {
    grid-template-areas: 
      'CD CD'
      
  ;
  margin-left: 35px;
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