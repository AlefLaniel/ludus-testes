import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 75vh;
  height: auto;
  align-items: center;
  flex-direction: column;
  


`;

export const Section1 = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 99.5vh;
  width: 100%;
  background-color: #7F64AA;

  #img1, #img2 {
    height: 32.10236220472441vh;
    align-self: flex-end;
    
  }

  @media (min-width: 1440px) and (max-width: 2500px){
    #img1, #img2 {
    height: 22.10236220472441vh;
    }
  }

  @media (max-width: 1024px){
    #img1, #img2{
      height: 20.10vh;
    }
  }



  @media (max-width: 768px){
  #img1{
    display: none;
  }

  }

  @media (max-width: 425px){
    height: 100%;
    flex-direction: column-reverse;
    align-items: flex-start;

    #img1 { 
    display: block; 
    
  }
    #img2{
    display: none;
  }
  }
  


`;

export const Text1 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap');

  display: flex;
  flex-direction: column;
  align-self: center;
  width: 60vw;

  h1{
    text-align: center;
    font-size: 40px;
    font-family: var(--font-familyP);
    color: white;
    margin-bottom: 56px;
  }

  p{
    text-align: center;
    font-size: 20px;
    font-family: var(--font-familyS);
    color: white;
  }

  @media (max-width: 768px){
    margin-top: 50px;

    h1, p{
      text-align: left;
      padding: 0 5vw;
    }
  }


  @media (max-width: 425px){
    margin-top: 180px;
    align-self: flex-start;
    h1{
      font-size: 24px;
    }

    p{
      font-size: 16px;
    }

    h1, p{
      
      padding-left: 6vw;
    }
  }

  @media (max-width: 375px){
    margin-top: 100px;
    margin-bottom: 29px;
  }
`;

export const Section2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100.47vh;
  width: 100%;
  background-color: #FFF;
  padding: 0 5vw;

  img{
    height: 71.02362204724409vh;
  }

  @media (min-width: 1440px) and (max-width: 2500px){
    img{
    height: 41.02362204724409vh;
  }
  }

  @media (max-width: 1024px){
    padding: 0 6vw;
    img{
      height: 51.02362204724409vh;
    }
  }

  @media (max-width: 768px){
    img{
      height: 31.02362204724409vh;
    }
  }
 
  @media (max-width: 425px){
    flex-direction: column;
    padding: 0 6vw;
    height: 600px;

    img{
      margin: 0;
      margin-bottom: 35px;
    }
  }
`;

export const Text2 = styled.div`
  h1{
    text-align: left;
    font-family: var(--font-familyP);
    font-size: 40px;
    margin-left: 205px;
    margin-bottom: 30px;
  }


  p{
    text-align: left;
    font-family: var(--font-familyS);
    font-size: 20px;
    margin-left: 205px;
  }

  @media (max-width: 1024px){
    h1{
      font-size: 30px;
    }
  }

  @media (max-width: 768px){
    h1{
      font-size: 25px;
      margin-left: 55px;
      text-align: center;
    }

    p{
      font-size: 18px;
      margin-left: 55px;
      text-align: center;
    }
  }

  @media (max-width: 425px){
    h1, p{
      margin-left: 0;
      text-align: center;
    }
  }

`;

export const Section3 = styled(Section2)`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #C2D2CA;
  flex-direction: row-reverse;
  
  img{
    margin-left: 205px;
  }

  @media (max-width: 1024px){
    padding: 0 6vw;
    img{
    margin-left: 200px;
  }
  }

    @media (max-width: 768px){
      img{
        margin-left: 55px;
      }
    }


  @media (max-width: 425px){
    flex-direction: column;

    img{
      margin: 0;
      margin-bottom: 35px;
    }
  }

`;

export const Text3 = styled(Text2)`
  

  h1, p{
    margin-left: 0;
  }

  @media (max-width: 768px){

  }

`;

export const Section4 = styled(Section2)`

  @media (max-width: 768px){
    padding: 0 6vw;
  }

  @media (max-width: 425px){
    img{
      margin-bottom: 20px;
    }
  }

`;

export const Text4 = styled(Text2)`
  @media (max-width: 1024px){
    h1,p{
      margin-left: 150px;
    }
  }

  @media (max-width: 768px){
    h1,p{
      margin-left: 55px;
    }
  }

  @media (max-width: 425px){
    h1,p{
      margin-left: 0;
    }
  }
`;

export const Section5 = styled(Section3)`
  img{
    height: 71.02362204724409vh;
    align-self: flex-end;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) and (max-width: 2500px){
    img{
    height: 61.02362204724409vh;
  }
  }

  @media (max-width: 1024px){
    height: 90.47vh;
    padding: 0 6vw;
    img{
      height: 51.02362204724409vh;
    }
  }

  @media (max-width: 768px){
    img{
      height: 41.02362204724409vh;
      align-self: center;
    }
  }

  @media (max-width: 425px){
    img{
      align-self: center;
      height: 38.02362204724409vh;
    }
  }

`;

export const Text5 = styled(Text3)`
  @media (max-width: 1024px){
    h1{
      margin-top: 100px;
    }
  }

  @media (max-width: 768px){
    h1{
      margin-top: 0px;
    }
  }

  @media (max-width: 425px){
    h1{
      margin-top: 0;
    }
  }
`;

export const Section6 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40.31496062992126vh;

  h1{
    margin-bottom: 43px;
    font-size: 30px;
  }

  @media (max-width: 768px){
      h1{
        font-size: 30px;
      }
    }

    @media (max-width: 425px){
    h1{
      text-align: center;
      font-size: 24px;
    }
  }
`;

export const Registration = styled.button`
  background: #33B270;
  border-radius: 40px;
  font-size: 30px;
  border: 1px solid #33B270;
  font-family: var(--font-familyP);
  color: white;
  padding: 13px 46px;

    @media (max-width: 768px){
      font-size: 30px;
    }

    @media (max-width: 425px){
      font-size: 24px;
  }
`;

