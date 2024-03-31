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
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.lightGrey,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    weatherHighlightText: {
      marginRight: 10,
      lineHeight: 25,
      fontSize: 14,
      fontWeight: 'bold',
    },
    dewPointTextSection: {
      flexDirection: 'row',
    },
    dewPointText: {
      lineHeight: 25,
      fontSize: 14,
      fontWeight: 'bold',
    },
    dewPointDegreeCircle: {
      lineHeight: 25,
      fontSize: 6,
      fontWeight: 'bold',
    },
  });
