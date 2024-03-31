import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import SearchInputSectionStyles from './searchInputSection.styles';

const SearchInputSection = () => {
  const styles = useThemedStyles(SearchInputSectionStyles);

  return (
    <View style={styles.searchInputSection}>
      <View>
        <View style={styles.searchIcon} />
      </View>
      <View style={styles.searchTextSection}>
        <Text style={styles.searchText}>London</Text>
      </View>
      <View>
        <View style={styles.menuIcon} />
      </View>
    </View>
  );
};

export default SearchInputSection;
