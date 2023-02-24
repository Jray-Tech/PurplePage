import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {NotifyScreen} from '../screens/HomeScreen/NofityScreen';
import {SearchResultScreen} from '../screens/HomeScreen/SearchResultScreen';
import {FilterScreen} from '../screens/HomeScreen/FilterScreen';
import {BusinessInfoScreen} from '../screens/HomeScreen/BusinessInfoScreen';
import {ReviewScreen} from '../screens/HomeScreen/ReviewScreen';
import {BusinessProduct} from '../screens/HomeScreen/BusinessProduct';
import {ListBusinessScreen} from '../screens/BusinessFlowScreen/ListBusinessScreen';
import {BusinessListedScreen} from '../screens/BusinessFlowScreen/BusinessListedScreen';
import {MoreAndBusinnessCreatedScreen} from '../screens/BusinessFlowScreen/MoreAndBusinessCreatedScreen';
import {BusinessProfile} from '../screens/BusinessFlowScreen/BusinessProfile';
import {AddProductScreen} from '../screens/BusinessFlowScreen/AddProductScreen';
import {PostScreen} from '../screens/BusinessFlowScreen/PostScreen';
import {BlogInsightScreen} from '../screens/BusinessFlowScreen/BlogInsightScreen';
import {PostAdsScreen} from '../screens/BusinessFlowScreen/PostAdsScreen';
import {PaymentBankTransferScreen} from '../screens/BusinessFlowScreen/PaymentBankTransferScreen';
import {PaymentCardScreen} from '../screens/BusinessFlowScreen/PaymentCardScreen';
import {PaymentSuccessScreen} from '../screens/BusinessFlowScreen/PaymentSuccessScreen';
import {BusinessProductScreen} from '../screens/BusinessFlowScreen/BusinessProductScreen';
import {AccountSettingScreen} from '../screens/BusinessFlowScreen/AccountSettingScreen';
import {AddAdminScreen} from '../screens/BusinessFlowScreen/AddAdminScreen';
import {AdminScreen} from '../screens/BusinessFlowScreen/AdminScreen';
import {NotificationSettingScreen} from '../screens/BusinessFlowScreen/NotificationSettingScreen';
import {AdsAndPromotionScreen} from '../screens/BusinessFlowScreen/AdsAndPromotionScreen';
import {InAppNotificationScreen} from '../screens/BusinessFlowScreen/InAppNotificationScreen';
import {EmailNotificationScreen} from '../screens/BusinessFlowScreen/EmailNotificationScreen';
import {PricingScreen} from '../screens/BusinessFlowScreen/PricingScreen';
import {ConnectToSocialScreen} from '../screens/BusinessFlowScreen/ConnectToSocialScreen';
import BottomTabNavigator from './BottomTabNavigator';

const App = createNativeStackNavigator();

const AppStack = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      {/* <App.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
      <App.Screen name="Main" component={BottomTabNavigator} />
      {/* <App.Screen name="HomeScreen" component={HomeScreen} /> */}
      <App.Screen name="NotifyScreen" component={NotifyScreen} />
      <App.Screen name="SearchResultScreen" component={SearchResultScreen} />
      <App.Screen name="FilterScreen" component={FilterScreen} />
      <App.Screen name="BusinessInfoScreen" component={BusinessInfoScreen} />
      <App.Screen name="ReviewScreen" component={ReviewScreen} />
      <App.Screen name="BusinessProduct" component={BusinessProduct} />
      <App.Screen name="ListBusinessScreen" component={ListBusinessScreen} />
      <App.Screen
        name="BusinessListedScreen"
        component={BusinessListedScreen}
      />
      <App.Screen
        name="MoreAndBusinnessCreatedScreen"
        component={MoreAndBusinnessCreatedScreen}
      />
      <App.Screen name="BusinessProfile" component={BusinessProfile} />
      <App.Screen name="AddProductScreen" component={AddProductScreen} />
      <App.Screen name="PostScreen" component={PostScreen} />
      <App.Screen name="BlogInsightScreen" component={BlogInsightScreen} />
      <App.Screen name="PostAdsScreen" component={PostAdsScreen} />
      <App.Screen
        name="PaymentBankTransferScreen"
        component={PaymentBankTransferScreen}
      />
      <App.Screen name="PaymentCardScreen" component={PaymentCardScreen} />
      <App.Screen
        name="PaymentSuccessScreen"
        component={PaymentSuccessScreen}
      />
      <App.Screen
        name="BusinessProductScreen"
        component={BusinessProductScreen}
      />
      <App.Screen
        name="AccountSettingScreen"
        component={AccountSettingScreen}
      />
      <App.Screen name="AddAdminScreen" component={AddAdminScreen} />
      <App.Screen name="AdminScreen" component={AdminScreen} />
      <App.Screen
        name="NotificationSettingScreen"
        component={NotificationSettingScreen}
      />
      <App.Screen
        name="AdsAndPromotionScreen"
        component={AdsAndPromotionScreen}
      />
      <App.Screen
        name="InAppNotificationScreen"
        component={InAppNotificationScreen}
      />
      <App.Screen
        name="EmailNotificationScreen"
        component={EmailNotificationScreen}
      />
      <App.Screen name="PricingScreen" component={PricingScreen} />
      <App.Screen
        name="ConnectToSocialScreen"
        component={ConnectToSocialScreen}
      />
      <App.Screen name="PostAnAdScreen" component={PostAdsScreen} />
    </App.Navigator>
  );
};

export default AppStack;
