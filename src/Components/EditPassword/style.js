import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

export const Edit = styled.div`
    grid-area: 'SL';
    width: 35%;
    height: auto;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5F3ED;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 580px){
        width: 80%;
}
  @media (max-width: 768px){
    width: 60%;

  }
`;

export const Text = styled.text`
    font-size: 5vh;
    margin-top: 5%;
    margin-bottom: 3%;
`;

export const Input = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 4%;
#name-user{
  font-size: 25px;
  
  
}

input {
  background: #C2D2CA;
  border-radius: 5px;
  border: 1px solid #C2D2CA;
  height: 40px;
  width: 18vw;
  padding: 10px;
  margin-bottom: 1%;
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
  #name-user{
    font-size: 20px;

  }

  input{
    width: 25vw;
  }

}

@media (max-width: 425px){
  #name-user{
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

  #name-user{
    font-size: 16px;
  }
  input{
    width: 40vw;
  }
}

@media (max-width: 320px){

#name-user{
  font-size: 14px;
}
input{
  width: 43.5vw;
}
}

`;


export const Buttons = styled.div`
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