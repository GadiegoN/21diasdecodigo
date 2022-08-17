import { Container, Footer, Header, Logo, Title, TitleContainer } from "./styles/style";

import RocketseatImg from './assets/rocketseat.png';

export function App() {
  return (
    <Container>
      <Header>
        <Logo src={RocketseatImg}></Logo>
      </Header>
      <TitleContainer>
        <Title>
          Hello
          <span> World!!!</span>
        </Title>
      </TitleContainer>
      <Footer>
        <p>E aí, bora pro Desafio? 🔥</p>
        <p>Criado por 
          <a href="https://www.instagram.com/gadiego_nogueira/" title="Gadiego Nogueira"> @gadiego_nogueira</a>
          <span>|</span>
        </p> 
      </Footer>
    </Container>
  )
}
