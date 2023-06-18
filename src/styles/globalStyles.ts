import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    borderBox: 'border-box',
  },

  body: {
    backgroundColor: '$primary',
    fontFamily: 'Rubik, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    color: '$black',
  },

  'input, textarea, button, h1, h2, h3': {
    fontFamily: 'Rubik, sans-serif',
  },

  '#root, html, body': {
    height: '100%',
  }

})