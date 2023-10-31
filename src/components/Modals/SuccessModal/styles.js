import {StyleSheet} from 'react-native';
import fonts from '../../../assets/style/fonts';
import colors from '../../../assets/style/colors';

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
    color: colors.mainColor,
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
});
