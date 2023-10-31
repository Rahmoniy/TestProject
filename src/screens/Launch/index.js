import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import styles from './styles';
import NavigationService from '../../navigators/NavigationService';

const Launch = () => {
  const logoSize = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    setTimeout(() => {
      NavigationService.reset('login');
    }, 1000);
    Animated.timing(logoSize, {
      toValue: 2,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('assets/images/big_logo.jpg')}
        resizeMode={'contain'}
        style={[styles.logo, {transform: [{scale: logoSize}]}]}
      />
    </View>
  );
};

export default Launch;
