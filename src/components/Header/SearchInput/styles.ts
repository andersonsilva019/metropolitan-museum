import { styled } from '../../../styles'

export const SearchContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  backgroundColor: '$primary',
  padding: '0.5rem 1rem',
  borderRadius: '30px',
  width: '100%',
  maxWidth: '40rem',
  border: '1px solid $white300',
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)',

  $$shadowColor: '$colors$secondary',

  '&:focus-within': {
    boxShadow: '0 0 0 0.1rem $$shadowColor'
  }
})

export const Button = styled('button', {
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  outline: 'none',
})

export const Input = styled('input', {
  width: '100%',
  fontSize: '$14',
  color: '$black300',
  fontWeight: '400',
  border: 0,
  outline: 'none',
  backgroundColor: 'transparent',

  '&::placeholder': {
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.25)'
  }
})