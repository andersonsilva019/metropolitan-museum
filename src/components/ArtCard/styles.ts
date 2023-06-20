import { styled } from "../../styles";

export const Container = styled('div', {
  position: 'relative',
  zIndex: 0,
  width: '100%',
  maxWidth: '20rem',
  backgroundColor: '$white',
  borderRadius: '5px',
  padding: '2.5rem 1rem 2rem',
})

export const WrapperImage = styled('div', {
  width: '90%',
  backgroundColor: '$primary', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  
  '> img': {
    width: '300px',
    height: '300px',
    borderRadius: '5px',
  }
})

export const HeaderCard = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0 0.5rem',

  '> strong': {
    color: '$black',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  '> button': {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
  }
})

export const AuthorName = styled('div', {
  color: '$gray700',
  fontSize: '$14'
})

export const Badge = styled('div', {
  maxWidth: '6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '0.5rem',
  left: '0',
  right: '0',
  margin: 'auto',
  borderRadius: '5px',
  fontSize: '$12',
  padding: '0.25rem 0.5rem',
  background: '#770DFF',
  color: '$white',
})

export const MoreDetailsButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2rem',
  backgroundColor: '$primary',
  padding: '0.5rem 1rem',
  borderRadius: '30px',
  border: '1px solid $white300',
  cursor: 'pointer',
  color: '$gray500',
  fontWeight: '400',
  fontSize: '$14',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.95)',
  }
})

export const HeaderModal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$primary',
  padding: '1.5rem 2rem',
  gap: '1rem',

  h2: {
    color: '$black300',
    fontSize: '$24',
    fontWeight: '500',
  },

  button: {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
  }
})

export const ContentModal = styled('div', {
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  img: {
    height: '30rem',
  }
})

export const Group = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '2rem',

  '> span': {
    color: '$black300',
    fontWeight: '400',
    fontSize: '$14',
  },

  '> strong': {
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    fontSize: '$14',
    color: '$secondary',
    fontWeight: '400',
    background: 'rgba(13, 117, 255, 0.05)',
  }
})