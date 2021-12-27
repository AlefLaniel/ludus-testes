import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;

  @media (max-width: 500px){
    margin-bottom: 10vh;
  }

  @media (max-width: 360px){
    margin-bottom: 5vh;
  }
`;

export const WrapForm = styled.form`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  display: flex;
  flex-direction: column;
  padding: 4vh 2vw;
  background: #E5F3ED;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
 


  @media (max-width: 360px){
    width: 90%;
  }

  h1 {
    align-self: center;
    color: black;
    font-size: 25px;
    margin-bottom: 20px;
    font-family: var(--font-familyP);
  }

  p {
    
    font-weight: 600;
    font-size: 20px;
    align-self: center;
    margin: 5px 0px;
    font-family: var(--font-familyP);
    color: black;
  }

  button {
    height: 50px;
    display: flex;
    width: fit-content;
    align-self: center;
    margin: 30px 0px 0px;
    padding: 10px 39px;
    text-align: center;
    font-family: var(--font-familyP);
    outline: none;
    border: none;
    background: linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #33B270;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: white;
    cursor: pointer;
    :hover{
      background: var(--secondary);
    }
  }

  button:active {
    box-shadow: none;
  }

  #tagroom{
    margin-bottom: 10px;
    font-family: var(--font-familyS);
  }

  #name-room{
    font-family: var(--font-familyS);
  }
`;

export const WrapInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    margin-right: 20px;
    align-self: initial;
    font-weight: normal;
    font-family: var(--font-familyP);
  }



  @media (max-width: 500px) {
    flex-direction: column;

    p{
      
      margin-left: 20px;
  }
}

  @media (max-width: 340px){
    p{
      align-self: flex-start;
      margin-left: 28px;
    }

    #tagroom{
      margin-left: 38px;
      
    }
  }

`;

export const WrapCheckBox = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 0px;

  label{

    font-family: 'Poppins', sans-serif;
    color: black;
    margin-right: 10px;
  }

  input {
    width: 20px;
    height: 13px;
    margin-top: 0;
  }

  input:active {
    border: 10px solid black;
  }
`;

export const TextInput = styled.input`
  outline: none;
  margin: 5px 0px;
  padding: 8px 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;


`;

export const ImageRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  background: linear-gradient(100deg, rgba(200, 175, 249, 0.5), #C2D2CA);
  border-radius: 50%;
  img{
    width:  90px;
    height: 70px;
  }

  @media (max-width: 425px){
    margin-left: 0px;
  }
`;
