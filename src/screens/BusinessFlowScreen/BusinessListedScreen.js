import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import Confirmation from '../../../assets/images/Confirmation.png';
import {CustomButton, CustomVerify} from '../../components/CustomComponents';
import {Colors, Font} from '../../constants';

const BusinessListedScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('MoreAndBusinnessCreatedScreen');
  }, 3000);
  return <CustomVerify text="Your business has been successfully listed" />;
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

export default BusinessListedScreen;
