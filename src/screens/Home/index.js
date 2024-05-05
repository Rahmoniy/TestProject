import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {Button} from '../../components';
import SomeBottomSheet from '../../components/BottomSheet/SomeBottomSheet';

const Home = () => {
  const bottomSheetRef = useRef();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => bottomSheetRef.current?.open('yuborilgan malimot')}>
        Bottomsheet
      </Button>
      <SomeBottomSheet
        getRef={r => {
          bottomSheetRef.current = r;
        }}
        onConfirm={title => {
          console.log(title);
        }}
      />
    </View>
  );
};

export default Home;
