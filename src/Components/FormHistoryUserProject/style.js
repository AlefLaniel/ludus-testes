import styled from "styled-components";

export const Container = styled.div`
   grid-area: CP;
   display: flex;
    overflow-y: scroll;
    height: auto;
    flex-direction: column;
    margin-left: 5.856515373352855vw;
    ::-webkit-scrollbar {
    display: none;
  }
  padding: 7%;

  @media (max-width: 1024px){
    margin-left: 1.5vw;
  } 

  @media (max-width: 425px){
    margin-left: 1vw;
  }

`;


export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54.904831625183014vw;
  height: 101.25984251968504vh;
  background: #E5F3ED;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  h1{
    font-size: 36px;
    margin-bottom: 34px;
    margin-top: 27px;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  span{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    font-family: var(--font-familyS);
    text-transform: uppercase;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.5);
  }

  input{
    width:  39.751098096632504vw;
    height: 8.503937007874017vh;
    background: #C2D2CA;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 34px;
  }

  textarea{
    width:  39.751098096632504vw;
    height: 16.37795275590551vh;
    background: #C2D2CA;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 34px;
  }

  button{
    width: 23.64568081991215vw;
    height: 8.503937007874017vh;
    background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 30px;
    color: white;
    border: none;
    text-align: center;
  }

  form [type="submit"] {
    display: block;
    margin: auto;
    margin-bottom: 34px;
    cursor: pointer;
  }

  @media (max-width: 768px){
    width: 72.904831625183014vw;

    input{
      width:  59.751098096632504vw;
      height: 5.503937007874017vh;
    }

    textarea{
      width:  59.751098096632504vw;
    }

    button{
      width: 33.64568081991215vw;
    }
  }

  @media (max-width: 425px){
    width: 68.904831625183014vw;

    h1{
      font-size: 25px;
    }

    span{
      font-size: 14px;
    }

    input{
      width:  59.751098096632504vw;
      height: 5.503937007874017vh;
    }

    textarea{
      width:  59.751098096632504vw;
    }

    button{
      width: 33.64568081991215vw;
      font-size: 16px;
    }
  }

  @media (max-width: 375px){
    width: 70.904831625183014vw;

    input{
      width:  65.751098096632504vw;
      height: 5.503937007874017vh;
    }

    textarea{
      width:  65.751098096632504vw;
    }
  }

  @media (max-width: 360px){
    span{
      font-size: 12px;
    }
  }

  @media (max-width: 320px){
    width: 66.904831625183014vw;
    h1{
      font-size: 18px;
    }

    input{
      width:  64.751098096632504vw;
      height: 5.503937007874017vh;
    }

    textarea{
      width:  64.751098096632504vw;
    }
  }
`;