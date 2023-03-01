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
import ProfileHeader from '../../components/Profile/ProfileHeader';
import MorePrimary from './subs/MorePrimary';

const MoreAndBusinessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <MorePrimary />
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

export default MoreAndBusinessScreen;
