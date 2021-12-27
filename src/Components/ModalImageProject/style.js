import styled from "styled-components";

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

@media (max-width: 425px){
  h1{
    font-size: 18px;
  }
}


@media (max-width: 320px){
  h1{
    font-size: 14px;
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
  #name-room{
    font-size: 18px;
    
  }

  input{
    width: 43vw;
  }
}

@media (max-width: 375px){
  input{
    width: 42vw;
  }
}

@media (max-width: 360px){

  #name-room{
    font-size: 16px;
  }
  input{
    width: 40vw;
  }
}

@media (max-width: 320px){

#name-room{
  font-size: 14px;
}
input{
  width: 43.5vw;
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