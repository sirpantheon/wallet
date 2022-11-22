import Aside from '../aside'
import MainHeader from '../mainHeader'
import Content from '../content'
import { Container } from './styles'

export default function Layout({ children }) {
  return (
    <Container>
      <Aside />
      <MainHeader />
      <Content>
        {children}
      </Content>
    </Container>

  )
}