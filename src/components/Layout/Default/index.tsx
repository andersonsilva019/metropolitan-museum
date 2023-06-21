import { Header } from '../../Header';
import { Sidebar } from '../../Sidebar';
import { Container, WrapperContent } from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <Header />
      <Sidebar />
      <WrapperContent>
        {children}
      </WrapperContent>
    </Container>
  )
}