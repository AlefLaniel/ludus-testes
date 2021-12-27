import styled from "styled-components";

// SP - SALAS/PROJETOS
// DP - DETALHESPROJETOS
// TB - TOPINSIDERBAR
// CP - CONTEUDOPROJETO
// NP - NOMEDOPROJETO

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 80px 255px auto;
    grid-template-rows: 70px 89vh;
    grid-template-areas: 
        'SP TR TB'
        'SP DP CP'
    ;
    height: 100vh;

    @media (min-width: 2560px) and (max-width: 3000px){
        grid-template-rows: 70px 95.1vh;
    }

    @media (min-width: 1920px) and (max-width: 2000px){
        grid-template-rows: 70px 93.4vh;
    }

    @media (min-width: 1440px) and (max-width: 1900px){
        grid-template-rows: 70px 92.2vh;
    }
    

    @media (max-width: 1024px){
        grid-template-rows: 70px 90.3vh;
    }

    @media (max-width: 768px){
        grid-template-rows: 70px 93vh;
    }

    @media (max-width: 425px){
        grid-template-rows: 70px 90.5vh;
    }
    
    @media (max-width: 375px){
        grid-template-rows: 70px 101.6vh;
    }

    @media (max-width: 360px){
        grid-template-rows: 70px 103.6vh;
        
    }

    @media (max-width: 320px){
        grid-template-rows: 70px 116.1vh;

    }
`;