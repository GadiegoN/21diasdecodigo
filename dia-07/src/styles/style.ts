import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 85vh;
    margin: 3rem auto;
    padding: 0 1.5rem;
    background: #29292E;
`

export const Title = styled.h1`
    text-align: center;
`

export const Content = styled.div`
    width: 100%;
    margin-top: 3rem;
    gap: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AddButton = styled.button`
    height: 40px;
    width: 100px;
    gap: 1rem;
    color: #00875F;
    background-color: transparent;
    border: 1px solid #00875F;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
        background-color: #00875F;
        color: #FFF;
    }
`

export const Post = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Conteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`

export const Contador = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;
`