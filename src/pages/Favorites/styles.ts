import { styled } from '../../styles'

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  a: {
    textDecoration: 'none',
    color: '$black300',
    marginBottom: '2rem',
  }
})