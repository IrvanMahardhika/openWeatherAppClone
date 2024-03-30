import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    rootContainer: {
      ...theme.layout.rootContainer,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
