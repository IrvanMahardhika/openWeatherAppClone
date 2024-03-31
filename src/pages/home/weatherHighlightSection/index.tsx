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
      <View style={styles.weatherHighlightInnerSection}></View>
    </View>
  );
};

export default weatherHighlightSection;
