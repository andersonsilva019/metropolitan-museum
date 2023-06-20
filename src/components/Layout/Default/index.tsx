import { Header } from '../../Header';
import { Sidebar } from '../../Sidebar';
import { Container,Content } from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Content>
        {children}
      </Content>
    </Container>
  )
}