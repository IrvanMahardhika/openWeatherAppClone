import {StyleSheet} from 'react-native';

import {Theme} from '@src/types/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    temperatureDisplayOuterSection: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    temperatureDisplayInnerSection: {
      width: 100,
      height: 100,
    },
    weatherSection: {
      height: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    weatherIconSection: {
      marginRight: 5,
    },
    weatherIcon: {
      height: 20,
      width: 20,
      backgroundColor: 'rgb(3, 105, 241)',
    },
    weatherInfoSection: {
      flex: 1,
    },
    weatherInfoMainText: {
      fontSize: 12,
    },
    weatherInfoDescriptionText: {
      fontSize: 10,
    },
    mainTemperatureSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    mainTemperatureText: {
      lineHeight: 52,
      fontSize: 52,
    },
    mainTemperatureDegreeCircle: {
      lineHeight: 14,
      fontSize: 14,
    },
    feelsLikeTemperatureSection: {
      height: 20,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    feelsLikeTemperatureText: {
      fontSize: 10,
    },
    feelsLikeTemperatureDegreeCircle: {
      fontSize: 6,
    },
  });
