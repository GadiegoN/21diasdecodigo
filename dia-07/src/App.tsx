import { ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { AddButton, Contador, Container, Content, Conteudo, Post, Title } from './styles/style'

import ImgBug from './assets/bug.png'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title>Quantidade de bugs!</Title>
      <Content>
        <Post>
          <Conteudo>
            <img src={ImgBug} />
            <p>Ops, mais um bug apareceu por aqui!</p>
          </Conteudo>
          <Contador>
            <AddButton onClick={() => setCount((count) => count + 1)}>
              Curtir
              <ThumbsUp size={32} />
            </AddButton>
            <h1>{count}</h1>
          </Contador>
        </Post>
      </Content>
    </Container>
  )
}
