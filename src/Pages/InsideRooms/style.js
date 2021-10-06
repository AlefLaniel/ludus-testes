import styled from "styled-components";

// SP - SALAS/PROJETOS
// DP - DETALHESPROJETOS
// TB - TOPINSIDERBAR
// CP - CONTEUDOPROJETO
// NP - NOMEDOPROJETO

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 70px 220px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
        'SP TP TB'
        'SP DP CP'
    ;
    height: 100vh;
`;