import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LeftIcon} from '../svg/AppIcons';
import {globalStyles} from '../styles';
import Colors from '../../constants/Colors';

const Header = ({title}: {title?: string}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 6,
        }}>
        <LeftIcon />
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              ...globalStyles.textPrimary,
              color: Colors.SECONDARY_GREY,
              textAlign: 'center',
            }}
            numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Header;
