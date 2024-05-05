import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const ListFooter = ({
  loading = false,
  containerStyle = {
    paddingVertical: 20,
    borderColor: '#CCC',
  },
  size = 'large',
  color = '#46009F',
}) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={containerStyle}>
      <ActivityIndicator animating size={size} color={color} />
    </View>
  );
};

export default ListFooter;
