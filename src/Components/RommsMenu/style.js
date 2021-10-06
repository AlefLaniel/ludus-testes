import styled from 'styled-components';


export const Button = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  :hover {
      border-radius: 35%;
      background-color: white;
      cursor: pointer;
      color: var(--tertiary);
      }
`;

export const IconBottom = styled.div`
    font-size: 25px;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
    :hover{
        color: var(--tertiary);
       font-size: 30px;
    }
`;

