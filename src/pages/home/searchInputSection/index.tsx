import React from 'react';
import {View, Text} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import useThemedStyles from '@src/hooks/useThemedStyles';

import SearchInputSectionStyles from './searchInputSection.styles';

const SearchInputSection = () => {
  const styles = useThemedStyles(SearchInputSectionStyles);

  return (
    <View style={styles.searchInputSection}>
      <View style={styles.searchIcon}>
        <IconFeather name="search" size={25} color="#000" />
      </View>
      <View style={styles.searchTextSection}>
        <Text style={styles.searchText}>London</Text>
      </View>
      <View>
        <IconFontAwesome name="sliders" size={25} color="#000" />
      </View>
    </View>
  );
};

export default SearchInputSection;
