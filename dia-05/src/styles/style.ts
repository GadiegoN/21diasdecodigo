import styled from "styled-components";

export const Container = styled.div`
    background-color: #444;
    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Caixa = styled.div`
    height: 600px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 1rem;
`

export const Textao = styled.p`
    font-size: 112px;
    color: #8257e5;
    font-weight: bold;
`

export const TextoMedio = styled.p`
    font-size: 40px;
    color: #fff;
    font-weight: 700;
`

export const TextGreen = styled.p`
    font-size: 18px;
    color: #00B37E;
    font-weight: 700;
`

export const TextWhite = styled.p`
    font-size: 18px;
    color: #fff;
    font-weight: 300;
`