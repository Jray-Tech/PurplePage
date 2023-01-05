import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

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
        backgroundColor: '#650585',
        
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 6,
    },
    container_WHITE: {
        backgroundColor: '#ffffff',
        
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
        color: '#ffff',
        fontWeight: 'bold',
    },
    text_TERTIARY: {
        color: '#14011B',
        position: 'absolute'
    }, 
    text_WHITE:{
        color: '#650585',

    }

})

export default CustomButton