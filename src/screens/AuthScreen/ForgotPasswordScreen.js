import { Text, View, Button, StyleSheet, TouchableOpacity, Platform, Image, TextInput } from 'react-native'
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo.png';
import Rectangle_1 from '../../../assets/images/Rectangle_1.png';
import Rectangle_2 from '../../../assets/images/Rectangle_2.png';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Twitter from '../../../assets/images/twitter.png';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CustomInput from '../../components/CustomInput';
import {CustomButton, Nav} from '../../components/CustomComponents';
import {Colors, Font} from "../../constants"

const ForgotPasswordScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn("Log in")
  }

  const forgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }
    return (
      <View style={styles.container}>
        <Nav onPress={()=> navigation.goBack()}/>
        <View style={styles.header}>
          
          <Text style={styles.text_header}>Forgot Password?</Text>
          <Text style={styles.text_footer}>Enter the email associated with your purple pages account</Text>
          
          
          <Text style={styles.username}>Email</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              
              <TextInput 
                placeholder="Placeholder text"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setPassword(text)}
                
              />
              <Feather 
                name='check-circle'
                size={22}
                color={Colors.DASH_GREEN}
                style={{marginRight: 10}}
                onPress={()=>navigation.navigate('VerifyForgotPasswordScreen')}
              />
            </View>
          </View>
          <View style={styles.containerBottom}>
            <Text style={styles.bottomText}>Remember your password? <Text onPress={()=>navigation.navigate('SignInScreen')} style={styles.bottomTextLogin}>Log in</Text> now</Text>
          </View>
         
        </View>
        
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  nav: {
    justifyContent:'flex-end',
    paddingBottom: 10,
    paddingTop: 18,
  },
  containerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    
  },
  bottomText: {
    fontFamily: Font.AVENIR_MEDIUM,
  },
  bottomTextLogin: {
    fontFamily: Font.AVENIR_BOLD,
    color: Colors.BUTTON_PURPLE,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingVertical: 10,
    marginTop: 10,
  },
  
  text_header: {
    color: Colors.BOLD_BLACK,
    fontSize: 24,
    fontFamily: Font.AVENIR_BOLD,
  },
  text_footer: {
    color: Colors.SECONDARY_GREY,
    fontSize: 17,
    paddingBottom: 16,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  username: {
   marginTop: 15,
   color: Colors.SECONDARY_GREY,
   fontFamily: Font.AVENIR_MEDIUM,
   paddingBottom: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    marginHorizontal: 5,
    
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    
    
  },
  action_text:{
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  
  button: {
    alignItem: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default ForgotPasswordScreen;