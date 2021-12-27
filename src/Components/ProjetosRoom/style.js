import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        flex-direction: row;
        height: 50%;
        margin-left: -10px;
        color: #DCDADA; 
        cursor: pointer;
        :hover {
            color: white;
        }
`;

export const NameProject = styled.div`
    margin-top: 8%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InitialName = styled.div`
    font-size: 20px;
    font-weight: bold;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.div`
  cursor: pointer;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #7F64AA;

  img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
  }
`;