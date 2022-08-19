import styled from "styled-components";

export const CalculatorContainer = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;
    border: 1px solid black;

`;

export const CalculatorContent = styled.div`
    width: 250px;
    height: 50px;
    background-color: #578018;
    border: 1px solid black;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
        margin-left: 1rem;
        color: #fff;
        font-size: 1.4rem;
    }

`;

export const CalculatorScreen = styled.label``;

export const CalculatorButton = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    display: flex;
    justify-content: center;
    
    button {
        margin: .1rem;
        height: 40px;
        width: 60px;
        background: #555ccc50;
    }
`;

export const NumericButton = styled.a``;

export const OperationButton = styled.a``;



