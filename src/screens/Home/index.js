import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../components';
import navigationService from "../../navigators/NavigationService";

const Home = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigationService.navigate('publicStory')}>
        Public story
      </Button>

      <Button
        style={styles.button}
        onPress={() => navigationService.navigate('userStory')}>
        User story
      </Button>
    </View>
  );
};

export default Home;
