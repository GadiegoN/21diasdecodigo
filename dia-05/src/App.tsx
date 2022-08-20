import { GlobalStyle } from "./styles/global"
import { Caixa, Container, Textao, TextGreen, TextoMedio, TextWhite } from "./styles/style"

import ImagePerdido from './assets/img.png';

export function App() {
  return (
    <Container>
      <GlobalStyle />
      <Caixa>
        <img src={ImagePerdido} alt="Alguem perdido olhando uma luz com e sua sombra enorme no chão" />
      </Caixa>
      <Caixa>
        <TextoMedio>404!!!</TextoMedio>
        <TextoMedio>Existe rota sem saida?</TextoMedio>
        <TextGreen>ESTAÇÃO RESPONDE:</TextGreen>
        <TextWhite>Talvez sim, mais nessa situação <br/> Você pode sair por onde entrou.</TextWhite>
        
      </Caixa>
    </Container>
  )
}
