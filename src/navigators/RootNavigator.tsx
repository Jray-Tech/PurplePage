import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {ActivityIndicator, View} from 'react-native';
import colors from '../constants/Colors';
import OnboardingStack from './OnboardingStack';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppNavigator';

function OnboardingNavigator({userToken}: {userToken: string | null}) {
  if (userToken === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.ACTIVE_PINK} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

function AppNavigator() {
  // var create = useSelector(state => state.NavReducer.create);
  // const AppStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  //   const auth = React.useContext(AuthContext);
  const auth = '123456';

  if (auth !== undefined && auth !== null) {
    return <AppNavigator />;
  } else {
    return <OnboardingNavigator userToken={auth} />;
  }
};

export default RootNavigator;
