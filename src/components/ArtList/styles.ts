import { styled } from '../../styles'

export const Container = styled('div', {
  gridAreas: 'content',
  padding: '10rem 8rem 2rem 16rem',

  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',
})