import styled from "styled-components";

export const Container = styled.div`
//aplicar essa mesma configuração nas outras telas
   grid-area: CP;
   display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 100vh;
    ::-webkit-scrollbar {
    display: none;
  }
  padding: 7% 7% 0% 7%;
  h1{
    margin-bottom: 5px;
  }
  
  p {

  }

  @media (max-width: 430px){
    max-height: 100%;
  }

  @media (max-width: 425px){
    max-height: 130%;
  }
  
`;

export const Title = styled.h1`
  font-size: 1.0625rem;
  padding: 1.25rem 1.5rem;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px){
    margin-top: 20px;
  }

  @media (max-width: 425px){
    margin-top: 33px;
  }
`;

export const WrapCard = styled.div`
  width: 70.66667%;
  background: rgba(229, 243, 237, 0.8);
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 0;
  font-weight: 300;
  border-radius: 0.375rem;
  position: relative;
  top: -40px;

  @media (max-width: 1024px){
    width: 80%;
  }

  @media (max-width: 768px){
    width: 90%;
  }

  @media (max-width: 425px){
    width: 95.5%;
  }

`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(229, 243, 237, 0.8);
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
`;

export const Info = styled.div`
  padding: 1.25rem 1.5rem;
  width: auto;
  
  #link{
    white-space: nowrap;
    width: 100%;
    overflow: hidden;              /* "overflow" value must be different from "visible" */

    text-overflow:    ellipsis;
  }

  p {
    margin-bottom: 10px;
  }

  @media (max-width: 1024px){
    #link{
      font-size: 16px;
    }
  }

  @media (max-width: 425px){
    #link{
      font-size: 10px;
    }
  }

`;

export const Button = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.color};
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  transition: 0.2s all;

  :hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: ${(props) =>
      props.side ? "translateX(3px)" : "translateY(-1px)"};
    transition: 0.2s all;
  }

  @media (max-width: 425px){
    padding: 9px;
  }
`;

export const WrapButtons = styled.div``;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  font-size: 15px;

  @media (max-width: 425px){
    font-size: 12px;
    width: 75%;
  }
`;

export const Form = styled.form`
  display: ${(props) => (props.active ? "initial" : "none")};
`;


export const ButtonLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;