import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }

    #erroupload{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      p{
        font-size: 10px;
        color: red;
      }
    }

  }

  a:hover{
      box-shadow: rgba(0, 0, 0, 0.8) 0px 18px 50px -10px;
    }

  @media (max-width: 320px){
    li{
      flex-direction: column;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    strong{
      margin-left: 10px;
    }

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #E14444;
        margin-left: 10px;
        cursor: pointer;
        padding: 3px 10px;
      }

      button:hover{
        color: #fff;
        background-color: #E14444;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }

    }

    @media (max-width: 425px){
      strong {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 320px){
    flex-direction: column;
  }
`;




