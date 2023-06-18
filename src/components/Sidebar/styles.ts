import { styled } from '../../styles'

export const Container = styled('aside', {
  position: 'fixed',
  zIndex: 0,
  bottom: 0,
  top: '7.5rem',
  gridArea: 'sidebar',
  backgroundColor: '$white',
  width: '100%',
  maxWidth: '16rem',
  marginTop: '2px',
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  '> h2': {
    fontSize: '$14',
    fontWeight: '400',
    color: '$black',
  },

  overflowY: 'auto',
})

export const ListWrapper = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
})

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$14',
  fontWeight: '400',
  color: '$black300',

  '> button': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '10px',

    transition: 'background 0.2s',

    '&:hover': {
      backgroundColor: '$primary',
      color: '$secondary',
    }
  }
})

export const Identifier = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#6F5A8A',
  padding: '1rem',
  color: '$white',
  fontWeight: '500',
  borderRadius: '50%',
  width: '18px',
  height: '18px',
})