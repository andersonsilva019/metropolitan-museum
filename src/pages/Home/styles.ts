import { styled } from "../../styles";

export const Container = styled('main', {
  gridTemplateAreas: `
    "header header"
    "filter filter"
    "sidebar content"
  `,
  height: '100%',
  paddingBottom: '40rem',
})
