import React, {useEffect} from 'react';
import NavigationService from '../../navigators/NavigationService';
import {View, Text} from 'react-native';
import styles from './styles';

const Launch = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.reset('home');
      // NavigationService bu navigation uchun yasalgan componenta, reset screen ga kirgandan keyin uni orqasidagi barcha screen larni o'chirib tashlidi
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Launch</Text>
    </View>
  );
};

export default Launch;
