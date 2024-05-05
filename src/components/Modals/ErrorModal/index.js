import React, {memo, useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import Button from '../../Button';
import styles from './styles';

const ErrorModal = ({getRef = () => {}, onConfirm = () => {}}) => {
  const {t} = useTranslation();

  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(t('Error'));

  useEffect(() => {
    const ref = {
      open: sendedTitle => {
        setVisible(true);
        setTitle(sendedTitle);
      },
      close: () => setVisible(false),
    };
    getRef(ref);
  }, []);

  return (
    <Modal
      statusBarTranslucent
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      animationIn={'bounceIn'}
      animationOut={'bounceOut'}
      deviceHeight={Dimensions.get('screen').height}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('Error')}</Text>
        <Text style={styles.desc}>{title}</Text>
        <Button
          style={{backgroundColor: 'red'}}
          onPress={() => {
            setVisible(false);
            onConfirm();
          }}>
          {t('Tushunarli')}
        </Button>
      </View>
    </Modal>
  );
};

export default memo(ErrorModal);
