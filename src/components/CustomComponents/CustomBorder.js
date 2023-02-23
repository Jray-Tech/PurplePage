import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Colors, Font} from '../../constants';

const CustomBorder = ({onPress, text, type}) => {
  return <View style={styles.CustomBorder}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  CustomBorder: {
    borderBottomColor: Colors.DEFAULT_GREY,
    borderBottomWidth: 0.7,
  },
});

export default CustomBorder;
