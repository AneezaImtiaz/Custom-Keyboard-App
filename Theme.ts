import Responsive from './src/utils/Responsive';

export default {
  spacing: {
    large: Responsive.font(32),
    medium: Responsive.font(24),
    default: Responsive.font(16),
    half: Responsive.font(8),
  },
  text: {
    size: {
      small: Responsive.font(12),
      medium: Responsive.font(14),
      default: Responsive.font(16),
      large: Responsive.font(18),
    },
    font: {
      regular: 'OpenSans-Regular',
      semiBold: 'OpenSans-SemiBold',
      bold: 'OpenSans-Bold',
    },
  },
  colors: {
    primary: {
      default: '#9e9ea7',
    },
    background: {
      default: '#ffffff',
      header: '#2ca2c9',
      dark: '#000000',
    },
    gray: {
      light: '#D8D5D5',
      dark: '#B2B1B0',
      border: '#5b6163',
    },
    text: {
      default: '#525257',
    },
  },
};
