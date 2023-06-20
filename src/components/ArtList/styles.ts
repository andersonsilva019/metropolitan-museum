import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',
})