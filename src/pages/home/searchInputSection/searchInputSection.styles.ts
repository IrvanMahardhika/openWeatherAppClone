import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    searchInputSection: {
      paddingTop: 20,
      paddingHorizontal: 15,
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      marginRight: 5,
      width: 30,
      height: 30,
      backgroundColor: 'rgb(3, 105, 241)',
    },
    searchTextSection: {
      flexGrow: 1,
    },
    searchText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    menuIcon: {
      width: 30,
      height: 30,
      backgroundColor: 'rgb(3, 105, 241)',
    },
  });
