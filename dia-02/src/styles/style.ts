import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #451531;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Header = styled.div`
    width: 90%;

    display: flex;
    justify-content: center;
`

export const TitleContainer = styled.div`
    height: 40%;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: #fff;
    font-family: 'Silkscreen', cursive;

    span {
        color: #000;
        font-family: 'Bangers', cursive;
        animation: blink 1s infinite;
    }
`

export const Logo = styled.img`
    height: 180px;
    width: 300px;
    object-fit: contain;
`

export const Footer = styled.footer`
    p{
        color: #fff; 
        font-family: '', cursive;
        font-size: 20px;
        margin: 10px 0 0 10px;
        white-space: nowrap;
        overflow: hidden;
        width: 30em;
        animation: type 4s steps(60, end); 
    }

    p:nth-child(2){
        animation: type2 8s steps(60, end);
    }

    p a{
        color: #fff;
        text-decoration: none;
    }

    span{
        animation: blink 1s infinite;
    }

    @keyframes type{ 
        from {
            width: 0;
        } 
    } 

    @keyframes type2{
        0%{ 
            width: 0;
        }
        50%{ 
            width: 0;
        }
        100%{ 
            width: 100;
        } 
    } 

    @keyframes blink{
        to{
            opacity: .0;
        }
    }

    ::selection{
        background: black;
    }
`