import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Confirmation from '../../../assets/images/Confirmation.png';
import {Colors, Font} from '../../constants';

const CustomVerify = ({text}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={Confirmation}
          style={[styles.logo]}
          resizeMode="contain"
        />
        <Text style={styles.verifyText}>{text}</Text>
      </View>
    </View>
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

export default CustomVerify;
