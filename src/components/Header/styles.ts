import { styled } from '../../styles'

export const Container = styled('header', {
  gridArea: 'header',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  right: 0,
  
  backgroundColor: '$white',
  height: '4rem',
  width: '100%',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '> button': {
    all: 'unset',
    cursor: 'pointer',
    display: 'none',
  },

  '@media (max-width: 960px)': {
    height: '6rem',
  }
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@media (max-width: 1200px)': {
    margin: '0 2rem',
  }
})

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',

  '@media (max-width: 960px)': {
    flexDirection: 'column-reverse',
  }
})

export const MyFavoritesButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})