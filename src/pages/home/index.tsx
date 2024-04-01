import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getForecast} from '@src/redux/actions/forecast';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HomeStyles from './home.styles';

import SearchInputSection from './searchInputSection';
import TemperatureDisplaySection from './temperatureDisplaySection';
import WeatherHighlightSection from './weatherHighlightSection';

const Home = () => {
  const styles = useThemedStyles(HomeStyles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast({city: 'London'}));
  }, []);

  return (
    <View style={styles.rootContainer}>
      <SearchInputSection />
      <TemperatureDisplaySection />
      <WeatherHighlightSection />
    </View>
  );
};

export default Home;
