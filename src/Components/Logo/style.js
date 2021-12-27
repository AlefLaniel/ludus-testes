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



export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;