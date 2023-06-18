import { ArtList } from '../../components/ArtList'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Filter />
      <Sidebar />
      <ArtList />
    </Container>
  )
}