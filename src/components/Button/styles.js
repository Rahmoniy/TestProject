import { Dimensions, StyleSheet } from "react-native";
import colors from '../../assets/style/colors';
import fonts from '../../assets/style/fonts';

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  spinner: {},
  textStyle: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily: fonts.MontserratRegular,
  },
  button: {
    backgroundColor: colors.darkBlue,
    minHeight: 60,
    width: width - 20,
    color: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disble: {
    backgroundColor: colors.darkBlue,
    minHeight: 40,
    width: '100%',
    color: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
});
