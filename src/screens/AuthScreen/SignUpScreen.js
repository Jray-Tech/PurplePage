import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
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
import CustomInput from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';
import CheckBox from '@react-native-community/checkbox';
import * as yup from 'yup';
import {Formik} from 'formik';

const registrationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  phone: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please Enter Valid Email')
    .required('email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const SignUpScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onSignInPressed = () => {
    console.warn('Log in');
  };

  const forgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={registrationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View>
              <View style={styles.header}>
                <View style={styles.headerLogo}>
                  <Image
                    source={Logo}
                    style={[styles.logo]}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.text_header}>Sign Up</Text>
                <Text style={styles.text_footer}>
                  or{' '}
                  <Text
                    style={styles.terms}
                    onPress={() => navigation.navigate('SignInScreen')}>
                    sign into your account
                  </Text>
                </Text>
                <Text style={styles.username}>Username</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputSubContainer}>
                    <TextInput
                      placeholder="Purplepages"
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    />
                  </View>
                </View>
                {errors.username && touched.username && (
                  <Text style={styles.errors}>
                    <Feather
                      name={'alert-circle'}
                      size={14}
                      color={Colors.DEFAULT_RED}
                      style={{marginRight: 10}}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />{' '}
                    {errors.username}
                  </Text>
                )}

                <Text style={styles.username}>Phone Number</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputSubContainer}>
                    <TextInput
                      placeholder="+234 000 0000 000"
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                    />
                  </View>
                </View>
                {errors.phone && touched.phone && (
                  <Text style={styles.errors}>
                    <Feather
                      name={'alert-circle'}
                      size={14}
                      color={Colors.DEFAULT_RED}
                      style={{marginRight: 10}}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />{' '}
                    {errors.phone}
                  </Text>
                )}
                <Text style={styles.username}>Email</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputSubContainer}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errors}>
                    <Feather
                      name={'alert-circle'}
                      size={14}
                      color={Colors.DEFAULT_RED}
                      style={{marginRight: 10}}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />{' '}
                    {errors.email}
                  </Text>
                )}
                <Text style={styles.username}>Password</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputSubContainer}>
                    <TextInput
                      secureTextEntry={isPasswordShow ? false : true}
                      placeholder="Placeholder text"
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      //onChangeText={text => setPassword(text)}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
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
                {errors.password && touched.password && (
                  <Text style={styles.errors}>
                    <Feather
                      name={'alert-circle'}
                      size={14}
                      color={Colors.DEFAULT_RED}
                      style={{marginRight: 10}}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />{' '}
                    {errors.password}
                  </Text>
                )}
                <Text style={styles.username}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputSubContainer}>
                    <TextInput
                      secureTextEntry={isPasswordShow ? false : true}
                      placeholder="Placeholder text"
                      placeholderTextColor={Colors.DEFAULT_GREY}
                      selectionColor={Colors.DEFAULT_GREY}
                      style={styles.inputText}
                      //onChangeText={text => setPassword(text)}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
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
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errors}>
                    <Feather
                      name={'alert-circle'}
                      size={14}
                      color={Colors.DEFAULT_RED}
                      style={{marginRight: 10}}
                      onPress={() => setIsPasswordShow(!isPasswordShow)}
                    />{' '}
                    {errors.confirmPassword}
                  </Text>
                )}
                <View style={styles.forgotPasswordContainer}>
                  <CheckBox
                    style={styles.forgotPassword}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    I agree to purple pages{' '}
                    <Text style={styles.terms}>Terms & Conditions</Text>
                  </Text>
                </View>
                <CustomButton
                  text="Continue"
                  onPress={() => navigation.navigate('VerificationScreen')}
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
                <View style={[styles.icons, {paddingHorizontal: 20}]}>
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
                  <Image
                    source={Twitter}
                    style={[styles.logo]}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 48,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  headerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 36,
    paddingBottom: 32,
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
  errors: {
    color: Colors.DEFAULT_RED,
    paddingTop: 5,
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
    color: Colors.DEFAULT_GREY,
    paddingTop: 16,
    paddingBottom: 40,
    fontSize: 14,
    justifyContent: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 58,
  },
  terms: {
    color: Colors.DEFAULT_PURPLE,
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
  inputText: {
    fontSize: 14,
    textAlignVertical: 'center',
    padding: 10,
    color: Colors.DEFAULT_BLACK,
    flex: 1,
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

export default SignUpScreen;
