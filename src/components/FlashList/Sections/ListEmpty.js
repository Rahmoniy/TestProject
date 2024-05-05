import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const ListEmpty = ({text = '', containerStyle, textStyle}) => (
  <View style={containerStyle}>
    <Text style={textStyle}>List</Text>
  </View>
);

export default ListEmpty;
