import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => (props.color ? props.color : "rgb(25, 230, 140)")};
`;


// SP - SALAS/PROJETOS
// TB - TOPINSIDERBAR
// SL - SALAS

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 80px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
        'SP TB'
        'SP SL'
    ;
    height: 100vh;
`;