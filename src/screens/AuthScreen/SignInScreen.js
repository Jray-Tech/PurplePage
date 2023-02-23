import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo.png';
import Rectangle_1 from '../../../assets/images/Rectangle_1.png';
import Rectangle_2 from '../../../assets/images/Rectangle_2.png';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Twitter from '../../../assets/images/twitter.png';
import Feather from 'react-native-vector-icons/Feather';
import {CustomButton, Nav} from '../../components/CustomComponents';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';

const SignInScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Log in');
  };

  const forgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  return (
    <View style={styles.container}>
      <Nav onPress={() => navigation.goBack()} />
      <View style={styles.header}>
        <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_header}>Sign In</Text>
        <Text style={styles.text_footer}>
          Enter your login details or continue with your social account
        </Text>
        <Text style={styles.username}>Email</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
            />
          </View>
        </View>
        <Text style={styles.username}>Password</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              secureTextEntry={isPasswordShow ? false : true}
              placeholder="Password"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              onChangeText={text => setPassword(text)}
            />
            <Feather
              name={isPasswordShow ? 'eye' : 'eye-off'}
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{marginRight: 10}}
              onPress={() => setIsPasswordShow(!isPasswordShow)}
            />
          </View>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            Forgot Password?
          </Text>
        </View>
        <CustomButton
          text="Log In"
          onPress={() => navigation.navigate('SignInVerifyScreen')}
          type="PRIMARY"
        />
        <View style={styles.action}>
          <Image
            source={Rectangle_1}
            style={[styles.logo]}
            resizeMode="contain"
          />
          <Text style={styles.action_text}>Or Sign in with</Text>
          <Image
            source={Rectangle_2}
            style={[styles.logo]}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.icons, {paddingHorizontal: 10}]}>
          <Image
            source={Google}
            style={[styles.action_text, {marginRight: 30}]}
            resizeMode="contain"
          />
          <Image
            source={Facebook}
            style={[styles.action_text, {marginRight: 30}]}
            resizeMode="contain"
          />
          <Image source={Twitter} style={[styles.logo]} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  header: {
    flex: 1,
    paddingTop: 18,
    alignItems: 'center',
  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginTop: 5,
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
    marginTop: 10,
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
  forgotPassword: {
    fontFamily: Font.AVENIR_BLACK,
    fontWeight: 'bold',
    color: Colors.BOLD_BLACK,
    paddingTop: 16,
    paddingBottom: 40,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  action_text: {
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
    justifyContent: 'space-between',
  },
});

export default SignInScreen;
