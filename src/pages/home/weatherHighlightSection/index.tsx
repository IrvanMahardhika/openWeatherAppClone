import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '@src/redux/store';

import {ForecastResponse} from '@src/types/forecast';

import useThemedStyles from '@src/hooks/useThemedStyles';

import WeatherHighlightSectionStyles from './weatherHighlightSection.styles';

const weatherHighlightSection = () => {
  const styles = useThemedStyles(WeatherHighlightSectionStyles);

  const forecastReducer: ForecastResponse = useSelector(
    (state: RootState) => state.forecastReducer,
  );

  const currForecast = forecastReducer.list[0];
  const windDisplayText = `Wind: ${currForecast?.wind.speed}m/s E`;
  const humidityDisplayText = `Humidity: ${currForecast?.main.humidity}%`;
  const uvIndexDisplayText = `UV index: 1.4`;
  const pressureDisplayText = `Pressure: ${currForecast?.main.pressure}hPa`;
  const visibilityInKm = currForecast?.visibility / 1000;
  const visibilityInDecimal = visibilityInKm.toFixed(1);
  const visibilityDisplayText = `Visibility: ${visibilityInDecimal}km`;
  const dewPointText = `Dew point: 8`;

  return (
    <View style={styles.weatherHighlightOuterSection}>
      <View style={styles.noPrecipitationSection}>
        <Text style={styles.noPrecipitationText}>
          No precipitation within an hour
        </Text>
      </View>
      <View style={styles.weatherHighlightInnerSection}>
        <View style={styles.row}>
          <Text style={styles.weatherHighlightText}>{windDisplayText}</Text>
          <Text style={styles.weatherHighlightText}>{humidityDisplayText}</Text>
          <Text style={styles.weatherHighlightText}>{uvIndexDisplayText}</Text>
          <Text style={styles.weatherHighlightText}>{pressureDisplayText}</Text>
          <Text style={styles.weatherHighlightText}>
            {visibilityDisplayText}
          </Text>
          <View style={styles.dewPointTextSection}>
            <Text style={styles.dewPointText}>{dewPointText}</Text>
            <Text style={styles.dewPointDegreeCircle}>0</Text>
            <Text style={styles.dewPointText}>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default weatherHighlightSection;
