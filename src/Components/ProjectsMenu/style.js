import styled from 'styled-components';


export const Button = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      }
`;

export const InitialName = styled.text`
    font-size: 30px;

    font-weight: bold;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
    :hover{
        color: var(--tertiary);
        border-radius: 35%;
        background-color: white;
        cursor: pointer;
       font-size: 35px;
    }
`;


export const ImageProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;


      img{
        width: 60px;
        height: 60px; 
        border-radius: 50%;

          :hover {
            border-radius: 35%;
            background-color: white;
            cursor: pointer;
            color: var(--tertiary);
          }
      }
`;

export const Selected = styled.div`
  width: 15px;
  height: 5px;
  border-bottom-right-radius: 25%;
  border-bottom-left-radius: 25%;
  background-color: #33B270;
`;

export const SeparadorProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
`;

export const ButtonSeparator = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
`;