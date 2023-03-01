import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/Colors';
import Font from '../../constants/Font';

export const globalStyles = StyleSheet.create({
  thinText: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 12,
    color: colors.BOLD_BLACK,
  },
  textMainHeader: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 18,
    color: colors.BOLD_BLACK,
    fontWeight: '700',
    textTransform: 'capitalize',
  },

  textHeader: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 16,
    color: colors.SECONDARY_GREY,
    fontWeight: '700',
    lineHeight: 20,
    textTransform: 'capitalize',
  },
  textPrimaryGrey: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 14,
    color: colors.CATEGORY_GREY,
    fontWeight: '400',
  },
  regularDarkText: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 14,
    color: colors.SECONDARY_GREY,
    fontWeight: '400',
  },

  textPrimary: {
    fontFamily: Font.AVENIR_REGULAR,
    fontSize: 14,
    color: colors.LIGHT_MODE_GREY,
    fontWeight: '400',
    lineHeight: 20,
  },
});
