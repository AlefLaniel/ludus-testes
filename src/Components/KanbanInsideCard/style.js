import styled from "styled-components";

export const ListItem = styled.button`
  background: ${(props) => (props.name === "true" ? "#58595B" : "transparent")};
  border: none;
  border-radius: 5px;
  display: flex;
  padding: 10px 30px 10px 10px;
  font-size: 17px;
  font-weight: 300;
  align-items: center;
  margin: 10px 0px;
  width: 200px;
  cursor: pointer;
  color: ${(props) => (props.name === "true" ? "white" : "white")};

  :hover {
    background: #58595B;
    color: white;
  }

  svg {
    margin-right: 10px;
  }

  @media(max-width: 425px){
    width: 30vw;
  }
`;

export const List = styled.nav`
  padding: 10px;
  background: rgba(127, 100, 170, 0.5);

  @media(max-width: 425px){
    width: 40vw;
  }
`;

export const WrapContent = styled.div`
  width: 100vw;
  display: flex;
`;

/* GERAL PAGE*/
export const PageContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #E5F3ED;
`;

export const Header = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 20px 50px;
  font-size: 25px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7F64AA;
  height: 350px;

  .title-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    transform: none;
    font-size: 25px;
    width: 98%;
    padding: 10px;
    resize: none;
    left: -10px;
    position: relative;
    color: #fff;
    margin-bottom: 5px;
  }

  .title-input:focus {
    background: #00a1ff;
    border: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 5px;
    transform: translateY(-1px) translateX(-1px);
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0px;
  }

  @media (max-width: 768px){
    height: 50vh;
  }

  @media (max-width: 425px){
    height: 65vh;
    padding: 10px 20px;
    .title-input {
      font-size: 18px;
    }
  }

  @media (max-width: 360px){
    height: 62vh;
  }

`;

export const Body = styled.div`
  display: flex;
  padding: 20px 50px;
  position: relative;
  top: -100px;

  @media (max-width: 768px){
    margin-top: 50px;
    flex-direction: column;
  }

  @media (max-width: 425px){
    padding: 10px 35px;
  }
`;

export const WrapCards = styled.div`
  background: ${(props) => props.color};
  border-radius: 5px;
  margin-right: 20px;
  width: 36.3vw;
  min-height: 30vh;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;

  h3 {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 300;
    align-self: center;
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: rgba(9, 30, 66, 0.08);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-
    radius: 50px;
  }

  @media (max-width: 1024px){
    width: 32.3vw;
  }

  @media (max-width: 768px){
    width: 50.3vw;
    margin-bottom: 30px;
  }

  @media (max-width: 425px){
    width: 63.5vw;
    margin-right: 0;
  }

`;

export const Title = styled.div`
  color: ${(props) => props.color};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }

  svg {
    margin-left: 20px;
    margin-right: 10px;
  }

  button {
    background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;;
    margin-right: 20px;
    height: fit-content;
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    color: #fff;
    font-size: 0.85rem;

    :hover {
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
        0 3px 6px rgba(0, 0, 0, 0.08);
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 425px){

    button{
      font-size: 12px;
    }
    
    p{
      margin-right: 5px;
      font-size: 18px;
    }
  }

  @media (max-width: 375px){
    p{
      font-size: 15px;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row !important;
`;

export const WrapMembers = styled.div`
  display: flex;
  flex-direction: row !important;

  img {
    width: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 5em;
    background: white;
    margin-right: 2px;
    object-fit: cover;
  }

`;

export const Label = styled.div`
  border-radius: 3px;
  padding: 6px 10px;
  font-size: 14px;
  margin-right: 10px;
  background: ${(props) => props.color};

  @media (max-width: 768px){
    margin-bottom: 5px;
  }

  @media (max-width: 425px){
    padding: 3px 5px;
    font-size: 12px;
    text-align: center;
  }
`;

export const WrapCloseIcon = styled.div`
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  position: relative;
  top: 6px;
  height: fit-content;
  padding: 5px 9px;
  border-radius: 5em;
  cursor: pointer;

  :hover {
    background: #19224d;
  }
`;

export const Comment = styled.div`
  padding: 15px 0px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);

  div {
    display: flex;

    img {
      width: 45px;
      height: 45px;
      border-radius: 5em;
      border: 1px solid black;
    }
  }

  h4 {
    margin-left: 66px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    margin-left: 67px;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

export const WrapComments = styled.div`
  margin: 0px 20px;
`;

export const NewComment = styled.form`
  display: ${(props) => (props.display === "true" ? "flex" : "none")};
  padding: 20px 0px 10px;

  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
  }

  button {
    padding: 0px 18px 0px 20px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #7F64AA;
    color: #fff;

    :hover {
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
        0 3px 6px rgba(0, 0, 0, 0.08);
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
    }
  }
`;

export const WrapActivity = styled.div`
  margin: 0px 20px;
`;

export const Activity = styled.div`
  padding: 15px 0px;
  color: white;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.5);

  div {
    display: flex;
    margin-bottom: 10px;

    span {
      background: #b0eed3;
      padding: 7px 10px;
      border-radius: 5em;
    }

    svg {
      font-size: 15px;
      color: #1aae6f;
    }
  }

  p {
    margin-left: 56px;
    font-weight: 300;
  }

  h4 {
    margin-left: 55px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

export const WrapLabels = styled.div`
  display: flex;
  margin-right: 5vw;

  #itemstags{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #historyuser{
    display: flex;
    flex-direction: row;
  }
  @media(max-width: 768px){
    margin-right: 2vw;
    width: 16vw;

    #itemstags,
    #historyuser{
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 5px;
    }

    #calendar{
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 425px){
    flex-direction: column;
    margin-right: 5vw;
    h1{
      font-size: 18px;
      text-align: justify;
    }
  }
`;

export const AddButton = styled.button`
  padding: 0px 9px;
  border: none;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #33B270;
  color: white;
  cursor: pointer;

  :hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }

`;

export const AddButtonC = styled(AddButton)`
  border-radius: 5px;

  @media(max-width: 425px){
    width: 20vw;
    height: auto;
  }
`;