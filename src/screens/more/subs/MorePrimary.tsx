import {Text, View, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../constants/Colors';
import SearchFilter from '../../../components/Headers/SearchFilter';
import {Spacer} from '../../../components/CustomComponents';
import {globalStyles} from '../../../components/styles';
import ProfileHeader from '../../../components/Profile/ProfileHeader';
import ProfileButtons from '../../../components/Profile/ProfileButtons';

const buttons = [
  {screen: '', title: 'Account Settings '},
  {screen: '', title: 'Subscriptions '},
  {screen: '', title: 'Display Settings '},
  {screen: '', title: 'FAQs '},
  {screen: '', title: 'About '},
  {screen: '', title: 'Let’s talk '},
];
const MorePrimary = () => {
  return (
    <View>
      <ProfileHeader />

      <Spacer size={40} />
      {buttons.map((button, index) => (
        <>
          <ProfileButtons screen={button.screen} title={button.title} />
          <Spacer size={24} />
        </>
      ))}
    </View>
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

export default MorePrimary;
