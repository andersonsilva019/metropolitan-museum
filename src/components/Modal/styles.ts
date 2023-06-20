import { styled, keyframes } from '../../styles'

const modalIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const modalOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
})


export const Overlay = styled('div', {
  display: 'none',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 10,
  
  variants: {
    isOpen: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }
    }
  }
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  backgroundColor: '$white',
  overflowY: 'auto',

  variants: {
    isOpen: {
      true: {
        animation: `${modalIn} 200ms ease-in`,
      },
      false: {
        animation: `${modalOut} 200ms ease-in`,
      }
    }
  }
})
