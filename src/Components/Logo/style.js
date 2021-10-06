import styled from 'styled-components';


export const Button = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      }
`;



export const Logo = styled.div`
    font-size: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;