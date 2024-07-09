import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('screen').width / 2.8,
    height: Dimensions.get('screen').height / 5.3,
  },
  button: {
    marginTop: 15,
  },
});
