import {Theme} from '@src/types/theme';

const defaultTheme: Theme = {
  typography: {},
  layout: {
    rootContainer: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)',
    },
  },
  colors: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
  },
};

export default {
  default: defaultTheme,
};
