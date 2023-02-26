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
import AdsBox from './subs/AdsBox';

let AdImage1 = require('../../../assets/images/CharliesBagelGarden.png');
let ProfileImage = require('../../../assets/images/profile1.png');

// import profile from '../../../assets/images/profile1.png';
// import Vector2 from '../../../assets/images/Vector2.png';
//   type: string;
//   image: any;
//   title: string;
//   businessName: string;
//   businessImage: any;
const adsbox = [
  {
    type: 'Product',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
  {
    type: 'Brand',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
  {
    type: 'Product',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
  {
    type: 'Brand',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
  {
    type: 'Product',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
  {
    type: 'Brand',
    image: AdImage1,
    title: 'Yummy Croissants with choolate for the world to eat',
    businessName: 'Charlies Bagel Garden',
    businessImage: ProfileImage,
  },
];
const AdsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 24}}>
        <SearchFilter />
        <Spacer size={20} />
        <Text style={{...globalStyles.textPrimaryGrey, color: Colors.PINK}}>
          All Categories
        </Text>
        <Spacer size={20} />
        {adsbox.map((adbox, index) => (
          <>
            <AdsBox
              key={index.toString()}
              businessImage={adbox.businessImage}
              businessName={adbox.businessName}
              image={adbox.image}
              title={adbox.title}
              type={adbox.type}
            />
            <Spacer size={30} />
          </>
        ))}
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

export default AdsScreen;
