import React, {useEffect, useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import Button from '../../Button';

const {height} = Dimensions.get('screen');

const SomeBottomSheet = ({getRef = () => {}, onConfirm = () => {}}) => {
  const filterRef = useRef();

  useEffect(() => {
    const ref = {
      open: sendedTitle => {
        console.log(sendedTitle);
        filterRef.current?.open();
      },
      close: () => filterRef.current?.close(),
    };
    getRef(ref);
  }, []);

  const closing = () => {
    onConfirm('qaytgan malumot');
    filterRef.current?.close();
  };

  return (
    <RBSheet
      ref={filterRef}
      height={height / 2.5}
      duration={250}
      closeOnDragDown
      customStyles={{container: styles.bottomSheetContainer}}>
      <View style={styles.container}>
        <Text>bottomsheet</Text>
        <Button onPress={() => closing()}>Yopish</Button>
      </View>
    </RBSheet>
  );
};

export default SomeBottomSheet;
