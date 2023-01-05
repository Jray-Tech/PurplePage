import { View,  Paragraph, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Log in")
  }

  const forgotPasswordPressed = () => {
    console.warn("Forgot Passworf")
  }

  return (
    
    <View style={{
        backgroundColor: 'white',
        padding: 10,
        flex: 1,
      }}>
      <View style={styles.image}>
      <Image source={Logo} style={[styles.logo, ]} resizeMode="contain" />
      </View>
      <Text style={styles.text}>Sign in</Text>
      <Text style={styles.paragraph}>Enter your login details or continue with your social account</Text>
      <Text style={styles.username}>Email</Text>
      <CustomInput placeholder="email" value={email} setValue={setEmail}/>
      <Text style={styles.username}>Password</Text>
      <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Log In" onPress={onSignInPressed} type="PRIMARY"/>
      <CustomButton text="Forgot Password?" onPress={forgotPasswordPressed} type="TERTIARY"/>
      <Text>Or Sign in with</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  root: {
    position: 'relative',
    paddingTop: 56,
    margin: 10,
  },
  image:{
    alignItems: 'center',
    paddingTop: 56,
  },
  
  logo: {
    height: 120,
    maxWidth: '30%',
    Maxwidth: '30%',
  },
  text: {
   fontSize: 20,
   fontWeight: 'bold',
   color: '#231F20',
  },
  paragraph: {
   color: '#333333',
   fontSize: 14,
   marginBottom: 16,
  },
  username: {
   marginTop: 16,
   color: '#000'
  },
  
  
})

export default SignInScreen