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


  #Content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      margin-top: -24px;
      margin-bottom: 38px;
    }
  }
  
  p {
    word-wrap: break-word;
  }

  @media (max-width: 700px){
   
    #Content{
        width: 70vw;

        h1{
          margin-top: 0;
          font-size: 22px;
        }
      }

  }


`;


export const Loading = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
`;

export const DetailsHistory = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 51.53733528550512vw;
    height: 19.84251968503937vh;
    background: #E5F3ED;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding-left: 28px;
    margin-bottom: 50px;

    p{
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      font-family: var(--font-familyS);
    }

    @media (max-width: 425px){
      width: 71.53733528550512vw;
      padding-left: 18px;
      p{
        font-size: 18px;
      }
    }

    @media (max-width: 360px){
      margin-bottom: 30px;
      p{
        font-size: 16px;
      }
    }

    @media (max-width: 320px){
      p{
        font-size: 14px;
      }
    }
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 11px;
  margin-right: 13px;
`;

export const Edit = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  outline:none;
  background-color: transparent;
  margin-right: 13px;
  cursor: pointer;


`;
export const Delete = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  outline:none;
  background-color: transparent;
  cursor: pointer;

`;

export const ButtonPlus = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  cursor: pointer;

  :hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
`;