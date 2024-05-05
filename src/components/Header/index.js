import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import NavigationService from '../../navigators/NavigationService';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import colors from '../../assets/style/colors';
import styles from './styles';

const Header = ({
  titleStyle,
  title = '',
  showLeft = true,
  showRight = true,
  leftStyle,
}) => {
  return (
    <View style={styles.headerCard}>
      {showLeft ? (
        <TouchableOpacity
          style={[styles.btn, leftStyle]}
          onPress={() => NavigationService.goBack()}>
          <ArrowLeft color={colors.mainColor} />
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
      ) : null}

      {showRight ? (
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

export default memo(Header);
