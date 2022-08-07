import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const StyleDetails = StyleSheet.create({
  textLarge: {
    fontSize: 28,
    textAlign: 'left',
  },
  textSmall: {fontSize: 12},
  textMedium: {fontSize: 14},
  verticalMarginContainer: {
    marginTop: 25,
    marginBottom: 25,
  },
  fullContainer: {margin: 25},
  bottomMarginContainer: {marginBottom: 25},
  horizontalMarginContainer: {marginHorizontal: 25},
  bgWhite: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  fullScreen: {flex: 1},
  safeAreaContainer: {
    margin: 25,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 5,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  alignVerticalCenter: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  statusBarSpace: {paddingTop: 25},
});
export default StyleDetails;
