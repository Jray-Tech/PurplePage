import React from 'react';
import {SignInScreen, ForgotPasswordScreen, SignUpScreen, SetNewPasswordScreen} from './src/screens/AuthScreen';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Logo from './assets/images/image.png'
const Stack = createStackNavigator();
import WelcomeScreen from './src/screens/WelcomeScreen';
import {AccountCreatedSuccessScreen, VerificationScreen, VerifyForgotPasswordScreen, ResetSuccessScreen, SignInVerifyScreen } from './src/screens/VerifyScreen';
import {Colors, Font} from "./src/constants"
import { HomeScreen, NotifyScreen, SearchResultScreen } from './src/screens/HomeScreen';

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('WelcomeScreen')
  }, 3000);
  return (
    <View style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <View style={styles.imageContainer}>
        <Image 
          source={Logo}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>A product of GreenINK Ltd</Text>
      </View>
    </View>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignInVerifyScreen" component={SignInVerifyScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
        <Stack.Screen name="VerifyForgotPasswordScreen" component={VerifyForgotPasswordScreen}/>
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen}/>
        <Stack.Screen name="ResetSuccessScreen" component={ResetSuccessScreen}/>
        <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
        <Stack.Screen name="AccountCreatedSuccessScreen" component={AccountCreatedSuccessScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="NotifyScreen" component={NotifyScreen}/>
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
  },
  imageContainer: {
    height: 201,
    paddingTop: 200,
  },
  image: {
    width: 158,
    height: 201,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  text: {
    fontFamily: Font.AVENIR_MEDIUM,
    color: Colors.HEADER_BLACK,
  },
  root: {
    flex: 1,
    backgroundColor: "red",
  }
});



  