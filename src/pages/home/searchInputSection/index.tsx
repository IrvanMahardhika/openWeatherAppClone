import React from 'react';
import {View, Text} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {RootState} from '@src/redux/store';

import useThemedStyles from '@src/hooks/useThemedStyles';

import SearchInputSectionStyles from './searchInputSection.styles';

const SearchInputSection = () => {
  const styles = useThemedStyles(SearchInputSectionStyles);

  const selectedCityReducer: string = useSelector(
    (state: RootState) => state.selectedCityReducer,
  );

  return (
    <View style={styles.searchInputSection}>
      <View style={styles.searchIcon}>
        <IconFeather name="search" size={25} color="#000" />
      </View>
      <View style={styles.searchTextSection}>
        <Text testID="searchText" style={styles.searchText}>
          {selectedCityReducer}
        </Text>
      </View>
      <View>
        <IconFontAwesome name="sliders" size={25} color="#000" />
      </View>
    </View>
  );
};

export default SearchInputSection;
