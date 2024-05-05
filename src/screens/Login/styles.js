import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../assets/style/fonts';
import colors from '../../assets/style/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EEEE',
  },
  mainCard: {
    backgroundColor: '#F0EEEE',
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    paddingTop: 20,
    minHeight: height / 1.5,
  },
  topTitle: {
    fontSize: 50,
    fontFamily: fonts.MontserratMedium,
    color: colors.mainColor,
    marginLeft: 15,
    fontWeight: '900',
  },
  input: {
    fontSize: 15,
    color: colors.mainColor,
    fontFamily: fonts.MontserratMedium,
    marginBottom: 30,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
    minHeight: 30,
    borderWidth: 0,
    borderColor: colors.mainColor,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#A5A5A5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input2: {
    fontSize: 15,
    color: colors.mainColor,
    fontFamily: fonts.MontserratMedium,
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 15,
    minHeight: 30,
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
  },
  titleInput: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    color: '#747474',
    marginBottom: 4,
  },
  topMiniTitle: {
    fontSize: 19,
    fontFamily: fonts.MontserratMedium,
    color: colors.mainColor,
    textAlign: 'center',
    fontWeight: '700',
  },
  img: {
    width: 90,
    marginTop: 10,
  },
  topLogoCard: {
    alignItems: 'flex-end',
    marginBottom: 50,
  },
  selectCard: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  sellecBtn: {
    backgroundColor: colors.mainColor,
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  sellecBtnNot: {
    backgroundColor: '#CCCCCC5F',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  sellectTitle: {
    color: '#ffffff',
  },
  sellectTitleNot: {
    color: '#9F9F9FE3',
  },
});
