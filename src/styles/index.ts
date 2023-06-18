import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#F8FAFD',
      secondary: '#0D75FF',
      white: '#FFFFFF',
      white300: '#E3E6EB',
      black: '#000000',
      black300: '#222531',
      gray700: '#757881',
      gray500: '#58667E',
    },
    fontSizes: {
      '11': '0.6875rem',
      '12': '0.75rem',
      '14': '0.875rem',
      '15': '0.9375rem',
      '16': '1rem',
      '18': '1.125rem',
      '24': '1.5rem',
      '32': '2rem',
    },
  }
})