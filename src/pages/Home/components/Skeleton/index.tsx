import { Container, WrapperContent, Header, Sidebar } from './styles'

export function Skeleton() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <WrapperContent />
    </Container>
  )
}