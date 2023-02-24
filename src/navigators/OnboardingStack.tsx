import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen, WelcomeScreen} from '../screens/WelcomeScreen';
import {
  ChooseInterestScreen,
  ForgotPasswordScreen,
  SetNewPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens/AuthScreen';
import {
  AccountCreatedSuccessScreen,
  ResetSuccessScreen,
  SignInVerifyScreen,
  VerificationScreen,
  VerifyForgotPasswordScreen,
} from '../screens/VerifyScreen';

const Onboarding = createNativeStackNavigator();
const OnboardingScreens = [];

const OnboardingStack = () => {
  return (
    <Onboarding.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <Onboarding.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Onboarding.Screen name="SignUpScreen" component={SignUpScreen} />
      <Onboarding.Screen
        name="SignInVerifyScreen"
        component={SignInVerifyScreen}
      />
      <Onboarding.Screen
        name="ChooseInterestScreen"
        component={ChooseInterestScreen}
      />
      <Onboarding.Screen name="SignInScreen" component={SignInScreen} />
      <Onboarding.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Onboarding.Screen
        name="VerifyForgotPasswordScreen"
        component={VerifyForgotPasswordScreen}
      />
      <Onboarding.Screen
        name="SetNewPasswordScreen"
        component={SetNewPasswordScreen}
      />
      <Onboarding.Screen
        name="ResetSuccessScreen"
        component={ResetSuccessScreen}
      />
      <Onboarding.Screen
        name="VerificationScreen"
        component={VerificationScreen}
      />
      <Onboarding.Screen
        name="AccountCreatedSuccessScreen"
        component={AccountCreatedSuccessScreen}
      />
    </Onboarding.Navigator>
  );
};

export default OnboardingStack;
