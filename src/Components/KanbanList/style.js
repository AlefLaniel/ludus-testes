import styled from "styled-components";

export const Container = styled.div`
  padding: 2vh 2px 0px;
  height: fit-content;
  max-height: 85vh;
  flex: 0 0 290px;
  width: 10px;
  background: #E5F3ED;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  white-space: normal;
  opacity: ${({ done }) => (done === true ? 0.6 : 1)};

  & + div {
    margin-left: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    color: white;

    svg {
      color: black !important;
    }

    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      font-family: var(--font-familyP);
      line-height: 23px;

      color: #58595B;
      padding: 0 8px;
    }

    button {
      width: 42px;
      margin: 0 8px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    padding: 6px 8px;
    height: fit-content;
    margin: 20px 0px;
    max-height: 70vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
      background: rgba(9, 30, 66, 0.08);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 10px;
    }

    @media (max-height: 800px) {
      max-height: 58vh;
    }
  }
`;

export const AddCard = styled.button`
  display: ${(props) => (props.done !== true ? "initial" : "none")};
  border: none;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  border-radius: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  width: calc(100% - 16px);
  margin: 0px 8px 10px;

  svg {
    margin-right: 5px;
  }
`;

export const WrapCard = styled.form`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  textarea {
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    padding: 15px;
    border: none;
    width: 100%;
    background: #fff;
    resize: none;
    ::placeholder {
      color: #aaa;
    }
  }
`;

export const WrapButtons = styled.div`
  border-top: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding-top: 10px;
`;

export const Button = styled.button`
  font: 400 13.3333px Arial;
  border-radius: 5px;
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  background: ${(props) => props.color};
`;
