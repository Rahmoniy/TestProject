import {StyleSheet} from 'react-native';
import colors from '../../assets/style/colors';
import fonts from '../../assets/style/fonts';

export default StyleSheet.create({
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: fonts.MontserratRegular,
  },
  title: {
    fontFamily: fonts.MontserratMedium,
    color: colors.mainColor,
    fontSize: 15,
    marginLeft: 10,
  },
  img: {
    width: 90,
    height: 50,
  },
  imgCard: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
  },
  menu: {
    position: 'absolute',
    right: 15,
  },
  image: {
    width: 50,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
