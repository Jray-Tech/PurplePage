import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Colors, Font} from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeNav = ({onPress, text}) => {
  return (
    <View style={styles.nav}>
          <FontAwesome
            onPress={onPress}
            name='chevron-left'
            color='#000000'
            size={20}
          />
    
          <View style={styles.navText}>
          <Text style={styles.navText}>{text}</Text>
          </View>
          </View>
  )
}
const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 48,
        paddingHorizontal: 20,

  },
  navText: {
    flex: 1,
    alignItems: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    lineHeight: 19
  },
})

export default HomeNav