import styled from "styled-components";

export const CardModel = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  padding: 10px 0px 30px;
  flex-direction: column;
  align-items: center;
  background: white;
  background: #E5F3ED;
  border-radius: 7px;
  box-shadow: 0px 5px 7px #c2c2c2;

  a {
    background: linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #33B270;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-size: 20px;
    color: white;
    text-decoration: none;
    padding: 10px 30px;
    margin-bottom: 20px;
    font-family: var(--font-familyP);
    :hover{
      background: var(--secondary);
    }
  }

  @media (max-width: 1024px){
    margin-left: 22px;
  }

  @media (max-width: 1000px) {
    margin: 39px 0 39px 19px;
  }


  @media (max-width: 375px){
    margin-left: 15px;
  }

  @media (max-width: 320px){
    margin-left: 14.5px;
    a{
      font-size: 18px;
      padding: 5px 15px;
    }
  }
  
`;

export const Projects = styled.div`
  color: black;
  margin-bottom: 20px;

  h3 {
    font-family: var(--font-familyP);
    color: black;
  }

  @media (max-width: 320px){
    h3{
      font-size: 18px;
    }
  }
`;

export const WrapHeader = styled.div`
  width: 90%;
  position: relative;
  text-align: center;
  justify-content: center;

  h2 {
    font-family: var(--font-familyP);
    color: black;
  }

  @media (max-width: 320px){
    h2{
      font-size: 18px;
    }
  }
`;

export const Author = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: black;

  @media (max-width: 320px){
    font-size: 14px;
  }
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 128px;
  background: #E5F3ED;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 12px;
  width: 74px;
  height: 74px;
  img {
    width: 74px;
    height: 74px;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (min-width: 2560px) and (max-width: 3000px){
    margin-left: 275px;
  }

  @media (min-width: 1920px) and (max-width: 2500px){
    margin-left: 195px;
  }

  @media (min-width: 1440px) and (max-width: 1900px){
    margin-left: 138px;
  }

  @media (max-width: 1024px){
    margin-left: 88px;
  }

  @media (max-width: 768px){
    margin-left: 102px;
  }

  @media (max-width: 425px){
    margin-left: 118px;
  }

  @media (max-width: 420px){
    margin-left: 106px;
  }

  @media (min-width: 400px) and (max-width: 414px){
    margin-left: 112px;
  }

  @media (max-width: 375px){
    margin-left: 98px;
  }

  @media (max-width: 360px){
    margin-left: 95px;
  }

  @media (max-width: 320px){
    margin-left: 60px;
  }

`;

export const Edit = styled.button`
  width: 18px;
  height: 18px;
  background: rgba(229, 243, 237, 0.8);
  border-top-left-radius: 25%;
  border-bottom-right-radius: 12px;
 
  position: absolute;
  align-self: flex-end;
  
  margin-top: 55px;
  border: none;
  cursor: pointer;

`;


export const ModalInfo = styled.div`
  
  width: 40vw;
  height: auto;

  span{
    text-align: center;
    margin-bottom: 30px;
    font-size: 12px;
  }

  @media (min-width: 1441px) and (max-width: 2560px){
    width: 28vw;
  }

  @media (max-width: 1024px){
    width: 48vw;
  }

  @media (max-width: 768px){
    width: 55vw;
  }

  @media (max-width: 500px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px){
    width: 95vw;
  }

  @media (max-width: 320px){
    span{
      font-size: 10px;
    }
  }

`;

export const Header = styled.div`
  display: flex;
  text-align: center;
  padding: 20px;
  height: 50px;
  color: white;
  background: var(--primary);
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  
  h1{
    font-size: 25px;
  }

  @media (max-width: 768px){
    h1{
      font-size: 20px;
    }
  }

  @media (max-width: 320px){
    h1{
      font-size: 16px;
    }
  }
`;

export const InfoCapsule = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NameRoom = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 35px 20px;
  #name-room{
    font-size: 25px;
    margin-right: 20px;
  }

  input {
    background: #C2D2CA;
    border-radius: 5px;
    border: 1px solid #C2D2CA;
    height: 40px;
    width: 18vw;
    padding: 10px;
  }

  @media (min-width: 2560px) and (max-width: 3000px){
    input{
      width: 10vw;
    }
  }

  @media (min-width: 1920px) and (max-width: 2500px){
    input{
      width: 9.5vw;
    }
  }

  @media (max-width: 768px){
    margin-bottom: 40px;
    #name-room{
      font-size: 20px;
      margin-right: 10px;
    }

    input{
      width: 22vw;
    }

  }

  @media (max-width: 425px){
    input{
      width: 45vw;
    }
  }

  @media (max-width: 320px){
    #name-room{
      font-size: 16px;
    }
  }

`;

export const ButtonsModal = styled.div`
  display: flex;
  margin: 0 20px 40px 20px;
  

`;

export const ButtonSave = styled.button`
    justify-content: center;
    background: transparent;
    border-radius: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 20px;


    font-family: var(--font-familyS);
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    color: #006A58;
    /* identical to box height */

    :hover{
      border: 1px solid #006A58;
      background: #006A58;
      color: #FFF;
      transition: all linear 0.3s;
    }

    @media (max-width: 768px){
      font-size: 20px;
    }

    @media (max-width: 320px){
      font-size: 16px;
    }
    

`;

export const ButtonRemove = styled(ButtonSave)`
    margin-right: 35px;
    border: none;
    color: #E14444;

    :hover{
      border: 1px solid #E14444;
      background: #E14444;
      color: #FFF;
    }

    @media (max-width: 375px){
      margin-right: 22px;
    }

`;