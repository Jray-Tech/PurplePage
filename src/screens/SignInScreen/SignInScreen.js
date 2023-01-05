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
import CustomButton from '../../components/CustomButton';

const SignInScreen = ({navigation}) => {
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
        <View style={styles.nav}>
          <FontAwesome
            onPress={()=> navigation.navigate('WelcomeScreen')}
            name='chevron-left'
            color='#000000'
            size={20}
          />
        </View>
        <View style={styles.header}>
          <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_header}>Sign In</Text>
          <Text style={styles.text_footer}>Enter your login details or continue with your social account</Text>
          <Text style={styles.username}>Email</Text>
          <CustomInput placeholder="email" value={email} setValue={setEmail}/>
          <Text style={styles.username}>Password</Text>
          <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <CustomButton text="Forgot Password?" onPress={forgotPasswordPressed} type="TERTIARY"/>
          
          <CustomButton text="Log In" onPress={()=>navigation.navigate('AccountCreatedSuccessScreen')} type="PRIMARY"/>
        <View style={styles.action}>
          <Image source={Rectangle_1} style={[styles.logo, ]} resizeMode="contain" />
          <Text style={styles.action_text}>Or Sign in with</Text>
          <Image source={Rectangle_2} style={[styles.logo, ]} resizeMode="contain" />
        </View>
         <View style={[styles.icons, {paddingHorizontal: 10}]}>
          <Image source={Google} style={[styles.action_text, {marginRight: 30} ]} resizeMode="contain" />
          <Image source={Facebook} style={[styles.action_text, {marginRight: 30}]} resizeMode="contain" />
          <Image source={Twitter} style={[styles.logo]} resizeMode="contain" />
        </View>
        </View>
        
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    
    justifyContent:'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 48,
  },
  header: {
    flex: 1,
    paddingTop: 28,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text_header: {
    color: '#231F20',
    fontWeight: 'bold',
    fontSize: 24,
  },
  text_footer: {
    color: '#333333',
    fontSize: 17,
    paddingBottom: 16,
  },
  username: {
   marginTop: 5,
   color: '#000'
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
});

export default SignInScreen;