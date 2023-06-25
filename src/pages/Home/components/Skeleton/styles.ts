import { styled } from '../../../../styles'

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
  gap: '1.5rem',

})

export const WrapperContent = styled('div', {
  gridArea: 'content',
  padding: '2rem',
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
})

export const Header = styled('div', {
  backgroundColor: '$white',
  gridArea: 'header',
})

export const Sidebar = styled('div', {
  gridArea: 'sidebar',
  backgroundColor: '$white',
})