import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #7F64AA;
  border-bottom: 1px solid #7F64AA;
  height: 80px;
  top: 0;
  z-index: 2;
  position: fixed;
  

`;

export const WrapLeftMenu = styled.div`
  display: flex;
  height: 100%;
`;

export const Image = styled.img`
  height: 9.448818897637794vh;
  padding: 7px 1.5vw 0vw 5vw;


  @media (min-width: 1920px) and (max-width: 2000px){
    height: 7vh;
  }

  @media (min-width: 960px) and (max-width: 1024px){
    padding-left: 4vw;
    height: 6vh;
  }


  @media (max-width: 768px) {
    height: 5.511811023622047vh;
    padding: 0px 5vw;
  }

  @media (max-width: 425px){

    
    
  }

  @media (max-width: 375px){
    margin-bottom: 10px;
    
  }

`;

export const NavBar = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 12vw;

  a{
    color: white;
  }

  a:hover {
    color: #33B270;
  }

  @media (min-width: 1920px) and (max-width: 2000px){
    margin-left: 21vw;
  }

  @media (min-width: 960px) and (max-width: 1024px){
    margin-left: 6vw;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.enable ? "flex" : "none")};
    flex-direction: column;
    width: 100vw;
    position: fixed;
    top: 10vh;
    z-index: 1;
    padding: 0;
    width: 100%;
    
    a{
      color: #33B270;
    }

    a:hover {
      color: #7F64AA;
    }
  }

  

`;

export const NavBarItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border-radius: 0;
  color: white;
  font-family: var(--font-familyS);
  font-size: 17px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #33B270;
  }

  @media (max-width: 768px) {
    color: rgb(4, 140, 108);
    background: white;
    border: 1px solid black;
    border-top: none;
    height: 5vw;
    padding: 20px;
    width: 100%;
    justify-content: center;
  }
`;

export const HamburgerStyle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: initial;
    position: fixed;
    right: 20px;
    top: 2.9vh;
    padding: 0 2.5vw;
    
  }

  @media (max-height: 700px){
    top: 3.5vh;
    
  }

  @media (max-height: 600px){
    top: 4vh;
    right: 15px;
  }

  @media (max-width: 425px){
    padding: 0;
    margin-right: 0;
    margin-top: 1vh;
  }

  @media (max-width: 375px){
    margin-top: 0.5vh;
    
  }
`;

export const WrapSigns = styled.div`
  padding-right: 7vw;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 960px) and (max-width: 1024px){
    padding-right: 6vw;
  }

  @media (max-width: 768px){
    
    margin-right: 6vw;
  }

  @media (max-width: 425px){
   margin-right: 8vw;
   
  }

  @media (max-width: 375px){
    margin-bottom: 10px;
    
  }

`;

export const Login = styled.a`

  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  background-color: #33B270;
  border-color: #3c85ff;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(0px);
  padding: 10px;
  border-radius: 40px;
  padding: 10px 25px;
  cursor: pointer;
  transition: 0.5s all;

  :hover {
    box-shadow: 0 7px 20px rgba(222, 223, 204, 0.1);
    transform: translateY(-1px);
  }



  @media (max-width: 768px){
    font-size: 16px;
    
    padding: 8px 20px;
  }



`;

