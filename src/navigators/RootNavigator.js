import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import {OnboardingScreen, WelcomeScreen} from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  //   const auth = React.useContext(AuthContext);
  const auth = {
    token: '123344445',
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

// <Stack.Navigator headerMode="none">
//   <Stack.Screen name="SplashScreen" component={SplashScreen} />
//   {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
//   {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
//         <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
//         <Stack.Screen name="SignInVerifyScreen" component={SignInVerifyScreen}/>
//         <Stack.Screen name="ChooseInterestScreen" component={ChooseInterestScreen}/>
//         <Stack.Screen name="SignInScreen" component={SignInScreen}/>
//         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
//         <Stack.Screen name="VerifyForgotPasswordScreen" component={VerifyForgotPasswordScreen}/>
//         <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen}/>
//         <Stack.Screen name="ResetSuccessScreen" component={ResetSuccessScreen}/>
//         <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
//         <Stack.Screen name="AccountCreatedSuccessScreen" component={AccountCreatedSuccessScreen}/>
//         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//         <Stack.Screen name="NotifyScreen" component={NotifyScreen}/>
//         <Stack.Screen name="SearchResultScreen" component={SearchResultScreen}/>
//         <Stack.Screen name="FilterScreen" component={FilterScreen}/>
//         <Stack.Screen name="BusinessInfoScreen" component={BusinessInfoScreen}/>
//         <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
//         <Stack.Screen name="BusinessProduct" component={BusinessProduct}/>
//         <Stack.Screen name="ListBusinessScreen" component={ListBusinessScreen}/>
//         <Stack.Screen name="BusinessListedScreen" component={BusinessListedScreen}/>
//         <Stack.Screen name="MoreAndBusinnessCreatedScreen" component={MoreAndBusinnessCreatedScreen}/>
//         <Stack.Screen name="BusinessProfile" component={BusinessProfile}/>
//         <Stack.Screen name="AddProductScreen" component={AddProductScreen}/>
//         <Stack.Screen name="PostScreen" component={PostScreen}/>
//         <Stack.Screen name="BlogInsightScreen" component={BlogInsightScreen}/>
//         <Stack.Screen name="PostAdsScreen" component={PostAdsScreen}/>
//         <Stack.Screen name="PaymentBankTransferScreen" component={PaymentBankTransferScreen}/>
//         <Stack.Screen name="PaymentCardScreen" component={PaymentCardScreen}/>
//         <Stack.Screen name="PaymentSuccessScreen" component={PaymentSuccessScreen}/>
//         <Stack.Screen name="BusinessProductScreen" component={BusinessProductScreen}/>
//         <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen}/>
//         <Stack.Screen name="AddAdminScreen" component={AddAdminScreen}/>
//         <Stack.Screen name="AdminScreen" component={AdminScreen}/>
//         <Stack.Screen name="NotificationSettingScreen" component={NotificationSettingScreen}/>
//         <Stack.Screen name="AdsAndPromotionScreen" component={AdsAndPromotionScreen}/>
//         <Stack.Screen name="InAppNotificationScreen" component={InAppNotificationScreen}/>
//         <Stack.Screen name="EmailNotificationScreen" component={EmailNotificationScreen}/>
//         <Stack.Screen name="PricingScreen" component={PricingScreen}/>
//         <Stack.Screen name="ConnectToSocialScreen" component={ConnectToSocialScreen}/>
//         <Stack.Screen name="PostAnAdScreen" component={PostAnAdScreen}/> */}
// </Stack.Navigator>;
