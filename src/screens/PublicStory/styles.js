import { Dimensions, Platform, StyleSheet } from 'react-native';
import colors from '../../assets/style/colors';
import fonts from "../../assets/style/fonts";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCard: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 80 : 50,
    justifyContent: 'center',
  },
  titleCard: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 20,
    backgroundColor: 'transparent',
    width: '100%',
    height: '70%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btnHistory: {
    height: '80%',
    width: '45%',
  },
  img: {
    width: width,
    height: height,
    backgroundColor: colors.lightGray,
  },
  historyDots: {
    flexDirection: 'row',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  useImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 20,
    // position: 'absolute'
  },
  mainTitle: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: 14,
    color: colors.white,
  },
  subTitle: {
    fontFamily: fonts.MontserratRegular,
    fontSize: 14,
    color: colors.white,
  },
  topRightCard: {
flexDirection: 'row',
  },
  xIconCard: {
    padding: 10,
    height: '100%',
  },

  smileCard: {
    position: 'absolute',
    // backgroundColor: colors.lightRed,
    width: width - 160,
    marginHorizontal: 80,
    height: 170,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  smileText: {
    fontSize: 40,
    color: colors.lightBlack
  },

  bottomCard: {
    position: 'absolute',
    flexDirection: 'row',
    marginHorizontal: 20,
    bottom: 35,
    width: width - 40,
  },
  inputCard: {
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 128, 128, 0.35)',
    height: 45,
    width: 250,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputText: {
    paddingLeft: 10,
    color: colors.white,
    fontFamily: fonts.MontserratMedium,
    fontSize: 13,
    width: '90%',
  },
  iconCard: {
    backgroundColor: 'rgba(128, 128, 128, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    width:45,
    height: 45,
    borderRadius: 50,
    marginLeft: 10,
  },
});
