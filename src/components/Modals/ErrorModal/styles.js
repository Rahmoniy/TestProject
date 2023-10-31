import {StyleSheet} from 'react-native';
import fonts from '../../../assets/style/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.MontserratMedium,
    color: 'red',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.MontserratRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
});
