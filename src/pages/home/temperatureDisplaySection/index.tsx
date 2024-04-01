import React from 'react';
import {Image, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Config from 'react-native-config';

import {RootState} from '@src/redux/store';

import {ForecastResponse} from '@src/types/forecast';

import useThemedStyles from '@src/hooks/useThemedStyles';

import TemperatureDisplaySectionStyles from './temperatureDisplaySection.styles';

const temperatureDisplaySection = () => {
  const styles = useThemedStyles(TemperatureDisplaySectionStyles);

  const forecastReducer: ForecastResponse = useSelector(
    (state: RootState) => state.forecastReducer,
  );

  const currForecast = forecastReducer.list[0];

  const iconUrl = `${Config.ICON_URL}`;
  const currWeatherIcon = currForecast?.weather[0]?.icon;
  const currWeatherIconUrl = `${iconUrl}/${currWeatherIcon}@2x.png`;

  return (
    <View style={styles.temperatureDisplayOuterSection}>
      <View style={styles.temperatureDisplayInnerSection}>
        <View style={styles.weatherSection}>
          <View>
            <Image
              style={styles.weatherIcon}
              source={{uri: currWeatherIconUrl}}
            />
          </View>
          <View style={styles.weatherInfoSection}>
            <Text
              testID="weather-info-main-text"
              style={styles.weatherInfoMainText}>
              {currForecast?.weather[0]?.main}
            </Text>
            <Text
              testID="weather-info-desc-text"
              style={styles.weatherInfoDescriptionText}>
              {currForecast?.weather[0]?.description}
            </Text>
          </View>
        </View>
        <View style={styles.mainTemperatureSection}>
          <Text style={styles.mainTemperatureText}>
            {currForecast?.main?.temp}
          </Text>
          <Text style={styles.mainTemperatureDegreeCircle}>o</Text>
          <Text style={styles.mainTemperatureText}>C</Text>
        </View>
        <View style={styles.feelsLikeTemperatureSection}>
          <Text
            style={
              styles.feelsLikeTemperatureText
            }>{`Feels like ${currForecast?.main?.feels_like}`}</Text>
          <Text style={styles.feelsLikeTemperatureDegreeCircle}>o</Text>
          <Text style={styles.feelsLikeTemperatureText}>C</Text>
        </View>
      </View>
    </View>
  );
};

export default temperatureDisplaySection;
