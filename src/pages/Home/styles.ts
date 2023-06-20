import { styled } from "../../styles";

export const Container = styled('div', {
  display: 'grid',
  gridAreas: 'content',
  padding: '8rem 8rem 2rem 16rem',
  width: '100%',
  marginLeft: '10rem',
  height: '100%',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',
})