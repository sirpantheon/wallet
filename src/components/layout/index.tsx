import Aside from '../aside'
import MainHeader from '../mainHeader'
import Content from '../content'
import { Container } from './styles'

export default function Layout() {
  return (
    <Container>
      <Aside />
      <MainHeader />
    </Container>

  )
}