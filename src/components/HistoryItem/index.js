import {Animated, Dimensions, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './styles';
import colors from "../../assets/style/colors";

const HistoryItem = ({
  isActive = false,
  activeIndex = 0,
  index = 0,
  itemDot = null,
}) => {
  const colorRef = useRef(new Animated.Value(0)).current;

  const animatedWidth = colorRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (Dimensions.get('screen').width - 40) / itemDot],
  });

  useEffect(() => {
    if (activeIndex === index) {
      Animated.timing(colorRef, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: false,
      }).start();
    } else {
      colorRef.setValue(0);
    }
  }, [activeIndex]);

  return (
    <View
      style={[
        styles.mainCard,
        activeIndex > index && {backgroundColor: colors.white},
        {width: (Dimensions.get('screen').width - 40) / itemDot},
      ]}>
      <Animated.View
        style={[styles.mainView, {width: animatedWidth}]}></Animated.View>
    </View>
  );
};

export default HistoryItem;
