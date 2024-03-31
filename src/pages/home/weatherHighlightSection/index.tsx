import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import WeatherHighlightSectionStyles from './weatherHighlightSection.styles';

const weatherHighlightSection = () => {
  const styles = useThemedStyles(WeatherHighlightSectionStyles);

  return (
    <View style={styles.weatherHighlightOuterSection}>
      <View style={styles.noPrecipitationSection}>
        <Text style={styles.noPrecipitationText}>
          No precipitation within an hour
        </Text>
      </View>
      <View style={styles.weatherHighlightInnerSection}>
        <View style={styles.row}>
          <Text style={styles.weatherHighlightText}>{`Wind: 6.2m/s E`}</Text>
          <Text style={styles.weatherHighlightText}>{`Humidity: 83%`}</Text>
          <Text style={styles.weatherHighlightText}>{`UV index: 1.4`}</Text>
          <Text style={styles.weatherHighlightText}>{`Pressure: 993hPa`}</Text>
          <Text
            style={styles.weatherHighlightText}>{`Visibility: 10.0km`}</Text>
          <View style={styles.dewPointTextSection}>
            <Text style={styles.dewPointText}>{`Dew point: 8`}</Text>
            <Text style={styles.dewPointDegreeCircle}>0</Text>
            <Text style={styles.dewPointText}>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default weatherHighlightSection;
