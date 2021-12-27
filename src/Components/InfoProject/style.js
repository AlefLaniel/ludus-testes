import styled from "styled-components";

export const Container = styled.div`
   grid-area: CP;
   display: flex;
    overflow-y: scroll;
    height: auto;
    flex-direction: column;

    ::-webkit-scrollbar {
    display: none;
  }
  padding: 7%;
  h1{
    margin-bottom: 20px;
  }
  
  p {
    word-wrap: break-word;
  }

  @media (max-width: 700px){
   
      div{
        width: 50vw;
      }

  }
`;


export const Loading = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
`;
