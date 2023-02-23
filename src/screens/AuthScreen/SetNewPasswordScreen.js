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
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/CustomInput';
import {CustomButton, Nav} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';

const SetNewPasswordScreen = ({navigation}) => {
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
        <Text style={styles.text_header}>Reset your Password?</Text>
        <Text style={styles.text_footer}>Enter a new password</Text>

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
        <View style={styles.space}>
          <Text style={styles.username}>Confirm Password</Text>
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
        </View>
        <View style={styles.requireContainer}>
          <AntDesign
            name="checkcircle"
            size={14}
            color={Colors.DASH_GREEN}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
          <Text style={styles.require}>At least 8 characters</Text>
        </View>
        <View style={styles.requireContainer}>
          <AntDesign
            name="checkcircle"
            size={14}
            color={Colors.DASH_GREEN}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
          <Text style={styles.require}>Lower case letters (a-z)</Text>
        </View>
        <View style={styles.requireContainerB}>
          <Feather
            name="circle"
            size={14}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
          <Text style={styles.requireB}>Upper case letters (A-Z)</Text>
        </View>

        <View style={styles.requireContainerB}>
          <Feather
            name="circle"
            size={14}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
          <Text style={styles.requireB}>Numbers (0-9)</Text>
        </View>

        <View style={styles.requireContainerB}>
          <Feather
            name="circle"
            size={14}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
          <Text style={styles.requireB}>Special Character (!,#...*)</Text>
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Continue"
            onPress={() => navigation.navigate('ResetSuccessScreen')}
            type="PRIMARY"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  nav: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 48,
  },
  space: {
    paddingBottom: 20,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingHorizontal: 20,
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
  require: {
    fontFamily: Font.AVENIR_MEDIUM,
    //fontWeight: 'bold',
    color: Colors.DASH_GREEN,
  },
  requireB: {
    fontFamily: Font.AVENIR_MEDIUM,
    //fontWeight: 'bold',
    color: Colors.DEFAULT_GREY,
  },
  requireContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  requireContainerB: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  button: {
    flex: 1,
    alignItem: 'center',
    paddingBottom: 30,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    paddingBottom: 30,
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SetNewPasswordScreen;
