import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  container_PRIMARY: {
    backgroundColor: Colors.HEADER_PURPLE,

    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  container_WHITE: {
    backgroundColor: Colors.DEFAULT_WHITE,

    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  container_SIGNOUT: {
    backgroundColor: Colors.DEFAULT_WHITE,

    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  text_SIGNOUT: {
    color: Colors.CATEGORY_GREY,
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
  },
  container_TERTIARY: {
    backgroundColor: Colors.DEFAULT_WHITE,
    alignItems: 'flex-end',
    marginVertical: 10,

    paddingBottom: 30,
  },
  container_BORDERED: {
    marginVertical: 10,
    width: '50%',

    padding: 15,
    borderColor: Colors.DEFAULT_PURPLE,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Font.AVENIR_BLACK,
  },
  text_TERTIARY: {
    color: Colors.BOLD_BLACK,
    position: 'absolute',
    fontFamily: Font.AVENIR_MEDIUM,
  },
  text_BORDERED: {
    color: Colors.DEFAULT_PURPLE,
    fontFamily: Font.AVENIR_BOLD,
    fontSize: 15,
    alignSelf: 'center',
  },
  text_WHITE: {
    color: Colors.DEFAULT_PURPLE,
    fontFamily: Font.AVENIR_BOLD,
    fontSize: 15,
  },
});

export default CustomButton;
