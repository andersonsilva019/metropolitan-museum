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
  width: '100%',

  '@media (max-width: 1040px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: '1.5rem',

    gridTemplateAreas: `
    'header'
    'sidebar'
    'content'
  `,
  }
})

export const WrapperContent = styled('div', {
  gridArea: 'content',
  padding: '2rem',
  width: '100%',
  height: '100%',
  margin: '2.5rem 1.5rem',

  '@media (max-width: 1200px)': {
    marginTop: 0,
  }
})