import { styled } from '../../styles'

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  maxWidth: '1120px',
  margin: '0 6rem',

  a: {
    textDecoration: 'none',
    color: '$black300',
    marginBottom: '2rem',
  }
})