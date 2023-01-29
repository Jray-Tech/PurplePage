import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';
import {Colors, Font} from "../../constants";

const Spacer = ({size=1, mt=0, mb=0}) => {
  return (
    <View style={{height:size, marginBottom:mb, marginTop:mt}} />
  )
}

export default Spacer