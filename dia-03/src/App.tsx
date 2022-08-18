import { ButtonNeon, Container, Footer, Header, Logo, MainContainer } from "./styles/style";

import RocketseatImg from './assets/rocketseat.png';

export function App() {
  return (
    <Container>
      <Header>
        <Logo src={RocketseatImg}></Logo>
      </Header>
      <MainContainer>
       <ButtonNeon>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>Enviar</p>
       </ButtonNeon>
      </MainContainer>
      <Footer>
        <p>E aí, bora pro Desafio? 🔥</p>
        <p>Criado por 
          <a href="https://www.instagram.com/gadiego_nogueira/" title="Gadiego Nogueira"> @gadiego_nogueira</a>
        </p> 
      </Footer>
    </Container>
  )
}
