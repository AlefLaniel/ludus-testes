import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
`; 


export const Button = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }
`;

export const InitialName = styled.div`
    font-size: 30px;
    font-weight: bold;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
    :hover{
        color: var(--tertiary);
       font-size: 35px;
    }
`;

export const ImageRoom = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }

    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;

        :hover {
            border-radius: 35%;
            cursor: pointer;
        }
    }
`;
