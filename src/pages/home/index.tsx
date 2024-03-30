import React from 'react';
import {View, Text} from 'react-native';

import useThemedStyles from '@src/hooks/useThemedStyles';

import HomeStyles from './home.styles';

const Home = () => {
  const styles = useThemedStyles(HomeStyles);

  return (
    <View style={styles.rootContainer}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
