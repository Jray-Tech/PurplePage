import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles';
import {Spacer} from '../CustomComponents';
import Colors from '../../constants/Colors';

const ProfileHeader = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../../../assets/images/shoe.png')}
        style={{width: 90, height: 90, borderRadius: 45}}
      />
      <View
        style={{
          marginLeft: 24,
        }}>
        <Text style={globalStyles.textHeader}>Purple Ify</Text>
        <Text style={globalStyles.textPrimaryGrey}>@Purple Ify</Text>
        <Spacer size={12} />
        <Text
          style={{
            ...globalStyles.textPrimaryGrey,
            color: Colors.PINK,
          }}>
          Edit Profile
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
