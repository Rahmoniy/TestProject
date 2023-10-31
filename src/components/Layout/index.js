import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout = ({style, children}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Layout;
