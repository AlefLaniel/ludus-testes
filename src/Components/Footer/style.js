import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #282457;
  min-height: 515px;
  height: auto;
  color: #8c8585;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh 5vw;


  img {
    margin: 15px 0px;
    margin-top: 0;
    height: 8vh;
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 960px) and (max-width: 1024px){
    padding: 3vh 6vw;
    img{
      height: 6vh;
    }
    
  }

  @media (max-width: 768px) {
      height: auto;
      display: flex;
      flex-direction: column;

      img {
        margin: 20px 0;
        height: 5vh;
       }

  }

  @media (max-width: 425px){
    padding: 0 5vw;
    padding-left: 22px;
    height: 70%;

    img {
    margin: 4px 0;
    height: 3vh;
  }
    
  }

  @media (max-width: 375px){
    img{
      margin: 0px 0px;
      
    }
  }

`;

export const Textlanguage = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
    text-align: center;
    font-size: 40px;
    font-family: 'Pacifico', cursive;
    color: white;
    margin-top: 49px;
    }

    @media (max-width: 768px){
      

      h1{
        font-size: 30px;
      }
    }

    @media (max-width: 425px){
      margin-bottom: 20px;
      margin-top: 10px;
      h1{
        text-align: left;
      }
    }

`;

export const Selectlanguage = styled.div`
      display: flex;
      select{
      width: 175px;
      background-color: #282457;
      border: 1px solid #282457;
      color: white;
    }

    img{
      height: 24px;
      width: 24px;
      margin-bottom: 0;
    }

    @media (max-width: 768px){
      img{
        margin-bottom: 20px;
      }
    }

    @media (max-width: 425px){
      img{
        margin-bottom: 10px;
      }
    }
`;

export const Links = styled.div`
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px){
      flex-wrap: wrap;
    }

    @media (max-width: 425px){
      justify-content: left;
      
    }
`;

export const Grouplink = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    color: #0FE8C1;
    font-family: 'Roboto', sans-serif;

    p{
      margin-bottom: 10px;
    }

    a{
      text-decoration: none;
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      text-align: left;
      margin-left: 0;
      line-height: 25px;
    }

    a:hover{
      text-decoration: underline;
    }

    @media (min-width: 960px) and (max-width: 1024px){
      margin-right: 70px;
  }

    @media (max-width: 768px){
      margin-right: 50px;
      
    }
    
    @media (max-width: 425px){
      margin-bottom: 20px;

      p{
      margin-bottom: 5px;
    }

    }
`;

export const Line = styled.div`
    height: 1px;
    width: 90vw;
    align-items: center;
    border-bottom: 1px solid #0FE8C1;
    display: flex;
    margin: 40px 0 0 0;
    text-align: center;

    @media (max-width: 425px){
      margin: 0;
    }

`;

export const Logoredes = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    #ilogo{
      height: 8vh;
    }

    @media (max-width: 425px){
      align-items: flex-start;
      margin-top: 10px;


    }
`;

export const Icons = styled.div`
    display: flex;
    margin-left: 63vw;
    

    @media (min-width: 960px) and (max-width: 1024px){
    margin-left: 49vw;
  
    }
    @media (max-width: 768px){
      margin-left: 40vw;
    }

    @media (max-width: 425px){
      margin-left: 27vw;
    }

`;

export const Iconitem = styled.a`
      margin-left: 21px;

      @media (max-width: 425px){
        margin-left: 12px;
      }
`;

export const Image = styled.img`
    
    margin-bottom: 0;
    
`;

export const Copy = styled.div`
      color: #fff;

      @media (max-width: 425px){
        text-align: center;
        margin-bottom: 50px;
        p{
          font-size: 12px;
        }
      }
`;