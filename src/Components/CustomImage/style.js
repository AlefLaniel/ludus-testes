import styled from "styled-components";

export const ImageModal = styled.figure`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: #C4C4C4;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  cursor: pointer;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 768px){
    width: 150px;
    height: 150px;
    img {
    width: 150px;
    height: 150px;
    
    
  }
  }

  @media (max-width: 320px){
    width: 100px;
    height: 100px;
    margin: 15px 0;
    img {
    width: 100px;
    height: 100px;
    
    
  }
  }
  
`;

