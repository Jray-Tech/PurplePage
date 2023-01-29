import { Text, View, Button, StyleSheet, TouchableOpacity, Platform, Image, FlatList, TextInput, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react';
import PurpleCloset from '../../../assets/images/purplecloset.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {CustomButton, CustomBottomTab, Nav, HomeNav, CustomBorder, Spacer} from '../../components/CustomComponents';
import {Colors, Font} from "../../constants"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Visa from '../../../assets/images/visa.png';
import Mastercard from '../../../assets/images/mastercard.png';
import Flutterwave from '../../../assets/images/flutterwave.png';
import Paystack from '../../../assets/images/paystack.png';
import Verve from '../../../assets/images/verve.png';




const PaymentBankTransferScreen = ({navigation}) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const location = [
    {location: 'Jumia', image: '0ne'},
    {location: 'Shopify', image: 't0ne'},
  ];
  const [myData, setMyData]=useState(location)
  const [password, setPassword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Lagos')
    return (
      <View style={styles.container}>
      
        
          <HomeNav text="Payment" onPress={()=> navigation.goBack()}/>
        
        <View style={styles.header}>
            <View style={styles.body}>
            <Text style={styles.duration}>
                Monthly Premium plan 1 Month
            </Text>
            <Text style={styles.result}>
                Edit
            </Text>
            </View>
            <View style={styles.body}>
            <Text style={styles.price}>
                Total:
            </Text>
            <Text style={styles.total}>
                ₦14,000.00
            </Text>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical:32}}>
                <Text style={styles.total}>Select payment method</Text>
            </View>
            <View style={{paddingHorizontal: 20, }}>
            <Pressable onPress={()=>navigation.navigate('PaymentCardScreen')}>
            <View style={{flexDirection:'row', justifyContent:'space-between',  borderColor: Colors.BORDER_COLOR, borderRadius: 10, borderWidth: 1, height: 72, alignItems: 'center', paddingHorizontal: 10, }}>
            <Image source={Paystack} resizeMode="contain"/>
            <View style={{flexDirection:'row', }}>
                <View style={{paddingRight: 6}}>
                <Image source={Verve} resizeMode="contain"/>
                </View>
                <View style={{paddingRight: 6}}>
                <Image source={Mastercard} resizeMode="contain"/>
                </View>
                <Image source={Visa} resizeMode="contain"/>
            </View>
            </View>
            </Pressable>
            <Spacer size={24} />
            <Pressable onPress={()=>navigation.navigate('PaymentCardScreen')}>
            <View style={{flexDirection:'row', justifyContent:'space-between',  borderColor: Colors.BORDER_COLOR, borderRadius: 10, borderWidth: 1, height: 72, alignItems: 'center', paddingHorizontal: 10,}}>
            <Image source={Flutterwave} resizeMode="contain"/>
            <View style={{flexDirection:'row', }}>
                <View style={{paddingRight: 6}}>
                <Image source={Verve} resizeMode="contain"/>
                </View>
                <View style={{paddingRight: 6}}>
                <Image source={Mastercard} resizeMode="contain"/>
                </View>
                <Image source={Visa} resizeMode="contain"/>
            </View>
            </View>
            </Pressable>
    </View>    
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    
  },
  headerBlogText: {
    color: Colors.HEADER_BLACK,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Font.AVENIR_BLACK,
    paddingHorizontal: 20,
  },
  price: {
    fontFamily: Font.AVENIR_MEDIUM,
    paddingRight: 20,
    paddingBottom: 9,
  },
  pubDate: {
    paddingRight: 20,
    paddingTop: 20
  },
  buttonView: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
   total: {
    color: Colors.HEADER_BLACK,
    fontFamily: Font.AVENIR_BLACK,
    fontSize: 14,
    

  },
  rank: {
    flexDirection: 'row',
  },
  InsightsHeader: {
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    justifyContent: 'space-between',
  },
  InsightsBody: {
    color: Colors.LIGHT_MODE_GREY, 
    fontFamily: Font.AVENIR_REGULAR, 
    lineHeight: 19.6,
  },
  InsightsResult: {
    color: Colors.LIGHT_MODE_GREY, 
    fontFamily: Font.AVENIR_MEDIUM, 
    lineHeight: 19.6
  },
  nav: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    width: '100%',
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  categoryList: {
    paddingHorizontal: 15,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  dropdownArea: {
    width: '98%',
    
    height: 80,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 5,
    alignSelf: 'center',
  },
  body: {
   paddingHorizontal: 20,
   flexDirection: 'row',
  },
  duration: {
    fontFamily: Font.AVENIR_MEDIUM,
    paddingRight: 20,
    paddingBottom: 9,
    width: 187,
    lineHeight: 27,
  },
  images: {
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingVertical: 10,
    marginTop: 10,
  },
  text_header: {
    color: Colors.PINK,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  text_footer: {
    color: Colors.SECONDARY_GREY,
    fontSize: 17,
    paddingBottom: 16,
    fontFamily: Font.AVENIR_MEDIUM,
  },
  username: {
   marginTop: 15,
   color: Colors.SECONDARY_GREY,
   fontFamily: Font.AVENIR_MEDIUM,
   paddingBottom: 10,
  },
  tab: {
    width: 90,
    height: 4,
  },
  
  action: {
    flexDirection: 'row',
    //marginTop: 10,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  
  result: {
    color: Colors.PINK,
    fontFamily: Font.AVENIR_MEDIUM,
    fontSize: 14,
    position: 'absolute', 
    marginHorizontal: 219,

  },
  filterContainer: {
    alignItems: 'flex-end',
  },
  filterSubContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    
    
  },
  action_text:{
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: Font.AVENIR_MEDIUM,
  },

  bussinessName: {
    fontSize: 19,
    marginBottom: 5,
    color: Colors.BOLD_BLACK,
    fontFamily: Font.AVENIR_BOLD,
  },
  dropdownSelector: {
    width: '100%',
    height: 50,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  bussinessCategory: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.CATEGORY_PURPLE,
    fontFamily: Font.AVENIR_BOLD,
  },
  bussinessLocation: {
    fontFamily: Font.AVENIR_MEDIUM,
    marginBottom: 5,
    fontSize: 16,
    color: Colors.CATEGORY_GREY,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: Colors.HEADER_BLACK,
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default PaymentBankTransferScreen;