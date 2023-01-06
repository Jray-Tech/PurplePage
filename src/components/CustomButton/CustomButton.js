import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';
import {Colors, Font} from "../../constants";

const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

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
    container_TERTIARY: {
        alignItems: 'flex-end',
        marginVertical: 10,
        paddingBottom: 30,
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
    text_WHITE:{
        color: Colors.DEFAULT_PURPLE,
        fontFamily: Font.AVENIR_BOLD,
        fontSize: 15,
    }

})

export default CustomButton