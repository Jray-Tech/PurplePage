import { View, Text, StyleSheet, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Font} from "../../constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VerificationScreen = ({navigation}) => {
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const fifthInput = useRef()
  const sixthInput = useRef()
  const {otp, setOtp} = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''})
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.nav}>
        <FontAwesome
            onPress={()=> navigation.navigate('WelcomeScreen')}
            name='chevron-left'
            color='#000000'
            size={20}
          />
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.content}>We sent a 6-digit code to <Text style={styles.phoneNumberText}>080***789</Text> and <Text style={styles.phoneNumberText}>purple***@gmail.com </Text></Text>
      </View>
      <View style={styles.otpSubContainer}>
        <Text>Enter OTP</Text>
        <Text style={styles.countDown}>00:20secs</Text>
      </View>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad" 
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text})
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad" 
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text})
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text})
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad" 
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text})
              text ? fifthInput.current.focus() : thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad" 
            maxLength={1}
            ref={fifthInput}
            onChangeText={text => {
              setOtp({...otp, 5: text})
              text ? sixthInput.current.focus() : fourthInput.current.focus()
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput 
            style={styles.otpText} 
            keyboardType="number-pad" 
            maxLength={1}
            ref={sixthInput}
            onChangeText={text => {
              setOtp({...otp, 6: text})
              !text && fifthInput.current.focus();
            }}
          />
        </View>
      </View>
      <Text style={styles.contentFooter}>Didn’t get the code? <Text style={styles.phoneNumberText}>Request for a new one</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: Font.AVENIR_BOLD,
    lineHeight: 20 * 1.4,
    //width: Display.setWidth(80),
    textAlign: 'center',
  },
  nav: {
    
    justifyContent:'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 48,
  },
  countDown: {
    color: Colors.DASH_PINK,
  },
  title: {
    fontSize: 24,
    justifyContent:'flex-end',
    fontFamily: Font.AVENIR_BOLD,
    color: Colors.HEADER_BLACK,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    
  },
  content: {
    fontSize: 16,
    fontFamily: Font.AVENIR_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    
  },
  contentFooter: {
    fontSize: 16,
    fontFamily: Font.AVENIR_MEDIUM,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font.AVENIR_REGULAR,
    lineHeight: 18 * 1.4,
    color: Colors.BOLD_BLACK,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpSubContainer: {
    marginHorizontal: 25,
    marginBottom: 10,
    justifyContent: 'space-between',
    
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_BLACK,
    borderWidth: 1,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    //height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Font.AVENIR_MEDIUM,
  },
});

export default VerificationScreen;