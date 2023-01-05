import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Logo from './assets/images/image.png'
const Stack = createStackNavigator();
import WelcomeScreen from './src/screens/WelcomeScreen';
import {AccountCreatedSuccessScreen, VerificationScreen } from './src/screens/VerifyScreen';


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
        <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
        <Stack.Screen name="AccountCreatedSuccessScreen" component={AccountCreatedSuccessScreen}/>
        
        
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
  },
  root: {
    flex: 1,
    backgroundColor: "red",
  }
});



  