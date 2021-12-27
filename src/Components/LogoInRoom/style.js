import styled from "styled-components";

export const Container = styled.div`
   grid-area: CP;
   display: flex;
    overflow-y: scroll;
    height: auto;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    align-items: center;
    ::-webkit-scrollbar {
    display: none;
  }
  padding: 7%;


  div{
    height: 283px;
    width: 400px;
    justify-content: center;
    align-items: center;
  }

  img{
    height: 141.1px;
  }

  h1{
    text-align: left;
    font-size: 30px;
    font-family: var(--font-familyP);
    color: #7F64AA;
    margin-top: 29px;
    }

    .h1-verde{
      margin-top: 0;
      color: #33B270;
    }

    @media (max-width: 768px){
      div{
        margin-left: 30px;
      }
    }

    @media (max-width: 425px){
      div{
        display: none;
        margin: 0;
      }
    }
`;

