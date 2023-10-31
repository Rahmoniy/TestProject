import {StyleSheet} from 'react-native';
import colors from '../../assets/style/colors';
import fonts from '../../assets/style/fonts';

export default StyleSheet.create({
  btn: {
    height: 43,
    borderWidth: 0,
    borderColor: colors.mainColor,
    borderRadius: 30,
    backgroundColor: '#F0FDFF',

    shadowColor: '#A5A5A5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  title: {
    fontSize: 15,
    color: colors.mainColor,
    fontFamily: fonts.MontserratMedium,
    margin: 0,
    padding: 0,
  },
});
