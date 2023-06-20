import { styled } from '../../../styles'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: '16rem 1fr',
  gridTemplateRows: '4rem 1fr',
  gridTemplateAreas: `
    'header header'
    'sidebar content'
  `,
  height: '100%',
})


export const Content = styled('div', {
  display: 'grid',
  gridAreas: 'content',
  padding: '8rem 8rem 2rem 16rem',
  width: '100%',
  marginLeft: '10rem',
  height: '100%',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',
})