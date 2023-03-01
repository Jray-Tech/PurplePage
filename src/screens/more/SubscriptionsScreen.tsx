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
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import SearchFilter from '../../components/Headers/SearchFilter';
import {Spacer} from '../../components/CustomComponents';
import {globalStyles} from '../../components/styles';
import Header from '../../components/Headers/Header';
import Subscriptions from './subs/Subscriptions';
const subs = [
  {title: 'Closets'},
  {title: 'CShoes By Mia'},
  {title: 'Davido'},

  {title: 'Regina'},
  {title: 'Micheals'},
  {title: 'Make school fun again'},
];
const SubscriptionsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <Header title="Subscriptions" />
        <Spacer size={16} />
        <Text
          style={{
            ...globalStyles.regularDarkText,
            color: Colors.PINK,
            textAlign: 'right',
          }}>
          Done
        </Text>
        <Spacer size={32} />
        {subs.map((sub, index) => (
          <>
            <Subscriptions title={sub.title} key={index.toString()} />
            <Spacer size={16} />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    // marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default SubscriptionsScreen;
