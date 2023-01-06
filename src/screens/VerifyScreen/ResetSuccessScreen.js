import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react';
import Confirmation from '../../../assets/images/Confirmation.png';
import CustomButton from '../../components/CustomButton';
import {Colors, Font} from "../../constants";


const ResetSuccessScreen = ({navigation}) => {
  return (
    <View style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }}>
    <View style={styles.imageContainer}>
        <Image 
            source={Confirmation} style={[styles.logo, ]} resizeMode="contain" />
        <Text style={styles.verifyText}>Your password has been successfully reset</Text>
    </View>
      
    <View style={styles.textContainer}>
        <CustomButton text="Go home" onPress={()=> navigation.navigate('HomeScreen')} type="PRIMARY"/>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    alignItems: 'center',
  },
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
    flex: 1,
    height: 201,
    paddingTop: 200,
  },
  image: {
    width: 158,
    height: 201,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    paddingBottom: 30,
  },
  
});


export default ResetSuccessScreen;