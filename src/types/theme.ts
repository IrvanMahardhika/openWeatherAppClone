import {ColorValue} from 'react-native';

export type Theme = {
  colors: Record<string, ColorValue>;
  layout: Record<string, any>;
  typography: Record<string, any>;
};
