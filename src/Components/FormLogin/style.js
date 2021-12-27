import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root:first-child {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .MuiFormControl-root {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  background: ${(props) => props.c};
  padding: 10px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0px !important;

  img {
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }

  :hover {
    background: ${(props) => props.ch};
  }
`;

export const WrapButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  button {
    margin: 0px;
    color: black;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 5px 0px;
    font-weight: 700;
  }
`;



export const WrapLink = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  font-size: 14px;
  color: #fff;

  a {
    margin: 0px 6px;
    text-decoration: none;
    

    :hover {
      text-decoration: none;
    }
  }

  p {
    margin: 0px 6px;
    text-decoration: none;
  }
`;

export const Input = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1%;
#name-user{
  font-size: 25px;
  
  
}

input {
  background: #C2D2CA;
  border-radius: 5px;
  border: 1px solid #C2D2CA;
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 1%;
}

@media (min-width: 2560px) and (max-width: 3000px){
  input{
    width: 100%;
  }
}

@media (min-width: 1920px) and (max-width: 2500px){
  input{
    width: 100%;
  }
}

@media (max-width: 768px){
  margin-bottom: 10px;
  #name-user{
    font-size: 20px;

  }

  input{
    width: 100%
  }

}

@media (max-width: 425px){
  #name-user{
    font-size: 18px;
    
  }

  input{
    width: 100%;
  }
}

@media (max-width: 375px){
  input{
    width: 100%;
  }
}

@media (max-width: 360px){

  #name-user{
    font-size: 16px;
  }
  input{
    width: 100%;
  }
}

@media (max-width: 320px){

#name-user{
  font-size: 14px;
}
input{
  width: 100%;
}
}

`;