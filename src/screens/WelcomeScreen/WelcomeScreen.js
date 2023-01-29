import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import {CustomButton} from '../../components/CustomComponents';
import * as Animateble from 'react-native-animatable';
import SignInScreen from '../AuthScreen'
import {Colors, Font} from "../../constants";


const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your One-Stop Digital Marketing Solution</Text>
      </View>
      <Animateble.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text}>Let's get started</Text>
        <CustomButton text="Create an account" onPress={()=> navigation.navigate('SignUpScreen')} type="WHITE"/>
        <Text style={styles.grey}>Have an account? <Text style={styles.pink} text="Create an account" onPress={()=> navigation.navigate('SignInScreen')} type="WHITE">Sign in</Text></Text>
      </Animateble.View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        flex: 2,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    footer: {
        flex: 1,
        backgroundColor: '#7F2F99',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    title: {
       color: Colors.BUTTON_PURPLE,
       fontFamily: Font.AVENIR_BLACK,
       fontSize: 30,
       paddingVertical: 50,
       //fontWeight: 'bold', 
    },
    text: {
        color: Colors.DEFAULT_WHITE,
        marginTop: 5,
        fontSize: 24,
        marginBottom: 40,
        fontFamily: Font.AVENIR_BLACK,
    },
    grey: {
        color: Colors.DEFAULT_GREY,
        marginTop: 5,
        alignItems:'center',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: Font.AVENIR_REGULAR,
    },
    pink: {
        color: Colors.DEFAULT_PINK,
        alignItems:'center',
        textAlign: 'center',
        fontFamily: Font.AVENIR_MEDIUM,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default WelcomeScreen;