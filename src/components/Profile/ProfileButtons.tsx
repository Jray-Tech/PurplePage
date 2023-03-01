import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles';
import {ArrowRight} from '../svg/AppIcons';
import Colors from '../../constants/Colors';

const ProfileButtons = ({screen, title}) => {
  const {navigate} = useNavigation<any>();
  const gotTo = () => {
    navigate(screen);
  };
  return (
    <Pressable onPress={gotTo}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{...globalStyles.textPrimary, color: Colors.SECONDARY_GREY}}>
          {title}
        </Text>
        <ArrowRight />
      </View>
    </Pressable>
  );
};

export default ProfileButtons;
