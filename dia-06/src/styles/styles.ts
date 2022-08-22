import styled from "styled-components";
import banner from './../assets/img.png'

export const ContainerImg = styled.div`
    margin: 0 auto;
    height: 65vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${banner});
`

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 240, 0.5);
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 1 );
    animation: anim-stars 10s linear infinite;

    @keyframes anim-stars {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-410px);
        }
        100% {
            transform: translateY(-10px);
        }

    }
`