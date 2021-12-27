import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #58595B;
  min-height: 500px;
  height: auto;
  color: #8c8585;
  justify-content: flex-end;
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

      img{
        height: 5.511811023622047vh;
        margin-top: 10px;
        align-self: center;
      }
  }

  @media (max-width: 425px){
    padding: 0 5vw;
    padding-left: 22px;
    min-height: 405px;

    img {
    height: 6vh;
  }
    
  }

  @media (max-width: 375px){
    img{
      height: 5vh;
      margin: 3px 0px;
      
    }
  }

  @media (max-width: 320px){
    img{
      height: 5.5vh;
      margin: 5px 0px;
      
    }
  }
`;

export const TexteContact = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px){
    flex-direction: column;
  }

`;

export const Textlanguage = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 420px;
    h1{
    text-align: left;
    align-self: flex-start;
    font-size: 40px;
    font-family: var(--font-familyP);
    color: white;
    margin-top: 49px;
    }

    .h1-verde{
      margin-top: 0;
      color: #33B270;
      margin-bottom: 90px;
    }

    @media (max-width: 1024px){
      margin-right: 200px;
    }

    @media (max-width: 768px){
      margin-right: 120px;

      h1{
        font-size: 30px;
      }
    }

    @media (max-width: 425px){
      margin-bottom: 20px;
      margin-top: 30px;
      h1{
        text-align: left;
        font-size: 20px;
      }

      .h1-verde{
        margin-bottom: 50px;
      }
    }

`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  h3{
    font-size: 40;
    text-align: center;
    color: white;
    margin-bottom: 20px;
    }

    h4{
      font-size: 40;
      color: white;
      font-family: var(--font-familyS);
      font-weight: normal;
      margin-bottom: 20px;
    }
`;

export const Top = styled.div`
align-self: flex-end;
margin-right: 10px;
  a{
    text-decoration: none;
    color: #fff;
  }
`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #0FE8C1;
    display: flex;
    margin: 10px 0 0 0;
    text-align: center;
    margin-bottom: 5px;
    @media (max-width: 425px){
      margin: 0;
      margin-top: 10px;
    }

`;

export const Logoredes = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    #ilogo{
      height: 8vh;
    }

    @media (max-width: 768px){
      margin-top: 0px;
    }

    @media (max-width: 425px){
      align-items: flex-start;
    }
`;

export const Icons = styled.div`
    display: flex;
    margin-left: 65vw;
    

    @media (min-width: 960px) and (max-width: 1024px){
    margin-left: 57vw;
  
    }
    @media (max-width: 768px){
      margin-left: 53vw;
    }

    @media (max-width: 425px){
      margin-top: 20px;
      margin-left: 20vw;
      
    }

    @media (max-width: 375px){
      margin-top: 12px;
    }

`;

export const Iconitem = styled.a`
      margin-left: 21px;

      @media (max-width: 768px){
        margin-left: 12px;
      }

      @media (max-width: 425px){
        margin-left: 12px;
      }
`;

export const Image = styled.img`
    
    margin-bottom: 0;
    
`;

export const Copy = styled.div`
      color: #fff;

      @media (max-width: 768px){
        p{
          font-size: 14px;
        }
    }

      @media (max-width: 425px){
        justify-content: flex-end;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 100px;
        p{
          font-size: 12px;
        }
      }
`;