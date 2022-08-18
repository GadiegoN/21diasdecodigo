import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #121214;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Header = styled.div`
    width: 90%;

    display: flex;
    justify-content: center;
    background-color: #015F43;
`

export const MainContainer = styled.div`
    height: 40%;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    height: 180px;
    width: 300px;
    object-fit: contain;
`

export const Footer = styled.footer`
    bottom: 0;
    position: fixed;
    height: 20vh;
    width: 90%;
    background-color: #015F43;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: white;
        margin: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }
`

export const ButtonNeon = styled.a`
    display: inline-block;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    padding: 10px 20px;
    overflow: hidden;
    transition: 0.2s;
    margin-top: 40px;
    letter-spacing: 4px;
    cursor: pointer;

    :hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 100px #03e9f4;

        p {
            font-weight: bold;
        }
    }

    span {
        position: absolute;
        display: block;
        
        :nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #03e9f4);
            animation: btn-anim1 1s linear infinite;
        }

        @keyframes btn-anim1 {

            0% {
                left: -100%;
            }

            50%,100% {
                left: 100%;
            }
        }

        :nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #03e9f4);
            animation: btn-anim2 1s linear infinite;
            animation-delay: .25s
        }

        @keyframes btn-anim2 {
            0% {
                top: -100%;
            }

            50%,100% {
                top: 100%;
            }
        }

        :nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #03e9f4);
            animation: btn-anim3 1s linear infinite;
            animation-delay: .5s
        }

        @keyframes btn-anim3 {
            0% {
                right: -100%;
            }

            50%,100% {
                right: 100%;
            }
        }
    
        :nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #03e9f4);
            animation: btn-anim4 1s linear infinite;
            animation-delay: .75s
        }



        @keyframes btn-anim4 {
            0% {
                bottom: -100%;
            }

            50%,100% {
                bottom: 100%;
            }
        }
    }

    p {
        font-size: 20px;
    }
`

/*
    
    
    overflow: hidden;
    transition: 0.2s;
    margin-top: 40px;
    letter-spacing: 4px
*/