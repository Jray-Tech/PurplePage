import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Nav = ({onPress}) => {
  return (
    <View style={styles.nav}>
          <FontAwesome
            name='chevron-left'
            color='#000000'
            size={20}
            onPress={onPress}
          />
        </View>
  )
}
const styles = StyleSheet.create({
nav: {
    
    justifyContent:'flex-end',
    paddingBottom: 10,
    paddingTop: 38,
  },
})

export default Nav