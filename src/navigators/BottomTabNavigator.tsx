import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {BlogScreenIcon, HomeScreenIcon} from '../components/svg/AppIcons';
import colors from '../constants/Colors';
import BlogScreen from '../screens/Blog/BlogScreen';

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  headerPressColor: 'green',
  tabBarStyle: {
    paddingTop: Platform.OS == 'ios' ? 10 : 0,
    backgroundColor: 'white',

    // shadowRadius: 8,
  },
};
const TabArr = [
  {
    route: 'HomeScreen',
    icon: HomeScreenIcon,
    component: HomeScreen,
  },
  {
    route: 'BlogScreen',
    icon: BlogScreenIcon,
    component: BlogScreen,
  },
  {
    route: 'HomeScreen2',
    icon: HomeScreenIcon,
    component: HomeScreen,
  },
];
const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {focused, route, onPress} = props;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={
        {
          // alignItems: 'center',
          // justifyContent: 'space-between',
          // backgroundColor: 'red',
          // flex: 1,
        }
      }>
      <>
        <View style={styles.container}>
          {route == 'HomeScreen' && <HomeScreenIcon active={focused} />}
          {route == 'BlogScreen' && <BlogScreenIcon active={focused} />}
          {route == 'HomeScreen2' && <HomeScreenIcon active={focused} />}
        </View>
        {focused ? (
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 20,
              marginBottom: 6,
              backgroundColor: colors.DEFAULT_PURPLE,
            }}
          />
        ) : null}
      </>
    </TouchableWithoutFeedback>
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={screenOptions}>
      {TabArr.map((i, index) => (
        <Tab.Screen
          key={index.toString()}
          name={i.route}
          component={i.component}
          options={{
            tabBarIcon: ({focused}) => (
              <TabButton focused={focused} route={i.route} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#44BFBA',
    width: 20,
    height: 20,
    position: 'absolute',
    borderRadius: 40,
    right: -8,
    top: -6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});
