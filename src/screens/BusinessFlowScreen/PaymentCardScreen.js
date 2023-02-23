import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import PurpleCloset from '../../../assets/images/purplecloset.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  CustomButton,
  CustomBottomTab,
  Nav,
  HomeNav,
  CustomBorder,
  Spacer,
} from '../../components/CustomComponents';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const PaymentCardScreen = ({navigation}) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const location = [
    {location: 'Jumia', image: '0ne'},
    {location: 'Shopify', image: 't0ne'},
  ];
  const [myData, setMyData] = useState(location);
  const [password, setPassword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Lagos');
  return (
    <View style={styles.container}>
      <HomeNav text="Payment" onPress={() => navigation.goBack()} />

      <View style={styles.header}>
        <View style={styles.body}>
          <Text style={styles.duration}>
            Please enter your card details carefully below
          </Text>
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.username}>Card Number</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Enter digits"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <Text style={styles.username}>CVV</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder="Enter the 3-digits "
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <Text style={styles.username}>Expiration Date</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                placeholder=""
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={text => setPassword(text)}
              />
              <MaterialCommunityIcons
                name={'calendar-range-outline'}
                size={22}
                color={Colors.DEFAULT_PINK}
                style={{marginRight: 10}}
                onPress={() => setIsPasswordShow(!isPasswordShow)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          text="Pay ₦14,000.00"
          onPress={() => navigation.navigate('PaymentSuccessScreen')}
          type="PRIMARY"
        />
      </View>
    </View>
  );
};

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
  pubDate: {
    paddingRight: 20,
    paddingTop: 20,
  },
  buttonView: {
    marginBottom: 40,
    paddingHorizontal: 20,
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
    lineHeight: 19.6,
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
    fontSize: 16,
    lineHeight: 24,
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
    color: Colors.DEFAULT_PURPLE,
    fontFamily: Font.AVENIR_BLACK,
    fontSize: 14,
    position: 'absolute',
    marginHorizontal: 103,
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
  action_text: {
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
    height: 40,
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
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
