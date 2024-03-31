import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import TemperatureDisplaySectionStyles from './temperatureDisplaySection.styles';

const temperatureDisplaySection = () => {
  const styles = useThemedStyles(TemperatureDisplaySectionStyles);

  return (
    <View style={styles.temperatureDisplayOuterSection}>
      <View style={styles.temperatureDisplayInnerSection}>
        <View style={styles.weatherSection}>
          <View style={styles.weatherIconSection}>
            <View style={styles.weatherIcon}></View>
          </View>
          <View style={styles.weatherInfoSection}>
            <Text style={styles.weatherInfoMainText}>Haze</Text>
            <Text style={styles.weatherInfoDescriptionText}>Gentle breeze</Text>
          </View>
        </View>
        <View style={styles.mainTemperatureSection}>
          <Text style={styles.mainTemperatureText}>7</Text>
          <Text style={styles.mainTemperatureDegreeCircle}>o</Text>
          <Text style={styles.mainTemperatureText}>C</Text>
        </View>
        <View style={styles.feelsLikeTemperatureSection}>
          <Text style={styles.feelsLikeTemperatureText}>Feels like 4</Text>
          <Text style={styles.feelsLikeTemperatureDegreeCircle}>o</Text>
          <Text style={styles.feelsLikeTemperatureText}>C</Text>
        </View>
      </View>
    </View>
  );
};

export default temperatureDisplaySection;
