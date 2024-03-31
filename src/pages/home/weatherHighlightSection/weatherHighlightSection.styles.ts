import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    weatherHighlightOuterSection: {
      paddingHorizontal: 10,
      height: 100,
      width: '100%',
    },
    noPrecipitationSection: {
      marginBottom: 5,
      alignItems: 'center',
    },
    noPrecipitationText: {
      fontSize: 14,
    },
    weatherHighlightInnerSection: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: theme.colors.lightGrey,
    },
  });
