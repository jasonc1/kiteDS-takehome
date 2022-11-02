import { DefaultTheme } from 'styled-components';

const fontFamilies = {
  heading: 'Avenir Next',
  body: 'Avenir Next',
};

const theme = {
  colors: {
    core: {
      white: '#FFFFFF',
      grey: '#7B8286',
      background: '#020F18',
    },

    brand: {
      accent: '#0088F6',
      primary: '#005499',
      background: '#002133',
    },
  },
  typography: {
    h2: {
      tag: 'h2',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      fontFamily: fontFamilies.heading,
    },
    paragraph500: {
      tag: 'p',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      fontFamily: fontFamilies.body,
    },
    small500: {
      tag: 'p',
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: '16px',
      fontFamily: fontFamilies.body,
    },
    small400: {
      tag: 'p',
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '16px',
      fontFamily: fontFamilies.body,
    },
  },

  borders: {
    none: 'none',
    default: '1px solid',
    medium: '2px solid',
  },
};

export default theme;
