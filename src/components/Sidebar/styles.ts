import { styled } from '../../styles'

export const Container = styled('aside', {
  position: 'fixed',
  zIndex: 0,
  bottom: 0,
  top: '6rem',
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
  alignItems: 'flex-start',
  paddingRight: '1.5rem',
})

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '10px',
  gap: '0.5rem',
  width: '100%',
  fontSize: '$14',
  fontWeight: '400',
  padding: '0.5rem 1rem',
  color: '$black300',

  transition: 'background 0.2s',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$primary',
    color: '$secondary',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$primary',
        color: '$secondary',
      }
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