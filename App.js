import React from 'react';
import {SignInScreen, ForgotPasswordScreen, SignUpScreen, SetNewPasswordScreen, ChooseInterestScreen} from './src/screens/AuthScreen';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Logo from './assets/images/image.png'
const Stack = createStackNavigator();
import {WelcomeScreen, OnboardingScreen} from './src/screens/WelcomeScreen';
import {AccountCreatedSuccessScreen, VerificationScreen, VerifyForgotPasswordScreen, ResetSuccessScreen, SignInVerifyScreen } from './src/screens/VerifyScreen';
import {Colors, Font} from "./src/constants"
import { HomeScreen, NotifyScreen, SearchResultScreen, FilterScreen, BusinessInfoScreen, ReviewScreen, BusinessProduct} from './src/screens/HomeScreen';
import { 
  ListBusinessScreen, 
  BusinessListedScreen, 
  MoreAndBusinnessCreatedScreen, 
  BusinessProfile, 
  AddProductScreen, 
  PostScreen, 
  BlogInsightScreen, 
  PostAdsScreen, 
  PaymentBankTransferScreen, 
  PaymentCardScreen, 
  PaymentSuccessScreen, 
  BusinessProductScreen,
  AccountSettingScreen,
  AddAdminScreen,
  AdminScreen,
  NotificationSettingScreen,
  AdsAndPromotionScreen,
  InAppNotificationScreen,
  EmailNotificationScreen,
  PricingScreen,
  ConnectToSocialScreen,
  PostAnAdScreen,
} from './src/screens/BusinessFlowScreen';


function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('OnboardingScreen')
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
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="SignInVerifyScreen" component={SignInVerifyScreen}/>
        <Stack.Screen name="ChooseInterestScreen" component={ChooseInterestScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
        <Stack.Screen name="VerifyForgotPasswordScreen" component={VerifyForgotPasswordScreen}/>
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen}/>
        <Stack.Screen name="ResetSuccessScreen" component={ResetSuccessScreen}/>
        <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
        <Stack.Screen name="AccountCreatedSuccessScreen" component={AccountCreatedSuccessScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="NotifyScreen" component={NotifyScreen}/>
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen}/>
        <Stack.Screen name="FilterScreen" component={FilterScreen}/>
        <Stack.Screen name="BusinessInfoScreen" component={BusinessInfoScreen}/>
        <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
        <Stack.Screen name="BusinessProduct" component={BusinessProduct}/>
        <Stack.Screen name="ListBusinessScreen" component={ListBusinessScreen}/>
        <Stack.Screen name="BusinessListedScreen" component={BusinessListedScreen}/>
        <Stack.Screen name="MoreAndBusinnessCreatedScreen" component={MoreAndBusinnessCreatedScreen}/>
        <Stack.Screen name="BusinessProfile" component={BusinessProfile}/>
        <Stack.Screen name="AddProductScreen" component={AddProductScreen}/>
        <Stack.Screen name="PostScreen" component={PostScreen}/>
        <Stack.Screen name="BlogInsightScreen" component={BlogInsightScreen}/>
        <Stack.Screen name="PostAdsScreen" component={PostAdsScreen}/>
        <Stack.Screen name="PaymentBankTransferScreen" component={PaymentBankTransferScreen}/>
        <Stack.Screen name="PaymentCardScreen" component={PaymentCardScreen}/>
        <Stack.Screen name="PaymentSuccessScreen" component={PaymentSuccessScreen}/>
        <Stack.Screen name="BusinessProductScreen" component={BusinessProductScreen}/>
        <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen}/>
        <Stack.Screen name="AddAdminScreen" component={AddAdminScreen}/>
        <Stack.Screen name="AdminScreen" component={AdminScreen}/>
        <Stack.Screen name="NotificationSettingScreen" component={NotificationSettingScreen}/>
        <Stack.Screen name="AdsAndPromotionScreen" component={AdsAndPromotionScreen}/>
        <Stack.Screen name="InAppNotificationScreen" component={InAppNotificationScreen}/>
        <Stack.Screen name="EmailNotificationScreen" component={EmailNotificationScreen}/>
        <Stack.Screen name="PricingScreen" component={PricingScreen}/>
        <Stack.Screen name="ConnectToSocialScreen" component={ConnectToSocialScreen}/>
        <Stack.Screen name="PostAnAdScreen" component={PostAnAdScreen}/>
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



  