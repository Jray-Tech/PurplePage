import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LeftIcon} from '../svg/AppIcons';

const Header = ({color}: {color?: string}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <LeftIcon />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
