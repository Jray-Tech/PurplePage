import React, {useState, useEffect} from 'react';
import {
  SignInScreen,
  ForgotPasswordScreen,
  SignUpScreen,
  SetNewPasswordScreen,
  ChooseInterestScreen,
} from './src/screens/AuthScreen';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Logo from './assets/images/image.png';
const Stack = createStackNavigator();
import {WelcomeScreen, OnboardingScreen} from './src/screens/WelcomeScreen';
import {
  AccountCreatedSuccessScreen,
  VerificationScreen,
  VerifyForgotPasswordScreen,
  ResetSuccessScreen,
  SignInVerifyScreen,
} from './src/screens/VerifyScreen';
// import {Colors, Font} from './src/constants';
import {
  HomeScreen,
  NotifyScreen,
  SearchResultScreen,
  FilterScreen,
  BusinessInfoScreen,
  ReviewScreen,
  BusinessProduct,
} from './src/screens/HomeScreen';
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
import {WithSplashScreen} from './src/utils/WithSplashScreen';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // fetch token here and pass it //TODO: Replace with token.
    // const loadTokenAsync = async () => {
    //   // let app_token = await getSecureValueFor('token');
    //   let app_token = "1234567890"
    //   if (app_token) {
    //     setToken(app_token);
    //   }
    //   setIsAppReady(true);
    // };
    // loadTokenAsync();
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </WithSplashScreen>
  );
}
