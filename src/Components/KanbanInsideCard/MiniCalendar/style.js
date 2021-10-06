import styled from "styled-components";

export const WrapDateTime = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  width: 300px;
  left: 25.1vw;
  position: absolute;
  top: 110px;
  justify-content: center;
  border: 1px solid black;
  border-radius: 7px;

  abbr {
    color: black;
  }

  .DayPicker-Day:hover {
    background-color: #03b9ff !important;
    color: white;
  }

  .DayPicker-Day.DayPicker-Day--outside:hover {
    background-color: transparent !important;
  }

  .DayPicker-Day.DayPicker-Day--selected {
    color: #ffffff;
    font-weight: 700;
    background: #5e72e4;
  }

  .DayPicker-Day.DayPicker-Day--selected:hover {
    background-color: #5e72e4 !important;
  }
`;

export const WrapButtons = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border-top: 1px solid black;
  width: 240px;
  padding-top: 10px;
`;

export const Button = styled.button`
  background: ${(props) => props.color};
  padding: 7px 10px;
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;

  :hover {
    background: ${(props) => props.hoverColor};
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    cursor: pointer;
  }
`;
