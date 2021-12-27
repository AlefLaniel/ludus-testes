import styled from "styled-components";

export const PageContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #E5F3ED;
`;

export const Header = styled.header`
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 20px 50px;
  font-size: 25px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7F64AA;
  height: 240px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  position: relative;
  top: -120px;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;

export const WrapChecklist = styled.div`
  background: white;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-right: 10px;
  color: #58595B;
`;

export const WrapItems = styled.div`
  padding: 20px 40px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  justify-content: space-between;

  input {
    :before {
      display: block;
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      border: 2px solid #555555;
      border-radius: 3px;
      background-color: white;
    }
  }
`;

export const Paragraph = styled.p`
  color: #58595B;
  margin-left: 10px;
  text-decoration: ${(props) =>
    props.decoration === "true" ? "line-through" : "none"};
`;

export const WrapListHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 10px 40px;
`;

export const WrapInputItem = styled.form`
  display: ${(props) => {
    return props.display === "true" ? "flex" : "none";
  }};
  margin-top: 15px;

  input {
    padding: 5px;
    width: 100%;
  }

  button {
    color: white;
    transform: translateX(0px);
    background: #5e72e4;
    border: none;
    padding: 0px 10px 0px 15px;
    margin-left: 5px;
    cursor: pointer;
    translate: all 1s;

    :hover {
      transform: translateX(2px);
      translate: all 1s;
    }
  }
`;

export const NewItemButton = styled.button`
  display: ${(props) => (props.display === "true" ? "flex" : "none")};
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  border: none;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;
