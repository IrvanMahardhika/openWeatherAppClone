import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HomeStyles from './home.styles';

import SearchInputSection from './searchInputSection';
import TemperatureDisplaySection from './temperatureDisplaySection';
import WeatherHighlightSection from './weatherHighlightSection';

const Home = () => {
  const styles = useThemedStyles(HomeStyles);

  return (
    <View style={styles.rootContainer}>
      <SearchInputSection />
      <TemperatureDisplaySection />
      <WeatherHighlightSection />
    </View>
  );
};

export default Home;
