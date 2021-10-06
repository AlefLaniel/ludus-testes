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
  justify-content: flex-end;
  align-items: flex-end;
  height: 99.5vh;
  width: 100%;
  background-color: #048C6C;

  #img1, #img2 {
    height: 40.94vh;
    width: 19.03vw;
    
  }

  @media (min-width: 960px) and (max-width: 1024px){
    #img1, #img2 {
    height: 40.94vh;
    width: 25.03vw;
    object-fit: contain;
    margin-bottom: -80px;
  }
  }



  @media (max-width: 768px){
    height: 99.7vh;

    #img2 {
    height: 40.94vh;
    width: 39.03vw;
    object-fit: contain;
    margin-bottom: -55px;
  }
  #img1{
    display: none;
  }

  }

  @media (max-width: 425px){
    height: 99.7vh;
    flex-direction: column-reverse;
    align-items: flex-start;
    #img1 {
    margin-top: 90px;  
    display: inline;
    width: 260px;
    height: 278px;
    
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
  align-self: flex-start;
  margin-top: 200px;
  width: 60vw;
  margin-right: 30px;

  h1{
    text-align: center;
    font-size: 40px;
    font-family: 'Pacifico', cursive;
    color: white;
    margin-bottom: 20px;
  }

  p{
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: white;
  }

  @media (min-width: 960px) and (max-width: 1024px){
    margin-top: 350px;
  }

  @media (max-width: 768px){
    margin-top: 400px;

    h1, p{
      text-align: left;
      padding-left: 5vw;
    }
  }


  @media (max-width: 425px){
    margin-top: 180px;
    
    
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
    width: 704px;
    object-fit: contain;
  }

  @media (min-width: 960px) and (max-width: 1024px){
    padding:  0 70px;
  }

  img{
    height: 62.36vh;
    width: 51.53vw;
    margin-bottom: 107px;
    margin-top: 135px;
  }

  @media (max-width: 768px){
    padding: 0 4vw;
    
    img{
      margin-top: 35px;
      width: 427px;
      height: 304px;
    }
  }
 
  @media (max-width: 425px){
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 6vw;
    height: 607px;
    img{
      width: 327px;
      height: 204px;
    }
  }
`;

export const Text2 = styled.div`
  h1{
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    margin-left: 205px;
    margin-bottom: 30px;
  }


  p{
    text-align: left;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-left: 205px;
  }

  @media (max-width: 768px){

    h1, p{
      margin-left: 50px;
    }

    h1 br, p br{
      display: none
    }

    @media (max-width: 425px){
      h1 {
        font-size: 20px
      }

      h1, p{
        margin-left: 0;
      }

      p{
        font-size:16px;
      }
    }
  }


  
`;

export const Section3 = styled(Section2)`
  background-color: #DEDFCC;
  flex-direction: row-reverse;

  img{
    width:  91.968vh;
    height: 27.01vw;
    margin-left: 9.28vw;
  }

  @media (max-width: 768px){
    
    img{
      width:  91.968vh;
      height: 30.01vw;
      margin: 80px;
    }

    @media (max-width: 425px){

      img{
        width: 327px;
        height: 204px;
      }
    }
  }

  @media (max-width: 425px){
    flex-direction: column;
    img{
      height: 304px;
      margin: 0;
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

  @media (max-width: 768){

    img{
      width: 327px;
      height: 204px;
    }
  }

  @media (max-width: 425px){
    img{
      margin-bottom: 20px;
    }
  }

`;

export const Text4 = styled(Text2)`
  
`;