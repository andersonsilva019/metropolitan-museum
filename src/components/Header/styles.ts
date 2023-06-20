import { styled } from '../../styles'

export const Container = styled('header', {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  right: 0,
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  height: '4rem',
  padding: '1rem 2rem',
  gap: '2rem',
})

export const MyFavoritesButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})