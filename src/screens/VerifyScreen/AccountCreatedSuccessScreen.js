import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import {CustomButton, CustomVerify} from '../../components/CustomComponents';
import Font from '../../constants/Font';

const AccountCreatedSuccessScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('ChooseInterestScreen');
  }, 3000);
  return (
    <CustomVerify text="Your purple pages account has been successfully created" />
  );
};

const styles = StyleSheet.create({
  verifyText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Font.AVENIR_MEDIUM,
    paddingHorizontal: 40,
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 201,
  },
  image: {
    width: 158,
    height: 201,
  },
  textContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    paddingBottom: 30,
  },
});

export default AccountCreatedSuccessScreen;
