import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

 #input{
    :hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: ${(props) =>
      props.side ? "translateX(3px)" : "translateY(-1px)"};
    transition: 0.2s all;
  }
  }
`;



export const Input = styled.div`
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.4), rgba(229, 243, 237, 0.4)), #33B270;
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  width: 20%;
  height: 35%;
  display: flex;
  align-items: center;
  text-align: -webkit-center;

  @media (max-width: 425px){
    padding: 15px 20px;
    width: 30%;
    height: 30%;
  }


`;
