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
  padding: '0 2rem',
})