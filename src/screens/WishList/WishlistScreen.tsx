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
import Font from '../../constants/Font';
import WishListProducts from './subs/WishListProducts';
import WishListBlogs from './subs/WishListBlogs';

const WishlistScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer size={24} />
        <Text
          style={{
            ...globalStyles.textMainHeader,
            fontSize: 24,
          }}>
          My Wishlist
        </Text>
        <Spacer size={16} />
        <WishListProducts />
        <Spacer size={32} />

        <WishListBlogs />
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

export default WishlistScreen;
