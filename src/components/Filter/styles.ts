import { styled } from '../../styles'

export const Container = styled('div', {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  right: 0,
  top: '4rem',
  padding: '0 1rem',
  gridTemplateAreas: 'filter',
  height: '3.5rem',
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
  backgroundColor: '$white',

  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '16rem  1fr',
  gap: '2rem',

  '> h2': {
    fontSize: '$14',
    fontWeight: '400',
    color: '$black',
    textAlign: 'center',
  },
})

export const GroupParameter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const OptionParameter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '30px',
  fontSize: '$12',
  color: '$secondary',
  fontWeight: '500',
  background: 'rgba(13, 117, 255, 0.05)',

  '> button': {
    background: 'transparent',
    border: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer', 
  },
})