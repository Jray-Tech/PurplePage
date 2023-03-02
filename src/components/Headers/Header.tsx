import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LeftIcon} from '../svg/AppIcons';
import {globalStyles} from '../styles';
import Colors from '../../constants/Colors';

const Header = ({
  title,
  usePadding = false,
}: {
  title?: string;
  usePadding?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: usePadding ? 24 : 0,
          paddingHorizontal: usePadding ? 24 : 0,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
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
    </View>
  );
};

export default Header;
