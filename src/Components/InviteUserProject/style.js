import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2%;
    border-radius: 12px;
`; 

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      color: var(--tertiary);
      }

  @media (max-width: 500px) {
   width: 40px;
   height: 40px;
  }
`;

export const InitialName = styled.div`
    font-size: 3vh;
    font-weight: bold;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;

`;

export const UserName = styled.text`
    font-size: 2.8vh;
    font-weight: bold;
    margin-left: 7%;
    width: 100%;
`;
export const UserEmail = styled.text`
    font-size: 1.7vh;
    margin-left: 7%;
`;

export const ButtonConv = styled.button`
    height: 4vh;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-left:auto;
    width: 30%;
    text-align: center;
    font-family: var(--font-familyP);
    outline: none;
    border: none;
    background: linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #33B270;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.8vh;
    color: black;
    cursor: pointer;
    :hover{
      background: var(--secondary);
    }
`;

export const ButtonConvidado= styled.button`
    height: 4vh;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-left:auto;
    width: 30%;
    text-align: center;
    font-family: var(--font-familyP);
    outline: none;
    border: none;
    background: var(--secondary);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.8vh;
    color: black;
`;

export const Image = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;

        :hover {
            border-radius: 35%;
            cursor: pointer;
        }
    }

`;