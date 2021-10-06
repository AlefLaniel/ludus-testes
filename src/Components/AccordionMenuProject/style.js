import styled from "styled-components";

export const Container = styled.div`
    color: #DCDADA;
    font-size: 110%;
    align-self: flex-start;
    padding-left: 30px;
    margin-top: 30px;
`;

export const Button = styled.div`
        margin-top: 25px;
        display: flex;
        cursor: pointer;
        :hover {
            color: white;
        }
`;

export const InternalButton = styled.div`
        margin-top: 10px;
        display: flex;
        cursor: pointer;
        color: white;
        font-size: 90%;
        :hover {
            color: #DCDADA;
        }
`;

export const Icon = styled.div`
        margin-right: 10px;
`;