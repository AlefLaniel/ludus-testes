import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.0625rem;
  padding: 1.25rem 1.5rem;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapCard = styled.div`
  width: 66.66667%;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  border: 0;
  font-weight: 300;
  border-radius: 0.375rem;
  position: relative;
  top: -40px;
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: #fff;
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
`;

export const Info = styled.div`
  padding: 1.25rem 1.5rem;

  p {
    margin-bottom: 10px;
  }
`;

export const ProjectHeader = styled.div`
  width: 100%;
  padding: 30px 30px 60px;
  color: white;
  background: #11cdef;

  h1 {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin: 5px 10px;
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
`;

export const WrapButtons = styled.div``;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  font-size: 15px;
`;

export const Form = styled.form`
  display: ${(props) => (props.active ? "initial" : "none")};
`;
