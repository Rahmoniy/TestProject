import React, {memo} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({
  isLoading = false,
  activityIndicatorColor,
  children,
  isDisabled = false,
  style,
  textStyle,
  opacity,
  disabledStyle,
  props,
  onPress = () => {},
  disabled = false,
}) => {
  const _renderInnerText = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size={'small'}
          style={styles.spinner}
          color={activityIndicatorColor || 'white'}
        />
      );
    }

    if (typeof children === 'string' || typeof children === 'number') {
      return <Text style={[styles.textStyle, textStyle]}>{children}</Text>;
    }

    return children;
  };

  if (isDisabled || isLoading) {
    return (
      <View
        style={[
          style,
          disabledStyle,
          opacity,
          isLoading ? styles.disble : styles.button,
        ]}>
        {_renderInnerText()}
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      {...props}
      style={[styles.button, style]}>
      {_renderInnerText()}
    </TouchableOpacity>
  );
};

export default memo(Button);
