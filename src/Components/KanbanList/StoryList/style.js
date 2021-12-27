import styled from "styled-components";

export const Container = styled.div`
  padding: 2vh 2px 0px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  max-height: 85vh;
  -webkit-flex: 0 0 290px;
  -ms-flex: 0 0 290px;
  flex: 0 0 290px;
  width: 10px;
  background: #E5F3ED;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  white-space: normal;
  opacity: 1;
  margin-right: 10px;

  header {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    font-family: var(--font-familyP);
    line-height: 23px;
    color: #58595B;
    padding: 0 8px;
    height: 35px;
    display: flex;
    align-items: center;
  }

  ul {
    padding: 6px 8px;
    height: fit-content;
    margin: 20px 0px;
    max-height: 70vh;
    overflow-y: auto;

    header {
      position: absolute;
      top: -25px;
      left: 15px;
      display: flex;
      justify-content: space-between;
      width: calc(100% - 20px);
      justify-content: flex-end;
      font-size: 16px;

      svg {
        cursor: pointer;
        transform: translateY(-2px);
        color: black !important;
      }
    }

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

export const NewCardButton = styled.button`
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  border-radius: 20px;
  margin: 8px;
  width: calc(100% - 16px);
  transform: translateY(-7px);

  svg {
    font-size: 15px;
  }
`;

export const Card = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  font-weight: 500;
  line-height: 20px;
  overflow-wrap: break-word;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-top: 20px solid ${(props) => props.background};
`;

export const Button = styled.button`
  background: ${(props) => props.color} !important;
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const NewStory = styled.form`
  display: ${(props) => (props.show ? "flex" : "none")};
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 2px 2px 4px 0 rgb(0 2 2);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  text-align: center;

  label {
    font-weight: 700;
  }

  textarea {
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    margin: 6px 0px;
    padding: 6px;
    border: 1px solid black;
    width: 100%;
    background: #fff;
    resize: none;
    ::placeholder {
      color: #aaa;
    }
  }
`;
